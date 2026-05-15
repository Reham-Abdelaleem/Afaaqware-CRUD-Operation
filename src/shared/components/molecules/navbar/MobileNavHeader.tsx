import { X } from "lucide-react";
import NavIconButton from "../../atoms/navbar/NavIconButton";
import Logo from "../../atoms/Logo";

export default function MobileNavHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <Logo />
      <NavIconButton onClick={onClose}>
        <X size={30} />
      </NavIconButton>
    </div>
  );
}
