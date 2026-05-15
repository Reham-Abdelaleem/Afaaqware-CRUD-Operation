import { ThemeToggle } from "../../atoms/ThemeButton";
import NavLink from "../../atoms/navbar/NavLink";
import Button from "../../atoms/Button";
import { useTranslations } from "next-intl";

interface RouteItem {
  id: number;
  path: string;
  key: string;
}

interface MobileNavLinksProps {
  mainRoutes: RouteItem[];
  dropdownRoutes: RouteItem[];
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  closeNavbar: () => void;
}

export default function MobileNavLinks({
  mainRoutes,
  closeNavbar,
}: MobileNavLinksProps) {
  const t = useTranslations();
  return (
    <>
      <ul className="text-dark dark:text-light mt-4 flex flex-col items-center gap-2 px-2 text-lg font-medium">
        {mainRoutes.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              onClick={closeNavbar}
              className="text-2xl md:text-2xl"
            >
              {t(item.key)}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center gap-2 px-2 mt-7">
        <ThemeToggle />
        <Button
          tag="link"
          href="/login"
          className="mt-5"
          size="md"
          variant="ghost"
        >
          {t("navbar.login")}
        </Button>
        <Button tag="link" href="/signup" size="md" variant="primary">
          {t("navbar.signup")}
        </Button>
      </div>
    </>
  );
}
