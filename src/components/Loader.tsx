"use client";

import Image from "next/image";
import spinner from "@/public/spinner.svg";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { TAnimeCard } from "@/types/types";
import fetchAnimes from "@/app/actions";

let page = 2;

const Loader = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<TAnimeCard>([]);

  useEffect(() => {
    if (inView) {
      fetchAnimes(page).then((res) =>
        setData((prevData) => [...prevData, ...res])
      );
      page++;
    }
  }, [inView]);

  return (
    <div className="flex flex-col gap-16 justify-center pt-16">
      <ul className="grid grid-cols-4 max-lg:grid-cols-2 gap-16 max-sm:gap-8 auto-rows-[1fr]">
        {data}
      </ul>

      <Image
        src={spinner}
        alt="loader image"
        width={80}
        className="self-center"
        ref={ref}
      />
    </div>
  );
};

export default Loader;
