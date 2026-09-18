import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://kodbuster.github.io/KodBuster_ru/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KodBuster — сайты с характером и системой",
    template: "%s — KodBuster",
  },
  description: "Создаём лендинги и корпоративные сайты: стратегия, дизайн, разработка, запуск и проверка в реальных браузерах.",
  applicationName: "KodBuster",
  alternates: { canonical: siteUrl },
  icons: { icon: "./favicon.svg" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "KodBuster",
    title: "KodBuster — сайты с характером и системой",
    description: "Стратегия, дизайн и разработка сайтов для бизнеса.",
  },
  twitter: {
    card: "summary",
    title: "KodBuster — сайты с характером и системой",
    description: "Стратегия, дизайн и разработка сайтов для бизнеса.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10120f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
