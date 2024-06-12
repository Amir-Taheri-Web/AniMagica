export type TRootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type TLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export interface IAnimeProps {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

export interface IAnimeCardProps {
  animeData: IAnimeProps;
  index: number;
}

export type TAnimeCard = JSX.Element[];
