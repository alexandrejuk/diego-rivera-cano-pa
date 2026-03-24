import { XMLParser } from "fast-xml-parser";

type FeedSource = {
  name: string;
  url: string;
};

export type NewsItem = {
  title: string;
  link: string;
  source: string;
  publishedAt: string;
  timestamp: number;
  description: string;
  imageUrl?: string;
};

const feedSources: FeedSource[] = [
  { name: "Reuters World", url: "https://feeds.reuters.com/Reuters/worldNews" },
  { name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml" },
  { name: "El Pais", url: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada" },
  { name: "CNN en Espanol", url: "https://cnnespanol.cnn.com/feed/" },
];

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  parseTagValue: true,
  trimValues: true,
});

function normalizeTextField(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "object" && value !== null && "#text" in value) {
    const inner = (value as { "#text"?: unknown })["#text"];
    return typeof inner === "string" ? inner.trim() : "";
  }
  return "";
}

function normalizeLinkField(link: unknown): string {
  if (link == null) return "";
  if (typeof link === "string") return link.trim();
  if (Array.isArray(link)) {
    for (const piece of link) {
      const s = normalizeLinkField(piece);
      if (s) return s;
    }
    return "";
  }
  if (typeof link === "object") {
    const o = link as Record<string, unknown>;
    if (typeof o["#text"] === "string") return o["#text"].trim();
    if (typeof o["@_href"] === "string") return o["@_href"].trim();
  }
  return "";
}

function publishedRaw(item: Record<string, unknown>): string {
  const keys = ["pubDate", "isoDate", "published", "updated", "dc:date"] as const;
  for (const key of keys) {
    const s = normalizeTextField(item[key]);
    if (s) return s;
  }
  return "";
}

function firstImgSrcFromHtml(html: string): string | undefined {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (!match?.[1]) return undefined;
  return match[1].replaceAll("&amp;", "&").trim();
}

function isHttpUrl(url: string): boolean {
  return /^https?:\/\//i.test(url.trim());
}

function mediaUrlFromNode(node: unknown): string | undefined {
  if (node == null || typeof node !== "object") return undefined;
  const o = node as Record<string, unknown>;
  const url = o["@_url"];
  if (typeof url === "string" && isHttpUrl(url)) return url.trim();
  return undefined;
}

function collectUrlsFromMediaNode(node: unknown): string[] {
  if (node == null) return [];
  const list = Array.isArray(node) ? node : [node];
  const out: string[] = [];
  for (const n of list) {
    const u = mediaUrlFromNode(n);
    if (u) out.push(u);
  }
  return out;
}

function imageUrlsFromMediaContent(node: unknown): string[] {
  if (node == null) return [];
  const list = Array.isArray(node) ? node : [node];
  const out: string[] = [];
  for (const n of list) {
    if (!n || typeof n !== "object") continue;
    const o = n as Record<string, unknown>;
    const url = o["@_url"];
    const type = o["@_type"];
    if (typeof url !== "string" || !isHttpUrl(url)) continue;
    if (type == null || String(type).startsWith("image")) {
      out.push(url.trim());
    }
  }
  return out;
}

function rawMarkupFromItem(item: Record<string, unknown>): string {
  const keys = ["description", "summary", "content:encoded", "content"] as const;
  for (const key of keys) {
    const v = item[key];
    if (typeof v === "string" && v.length > 0) return v;
    const t = normalizeTextField(v);
    if (t.length > 0) return t;
  }
  return "";
}

function extractImageFromItem(item: Record<string, unknown>, rawDescription: string): string | undefined {
  const enclosure = item.enclosure;
  const encList = Array.isArray(enclosure) ? enclosure : enclosure ? [enclosure] : [];
  for (const enc of encList) {
    if (!enc || typeof enc !== "object") continue;
    const o = enc as Record<string, unknown>;
    const type = o["@_type"];
    const url = o["@_url"];
    if (typeof url === "string" && isHttpUrl(url)) {
      if (type == null || String(type).startsWith("image")) {
        return url.trim();
      }
    }
  }

  const mediaKeys = [
    "media:thumbnail",
    "media:content",
    "media:group",
  ] as const;

  for (const key of mediaKeys) {
    const node = item[key];
    if (key === "media:group" && node && typeof node === "object") {
      const group = node as Record<string, unknown>;
      const thumb = collectUrlsFromMediaNode(group["media:thumbnail"]);
      if (thumb[0]) return thumb[0];
      const content = imageUrlsFromMediaContent(group["media:content"]);
      if (content[0]) return content[0];
      continue;
    }
    if (key === "media:content") {
      const urls = imageUrlsFromMediaContent(node);
      if (urls[0]) return urls[0];
      continue;
    }
    const urls = collectUrlsFromMediaNode(node);
    if (urls[0]) return urls[0];
  }

  const fromHtml = firstImgSrcFromHtml(rawDescription);
  if (fromHtml && isHttpUrl(fromHtml)) return fromHtml;

  return undefined;
}

function parseItems(xml: string): Record<string, unknown>[] {
  const parsed = parser.parse(xml);
  const rssItems = parsed?.rss?.channel?.item;
  const atomEntries = parsed?.feed?.entry;

  if (Array.isArray(rssItems)) return rssItems as Record<string, unknown>[];
  if (rssItems) return [rssItems as Record<string, unknown>];
  if (Array.isArray(atomEntries)) return atomEntries as Record<string, unknown>[];
  if (atomEntries) return [atomEntries as Record<string, unknown>];
  return [];
}

type FeedFetchResult = {
  items: NewsItem[];
  /** Network failure, non-OK HTTP, or thrown while reading this feed */
  feedFailed: boolean;
};

const FEED_FETCH_MS = 25_000;

async function fetchFeed(source: FeedSource): Promise<FeedFetchResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FEED_FETCH_MS);

  try {
    const response = await fetch(source.url, {
      cache: "no-store",
      signal: controller.signal,
      headers: {
        Accept: "application/rss+xml, application/xml, application/atom+xml, text/xml;q=0.9, */*;q=0.8",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      return { items: [], feedFailed: true };
    }

    const xml = await response.text();
    const items = parseItems(xml);

    const mapped = items
      .map((item) => {
        const title = normalizeTextField(item.title);
        const link = normalizeLinkField(item.link);
        const publishedAt = publishedRaw(item);
        const timestamp = new Date(publishedAt).getTime();
        const rawMarkup = rawMarkupFromItem(item);
        const description = rawMarkup.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
        const imageUrl = extractImageFromItem(item, rawMarkup);

        if (!title || !link || Number.isNaN(timestamp)) {
          return null;
        }

        return {
          title,
          link,
          source: source.name,
          publishedAt,
          timestamp,
          description,
          ...(imageUrl ? { imageUrl } : {}),
        } satisfies NewsItem;
      })
      .filter((entry): entry is NewsItem => entry !== null);

    return { items: mapped, feedFailed: false };
  } catch {
    return { items: [], feedFailed: true };
  } finally {
    clearTimeout(timeoutId);
  }
}

export type AggregatedNewsResult = {
  items: NewsItem[];
  /** Every RSS source failed; no items were returned */
  allSourcesFailed: boolean;
};

function mergeAndSortNews(feedResults: FeedFetchResult[], limit: number): AggregatedNewsResult {
  const allSourcesFailed =
    feedResults.length > 0 && feedResults.every((result) => result.feedFailed);

  const merged = feedResults.flatMap((r) => r.items);

  const uniqueByLink = new Map<string, NewsItem>();
  for (const item of merged) {
    if (!uniqueByLink.has(item.link)) {
      uniqueByLink.set(item.link, item);
    }
  }

  const items = Array.from(uniqueByLink.values())
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, limit);

  return { items, allSourcesFailed };
}

export async function getAggregatedNewsDetailed(limit = 24): Promise<AggregatedNewsResult> {
  const results = await Promise.all(feedSources.map((source) => fetchFeed(source)));
  return mergeAndSortNews(results, limit);
}

export async function getAggregatedNews(limit = 24): Promise<NewsItem[]> {
  const { items } = await getAggregatedNewsDetailed(limit);
  return items;
}
