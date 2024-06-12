import AnimeCard from "@/components/AnimeCard";
import { IAnimeProps } from "@/types/types";

const fetchAnimes = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?order=popularity&limit=8&page=${page}`
  );

  const data = await response.json();

  return data.map((item: IAnimeProps, index: number) => (
    <AnimeCard key={`${item.id}`} animeData={item} index={index} />
  ));
};

export default fetchAnimes;
