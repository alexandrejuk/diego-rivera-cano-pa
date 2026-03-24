export type ServiceLandingEntry = {
  pageTitle: string;
  metaDescription: string;
  kicker: string;
  headline: string;
  intro: string;
  bodyParagraph: string;
  highlightsTitle: string;
  highlights: [string, string, string];
  faqTitle: string;
  faqSubtitle: string;
  faqItems: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
};
