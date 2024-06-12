import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { FC } from "react";
import { TRootLayoutProps } from "@/types/types";
import Layout from "@/layout/Layout";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AniMagica",
  description: "Browse and find anime",
};

const RootLayout: FC<TRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="bg-color-1" suppressHydrationWarning>
      <body className={nunito.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
