import TopBar from "../organisms/TopBar";
import Navbar from "../organisms/Navbar";
interface Props {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
