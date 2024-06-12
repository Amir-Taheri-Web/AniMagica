"use client";

import Image from "next/image";
import spinner from "@/public/spinner.svg";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { IAnimeProps } from "@/types/types";
import fetchAnimes from "@/app/actions";
import AnimeCard from "./AnimeCard";

let page = 2;

const Loader = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<IAnimeProps[]>([]);

  useEffect(() => {
    fetchAnimes(page).then((res) =>
      setData((prevData) => [...prevData, ...res])
    );
    page++;
  }, [inView]);

  return (
    <div className="flex flex-col gap-16 justify-center pt-16">
      <ul className="grid grid-cols-4 gap-16 auto-rows-[1fr]">
        {data.map((item: IAnimeProps, index: number) => (
          <AnimeCard key={`${item.id}`} animeData={item} index={index} />
        ))}
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
