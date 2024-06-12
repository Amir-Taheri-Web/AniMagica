import { FC } from "react";
import Hero from "./Hero";
import { TLayoutProps } from "@/types/types";

const Layout: FC<TLayoutProps> = ({ children }) => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Layout;
