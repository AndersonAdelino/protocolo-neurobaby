import type { Metadata } from "next";
import { Varela_Round, Nunito_Sans } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${varelaRound.variable} ${nunitoSans.variable} antialiased font-sans bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
