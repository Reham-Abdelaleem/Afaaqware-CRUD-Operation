import { StaticImageData } from "next/image";
import Images from "../atoms/Images";
import LeftHero from "../molecules/LeftHero";
import { ReactNode } from "react";
interface props {
  title: ReactNode;
  text: ReactNode;
  button1: string;
  button2: string;
  src: string | StaticImageData;
  alt: string;
}
export default function Herosection({
  title,
  text,
  button1,
  button2,
  alt,
  src,
}: props) {
  return (
    <div className="ds-bg text-white p-5  flex justify-center lg:justify-between items-center ">
      <LeftHero title={title} text={text} button1={button1} button2={button2} />
      <Images src={src} alt={alt} width={500} className="hidden lg:flex" />
    </div>
  );
}
