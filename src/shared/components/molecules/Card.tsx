import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import Images from "../atoms/Images";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

interface Props {
  src: string | StaticImageData;
  alt: string;
  title: string;
  text: string;
  btn?: string;
}

export default function Card({ src, alt, title, text, btn }: Props) {
  const t = useTranslations();
  console.log(t);
  return (
    <div className="w-76 px-5 py-5 ds-bg flex flex-col justify-center items-center rounded-lg Reveal-Section">
      <Images src={src} alt={alt} width={300} height={300} />

      <Title
        center
        className="mt-3 ds-text-primary text-center ds-text-base ds-font-bold"
      >
        {t(title)}
      </Title>

      <Text center className="my-3 text-center ds-text-secondary ds-text-sm">
        {t(text)}
      </Text>

      <Button size="md" className="ds-bg-primary ds-text-white ds-rounded-md">
        {t("HomePage.HomeBtn")}
      </Button>
    </div>
  );
}
