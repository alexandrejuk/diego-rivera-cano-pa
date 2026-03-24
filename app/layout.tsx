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
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
  },
  title: {
    default: "Diego Rivera Cano | Abogado",
    template: "%s | Diego Rivera Cano",
  },
  description:
    "Asesoria legal en Panama: bienes raices, inversion extranjera, derecho societario, contratos, apoyo bancario y tramites regulatorios.",
  keywords: [
    "abogado en Panama",
    "bufete de abogados",
    "bienes raices Panama",
    "inversion extranjera Panama",
    "derecho societario Panama",
    "contratos comerciales Panama",
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
      "Operaciones inmobiliarias, inversion extranjera y asesoria societaria y transaccional en Panama.",
    url: "/",
    siteName: "Diego Rivera Cano Abogado",
    locale: "es_PA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Rivera Cano | Abogado",
    description:
      "Operaciones inmobiliarias, inversion extranjera y asesoria societaria y transaccional en Panama.",
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
      {/* suppressHydrationWarning: extensions (e.g. cz-shortcut-listen on body) mutate DOM before hydrate */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
