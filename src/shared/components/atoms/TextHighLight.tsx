import { cn } from "@/lib/cn";
interface Props {
  className?: string;
  children?: React.ReactNode;
}
export default function TextHighlight({ className, children }: Props) {
  return (
    <span className={cn("font-semibold ds-text-alt ", className)}>
      {children}
    </span>
  );
}
