import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { ReactNode } from "react";
interface Props {
  title?: ReactNode;
  text?: ReactNode;
}
export default function Box3({ title, text }: Props) {
  return (
    <div className="ds-bg p-5 rounded-lg w-70">
      <Title variant="main" center={true}>
        {title}
      </Title>
      <Text center={true}>{text}</Text>
    </div>
  );
}
