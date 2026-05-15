import Link from "next/link";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Logo() {
  return (
    <Link
      href="/"
      className={`${nunito.className} text-2xl font-bold ds-text-alt select-none`}
    >
      Survey<span className="ds-text-primary">Land</span>
    </Link>
  );
}
