import { XMLParser } from "fast-xml-parser";

type FeedSource = {
  name: string;
  url: string;
};

type RawItem = {
  title?: string;
  link?: string | { "#text"?: string };
  pubDate?: string;
  isoDate?: string;
  description?: string;
};

export type NewsItem = {
  title: string;
  link: string;
  source: string;
  publishedAt: string;
  timestamp: number;
  description: string;
};

const feedSources: FeedSource[] = [
  { name: "Reuters World", url: "https://feeds.reuters.com/Reuters/worldNews" },
  { name: "BBC World", url: "http://feeds.bbci.co.uk/news/world/rss.xml" },
  { name: "El Pais", url: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada" },
  { name: "CNN en Espanol", url: "https://cnnespanol.cnn.com/feed/" },
];

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  parseTagValue: true,
  trimValues: true,
});

function normalizeLink(link: RawItem["link"]): string {
  if (!link) return "";
  if (typeof link === "string") return link;
  return link["#text"] ?? "";
}

function parseItems(xml: string): RawItem[] {
  const parsed = parser.parse(xml);
  const rssItems = parsed?.rss?.channel?.item;
  const atomEntries = parsed?.feed?.entry;

  if (Array.isArray(rssItems)) return rssItems;
  if (rssItems) return [rssItems];
  if (Array.isArray(atomEntries)) return atomEntries;
  if (atomEntries) return [atomEntries];
  return [];
}

async function fetchFeed(source: FeedSource): Promise<NewsItem[]> {
  try {
    const response = await fetch(source.url, {
      next: { revalidate: 1800 },
      headers: {
        "User-Agent": "NewsAggregator/1.0 (+https://example.com)",
      },
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    const items = parseItems(xml);

    return items
      .map((item) => {
        const title = (item.title ?? "").trim();
        const link = normalizeLink(item.link).trim();
        const publishedAt = item.pubDate ?? item.isoDate ?? "";
        const timestamp = new Date(publishedAt).getTime();
        const description = (item.description ?? "").replace(/<[^>]+>/g, "").trim();

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
        } satisfies NewsItem;
      })
      .filter((entry): entry is NewsItem => entry !== null);
  } catch {
    return [];
  }
}

export async function getAggregatedNews(limit = 24): Promise<NewsItem[]> {
  const allFeeds = await Promise.all(feedSources.map((source) => fetchFeed(source)));
  const merged = allFeeds.flat();

  const uniqueByLink = new Map<string, NewsItem>();
  for (const item of merged) {
    if (!uniqueByLink.has(item.link)) {
      uniqueByLink.set(item.link, item);
    }
  }

  return Array.from(uniqueByLink.values())
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, limit);
}
