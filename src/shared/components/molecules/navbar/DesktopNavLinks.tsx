import NavLink from "../../atoms/navbar/NavLink";
import { useTranslations } from "next-intl";
export interface NavRoute {
  id: number;
  path: string;
  key: string;
}
interface DesktopNavLinksProps {
  mainRoutes: NavRoute[];
  dropdownRoutes: NavRoute[];
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  closeNavbar: () => void;
}
export default function DesktopNavLinks({ mainRoutes }: DesktopNavLinksProps) {
  const t = useTranslations();
  return (
    <ul className="text-light hidden items-center gap-6 text-base font-medium md:flex">
      {mainRoutes.map((item) => (
        <li key={item.id}>
          <NavLink to={item.path}>{t(item.key)}</NavLink>
        </li>
      ))}
    </ul>
  );
}
