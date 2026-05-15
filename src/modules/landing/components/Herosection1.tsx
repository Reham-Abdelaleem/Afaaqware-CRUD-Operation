import HeroSections from "@/components/organisms/HeroSections";
import { hero } from "../../../../public/assets/images/images";
import Title from "@/components/atoms/Title";
import TextHighlight from "@/components/atoms/TextHighlight";
import { useTranslations } from "next-intl";
export default function Herosection1() {
  const t = useTranslations();
  return (
    <>
      <HeroSections
        image={hero}
        alt="hero-image"
        textAlign="left"
        title={
          <>
            <Title size="xl" className="leading-15">
              {t("HomePage.heroSection.title1")}
              <TextHighlight>
                {t("HomePage.heroSection.hightLight1")}
              </TextHighlight>
              {t("HomePage.heroSection.title2")}
              <br />
              {t("HomePage.heroSection.title3")}
              <TextHighlight>
                {t("HomePage.heroSection.hightLight2")}
              </TextHighlight>
              <br />
              {t("HomePage.heroSection.title4")}
            </Title>
          </>
        }
        text="HomePage.heroSection.text"
        primaryBtn="HomePage.heroSection.btn1"
        secondaryBtn="HomePage.heroSection.btn2"
      />
    </>
  );
}
