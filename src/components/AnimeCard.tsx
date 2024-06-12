import { IAnimeCardProps } from "@/types/types";
import Image from "next/image";
import { FC } from "react";
import episodes from "@/public/episodes.svg";
import star from "@/public/star.svg";

const AnimeCard: FC<IAnimeCardProps> = ({ animeData, index }) => {
  return (
    <li className="flex flex-col">
      <div className="w-full h-full">
        <Image
          src={`https://shikimori.one${animeData.image.original}`}
          alt={animeData.name}
          width={300}
          height={500}
          className="w-full h-[500px] rounded-xl"
        />
      </div>

      <div className="flex justify-between gap-4 py-4">
        <h3 className="text-white font-bold text-xl capitalize whitespace-nowrap overflow-hidden overflow-ellipsis">
          {animeData.name}
        </h3>
        <span className="text-white bg-color-5 font-bold px-2 py-1 flex items-center rounded-lg text-sm">
          {animeData.kind}
        </span>
      </div>

      <div className=" flex gap-8 items-center">
        <span  className="flex gap-2 items-center">
          <Image src={episodes} alt="episodes icon" width={20} height={20} />{" "}
          <span className="font-bold text-white">{animeData.episodes}</span>
        </span>

        <span className="flex gap-2 items-center">
          <Image src={star} alt="star icon" width={20} height={20} />{" "}
          <span className="font-bold text-color-3">{animeData.score}</span>
        </span>
      </div>
    </li>
  );
};

export default AnimeCard;
