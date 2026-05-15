import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { ReactNode } from "react";
export default function Headers() {
  return (
    <div className="flex flex-col gap-4 text-center p-10"> 
   <Title className="">How It <span className="ds-text-alt">Works</span></Title>
   <Text className="ds-text-secondary">Get started in just 3 simple steps</Text>
    
    </div>

    )}
    