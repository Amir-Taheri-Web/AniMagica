import { IAnimeProps } from "@/types/types";
import AnimeCard from "@/components/AnimeCard";
import fetchAnimes from "./actions";
import Loader from "@/components/Loader";

const Home = async () => {
  const data: IAnimeProps[] = await fetchAnimes(1);

  return (
    <article className="pt-12 pb-20">
      <h2 className="text-3xl font-bold text-white mb-8">Explore Anime</h2>

      <ul className="grid grid-cols-4 gap-16 auto-rows-[1fr]">
        {data.map((item: IAnimeProps, index: number) => (
          <AnimeCard key={item.id} animeData={item} index={index} />
        ))}

      </ul>
        <Loader />
    </article>
  );
};

export default Home;
