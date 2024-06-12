import Image from "next/image";
import logo from "@/public/logo.svg";
import twitter from "@/public/twitter.svg";
import instagram from "@/public/instagram.svg";
import tiktok from "@/public/tiktok.svg";

const Footer = () => {
  return (
    <footer className="bg-color-5">
      <div className="max-container padding-x flex justify-between max-lg:flex-col gap-8 items-center py-4">
        <p className="text-white font-semibold">
          ©Copyright - All rights reserved
        </p>
        <Image src={logo} alt="footer logo" width={50} />
        <ul className="flex gap-8">
          <li>
            <button type="button" className="hover:scale-125">
              <Image src={twitter} alt="twitter logo" width={20} />
            </button>
          </li>

          <li>
            <button type="button" className="hover:scale-125">
              <Image src={tiktok} alt="tiktok logo" width={20} />
            </button>
          </li>

          <li>
            <button type="button" className="hover:scale-125">
              <Image src={instagram} alt="instagram logo" width={20} />
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
