import { IAnimeCardProps } from "@/types/types";
import Image from "next/image";
import { FC } from "react";
import episodes from "@/public/episodes.svg";
import star from "@/public/star.svg";
import MotionDiv from "./MotionDiv";

const VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const AnimeCard: FC<IAnimeCardProps> = ({ animeData, index }) => {
  return (
    <MotionDiv
      className="flex flex-col justify-center"
      variants={VARIANTS}
      transition={{ duration: 0.5, delay: index * 0.25, ease: "easeIn" }}
      initial="initial"
      animate="animate"
      viewport={{ amount: 0 }}
    >
      <div className="w-full h-full flex justify-center">
        <Image
          src={`https://shikimori.one${animeData.image.original}`}
          alt={animeData.name}
          width={300}
          height={450}
          className="rounded-xl"
        />
      </div>

      <div className="flex justify-between gap-4 py-4 max-sm:py-2">
        <h3 className="text-white font-bold text-xl capitalize whitespace-nowrap overflow-hidden overflow-ellipsis">
          {animeData.name}
        </h3>
        <span className="text-white bg-color-5 font-bold px-2 py-1 flex items-center rounded-lg text-sm">
          {animeData.kind}
        </span>
      </div>

      <div className=" flex gap-8 items-center">
        <span className="flex gap-2 items-center">
          <Image src={episodes} alt="episodes icon" width={20} height={20} />{" "}
          <span className="font-bold text-white">{animeData.episodes}</span>
        </span>

        <span className="flex gap-2 items-center">
          <Image src={star} alt="star icon" width={20} height={20} />{" "}
          <span className="font-bold text-color-3">{animeData.score}</span>
        </span>
      </div>
    </MotionDiv>
  );
};

export default AnimeCard;
