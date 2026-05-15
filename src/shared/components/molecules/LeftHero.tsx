import React, { ReactNode } from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

interface props{
  title:ReactNode,
  text:ReactNode,
  button1:string,
    button2:string,

}
const LeftHero = ({title,text,button1,button2}:props) => {
  return (
      <div>
        <Title size="xxxl" className="max-w-[655] w-2xl ">{title}</Title>
        <Text className="my-10 max-w-100" size="lg">{text}</Text>
        <div className="flex flex-col md:flex-row gap-5">
          <Button size="md" className="w-full max-w-75">{button1}</Button>
          <Button size="md" variant="outline1" className="w-full max-w-75">{button2}</Button>
        </div>
    </div>
  );
};

export default LeftHero;
