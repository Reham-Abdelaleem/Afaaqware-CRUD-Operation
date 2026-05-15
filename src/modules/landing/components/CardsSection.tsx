import Box from "@/components/molecules/SearchInput";
import { dataBoxes } from "@/utils/data";
import HowItWorks from "@/components/organisms/HowItWorks";

export default function CardsSection() {
  return (
    <div>
      <HowItWorks />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto max-w-5xl px-6">
        {dataBoxes.map((box) => (
          <Box key={box.id} title={box.title} text={box.text} />
        ))}
      </div>
    </div>
  );
}
