import type { Metadata } from "next";
import { Varela_Round, Nunito_Sans } from "next/font/google";
import "./globals.css";
import AnalyticsWrapper from "@/components/analytics/analytics-provider";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Protocolo NeuroBaby | Ative o Potencial Máximo do Seu Bebê com 15 Minutos/Dia",
  description: "O primeiro ano de vida molda 85% do cérebro do seu filho. Descubra o checklist prático de neuroestimulação para ativar o potencial do seu bebê.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://player-vz-e8b8ffdd-f5d.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://b-vz-e8b8ffdd-f5d.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://config.tv.pandavideo.com.br" />
      </head>
      <body
        className={`${varelaRound.variable} ${nunitoSans.variable} antialiased font-sans bg-background text-foreground`}
        suppressHydrationWarning
      >
        <AnalyticsWrapper />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
