import { Wrapper } from "@/components/wrapper/Wrapper";
import ThemeProvider from "@/providers/themeProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEI - Sistema de Estudos Integrado",
  description:
    "Encontre todos os recursos de estudo que você precisar, em um só lugar. Resumos, questões, vídeos e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${poppins.className} overflow-x-hidden transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
