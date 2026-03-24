import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.diego-rivera-cano-advogado.com"),
  title: {
    default: "Diego Rivera Cano | Abogado",
    template: "%s | Diego Rivera Cano",
  },
  description:
    "Bufete de abogados con atencion personalizada en derecho civil, familia y consumidor en Panama.",
  keywords: [
    "abogado en Panama",
    "bufete de abogados",
    "derecho civil",
    "derecho de familia",
    "derecho del consumidor",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      es: "/es",
      pt: "/pt",
    },
  },
  openGraph: {
    title: "Diego Rivera Cano | Abogado",
    description:
      "Atencion legal cercana con enfoque estrategico y resultados para clientes en Panama.",
    url: "/",
    siteName: "Diego Rivera Cano Abogado",
    locale: "es_PA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Rivera Cano | Abogado",
    description:
      "Atencion legal cercana con enfoque estrategico y resultados para clientes en Panama.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-PA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
