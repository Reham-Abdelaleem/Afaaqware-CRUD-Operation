import Link from "next/link";
import { useTheme } from "next-themes";
interface Props {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({
  to,
  children,
  onClick,
  className = "",
}: Props) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <Link
      href={to}
      onClick={onClick}
      className={`${
        isDark ? "hover:text-gray-300" : "hover:text-gray-900"
      } active:text-primary focus:text-primary ds-text-secondary  transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}
