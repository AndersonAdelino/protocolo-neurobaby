import type { Metadata } from "next";
import { Varela_Round, Nunito_Sans } from "next/font/google";
import "./globals.css";
import AnalyticsWrapper from "@/components/analytics/analytics-provider";

const varelaRound = Varela_Round({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Checklist do Bebê Esperto (0-12m) | Ative a Inteligência do Seu Bebê (0-12 Meses)",
  description: "Checklist diário prático de 15 minutos para acelerar o desenvolvimento motor e cognitivo do seu filho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preload" href="https://player-vz-e8b8ffdd-f5d.tv.pandavideo.com.br/embed/css/plyr.css" as="style" />
        <link rel="preload" href="https://player-vz-e8b8ffdd-f5d.tv.pandavideo.com.br/embed/css/styles.css" as="style" />
        <link rel="preload" href="https://player-vz-e8b8ffdd-f5d.tv.pandavideo.com.br/embed/css/pb.css" as="style" />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-e8b8ffdd-f5d/70022e63-6b1b-4be8-af7b-b688ff288030.json" as="fetch" />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-e8b8ffdd-f5d/config.json" as="fetch" />
        <link rel="dns-prefetch" href="https://b-vz-e8b8ffdd-f5d.tv.pandavideo.com.br" />
        <link rel="preload" href="https://b-vz-e8b8ffdd-f5d.tv.pandavideo.com.br/70022e63-6b1b-4be8-af7b-b688ff288030/playlist.m3u8" as="fetch" />
        <link rel="prerender" href="https://player-vz-e8b8ffdd-f5d.tv.pandavideo.com.br/embed/?v=70022e63-6b1b-4be8-af7b-b688ff288030" />
        <link rel="dns-prefetch" href="https://player-vz-e8b8ffdd-f5d.tv.pandavideo.com.br" />
      </head>
      <body
        className={`${varelaRound.variable} ${nunitoSans.variable} antialiased font-sans bg-background text-foreground`}
        suppressHydrationWarning
      >
        <AnalyticsWrapper />
        {children}
      </body>
    </html>
  );
}
