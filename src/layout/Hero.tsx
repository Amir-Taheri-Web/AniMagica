import Image from "next/image";
import logo from "@/public/logo.svg";
import anime from "@/public/anime.png";

const Hero = () => {
  return (
    <header className="bg-hero bg-cover">
      <div className="max-container flex max-lg:flex-col justify-between gap-8 items-center padding-y padding-x">
        <div className="flex flex-col gap-12">
          <Image src={logo} alt="hero logo" width={100} className="max-lg:self-center" />
          <h1 className="text-4xl font-extrabold text-white w-[27rem] max-lg:w-auto leading-[3.4rem]">
            Explore The Realm of Anime with{" "}
            <span className="text-color-2">AniMagica</span>
          </h1>
        </div>
        <div>
          <Image src={anime} alt="hero anime" width={500} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
