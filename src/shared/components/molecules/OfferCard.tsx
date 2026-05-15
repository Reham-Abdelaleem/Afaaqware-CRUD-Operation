import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

interface Props{
    title:string;
    offer:string
    price:string
}

export default function OffersCard({title,offer,price}:Props) {
  return (
    <div className="w-60 p-10 ds-bg flex flex-col justify-center ds-rounded-xl shadow-xl ">
      <Title center={true} size="xl" className="mb-10">
        {title}
      </Title>
      <Text center={true} size="md">
        {offer}
      </Text>
      <Text center={true} size="md">
        {price}
      </Text>
      <Button variant="primary" isRounded={true} className="mt-10 text-black font-semibold">
        Get Started
      </Button>
    </div>
  );
}
