import { FC } from "react";
import Hero from "./Hero";
import { TLayoutProps } from "@/types/types";
import Footer from "./Footer";

const Layout: FC<TLayoutProps> = ({ children }) => {
  return (
    <>
      <Hero />
      <main className="min-h-svh max-container padding-x">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
