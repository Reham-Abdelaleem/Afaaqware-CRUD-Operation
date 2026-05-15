"use client";
import { useEffect, useState } from "react";
import { ListMinus } from "@/assets/icons/icons";
import { Routes } from "@/shared/utils/Routes";
import { cn } from "@/lib/cn";
import NavIconButton from "../atoms/navbar/NavIconButton";
import DesktopNavLinks from "../molecules/navbar/DesktopNavLinks";
import MobileNavHeader from "../molecules/navbar/MobileNavHeader";
import MobileNavLinks from "../molecules/navbar/MobileNavLinks";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import { ThemeToggle } from "../atoms/ThemeButton";
import { useTranslations } from "next-intl";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();

  const dropdownRoutes = Routes.filter((r) => r.id > 3);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNavbar = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={
        (cn("fixed top-0 z-50 h-20 w-full transition-all duration-300"),
        isScrolled ? "ds-bg-alt  shadow-md" : "ds-bg shadow-sm")
      }
    >
      <div
        className={cn(
          "ds-container mx-auto flex items-center justify-between py-2 sm:px-10 md:px-0 md:py-4",
        )}
      >
        <Logo />

        <DesktopNavLinks
          mainRoutes={Routes}
          dropdownRoutes={dropdownRoutes}
          dropdownOpen={dropdownOpen}
          toggleDropdown={() => setDropdownOpen((p) => !p)}
          closeNavbar={closeNavbar}
        />
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button tag="link" href="/login" size="md" variant="ghost">
            {t("navbar.login")}
          </Button>
          <Button tag="link" href="/signup" size="md" variant="primary">
            {t("navbar.signup")}
          </Button>
        </div>
        <div className="lg:hidden">
          <NavIconButton onClick={() => setOpen(true)}>
            <ListMinus size={30} />
          </NavIconButton>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "ds-bg fixed top-0 right-0 z-40 h-screen w-full transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <MobileNavHeader onClose={closeNavbar} />
        <MobileNavLinks
          mainRoutes={Routes}
          dropdownRoutes={dropdownRoutes}
          dropdownOpen={dropdownOpen}
          toggleDropdown={() => setDropdownOpen((p) => !p)}
          closeNavbar={closeNavbar}
        />
      </div>
    </nav>
  );
}
