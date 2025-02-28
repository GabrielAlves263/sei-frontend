import { Wrapper } from "@/components/wrapper/Wrapper";
import CustomSessionProvider from "@/providers/sessionProvider";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Poppins } from "next/font/google";
import { Slide, ToastContainer } from "react-toastify";
import "./globals.css";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEI - Sistema de Estudos Integrado",
  description:
    "Encontre todos os recursos de estudo que você precisar, em um só lugar. Resumos, questões, vídeos e muito mais.",
};

function isAuthPage(pathName: string): boolean {
  return pathName.includes("/login") || pathName.includes("/register");
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="pt-Br">
      <CustomSessionProvider session={session}>
        <body
          className={`${poppins.className} overflow-x-hidden transition-colors`}
        >
          <Wrapper>{children}</Wrapper>
          <ToastContainer
            position="bottom-right"
            hideProgressBar
            autoClose={3000}
            transition={Slide}
            pauseOnHover={false}
            limit={3}
            stacked
          />
        </body>
      </CustomSessionProvider>
    </html>
  );
}
