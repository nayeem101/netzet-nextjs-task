/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="px-4 pt-6 pb-4 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        <div className="md:hidden"></div>
        {/* Logo */}
        <div>
          <img src={"/fametonic-logo.png"} alt="Frametonic" className="h-11 md:h-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Button variant="nav" size="sm" className="text-lg text-[#A9A9A9]">
            About us
          </Button>
          <Button variant="nav" size="sm" className="text-lg text-[#A9A9A9]">
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
