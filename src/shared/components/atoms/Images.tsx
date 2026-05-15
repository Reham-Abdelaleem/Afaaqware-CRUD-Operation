import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function Images({
  src,
  alt,
  className,
  width = 200,
  height = 200,
  priority = false,
}: Props) {
  const baseClasses = "w-full flex justify-center items-center";

  return (
    <div className={cn(baseClasses)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={100}
        className={cn(className)}
      />
    </div>
  );
}