import SectionCard from "../molecules/SectionCard";
import { SectionCardData } from "../../utils/data";

export default function HowItWorks() {
  return (
    <div className=" text-white !p-2 container !mx-auto !my-5 grid grid-cols-1 md:grid-cols-3  gap-11 ">
      {SectionCardData.map((card) => {
        return (
          <SectionCard key={card.id} title={card.title} text={card.text} />
        );
      })}
    </div>
  );
}
