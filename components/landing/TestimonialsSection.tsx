import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

export function TestimonialsSection({ t }: Props) {
  return (
    <section id="testimonials" className="section-reveal mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          {t.testimonialSection.title}
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {t.testimonialSection.items.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm leading-7 text-zinc-600">"{testimonial.quote}"</p>
            <div className="mt-4">
              <p className="font-semibold text-zinc-900">{testimonial.name}</p>
              <p className="text-xs text-zinc-500">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
