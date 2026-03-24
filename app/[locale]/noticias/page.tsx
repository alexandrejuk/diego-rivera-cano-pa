import type { Metadata } from "next";
import Link from "next/link";
import { getAggregatedNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Noticias juridicas e gerais de portais relevantes.",
};

export const revalidate = 1800;

export default async function NewsPage() {
  const news = await getAggregatedNews(30);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-wide text-amber-700">
          Atualizado automaticamente
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-zinc-900 md:text-5xl">
          Noticias de portais confiaveis
        </h1>
        <p className="mt-3 max-w-3xl text-zinc-600">
          Esta pagina agrega noticias de grandes portais via RSS para facilitar
          acompanhamento rapido.
        </p>
      </div>

      {news.length === 0 ? (
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-zinc-600">
          Nenhuma noticia disponivel no momento. Tente novamente em alguns
          minutos.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {news.map((item) => (
            <article
              key={item.link}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-700">
                {item.source}
              </p>
              <h2 className="text-xl font-bold leading-7 text-zinc-900">
                {item.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600">
                {item.description || "Clique para ler a noticia completa no portal."}
              </p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-xs text-zinc-500">
                  {new Date(item.timestamp).toLocaleString("pt-BR", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </span>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-900 underline decoration-amber-500 underline-offset-4"
                >
                  Ler no portal
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
