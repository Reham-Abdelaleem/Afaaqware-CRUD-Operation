import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
interface Props {
  title?: ReactNode;
  text?: ReactNode;
  classname?: string;
}
export default function IntroSection({ title, text, classname }: Props) {
  return (
    <div className={cn("ds-bg p-5 ds-rounded-xl m-5" , classname)}>
      <Title variant="main" center={true} className="mb-2">
        {title}
      </Title>
      <Text center={true}>{text}</Text>
    </div>
  );
}
