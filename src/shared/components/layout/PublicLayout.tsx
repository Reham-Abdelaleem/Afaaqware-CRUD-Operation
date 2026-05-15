import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
interface Props {
  children: React.ReactNode;
}
export default function PublicLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
