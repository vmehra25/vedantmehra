import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "@/components/theme-switch";

export const NavBar = () => {
  return (
    <header className="border-b border-[#c2ae93] dark:border-[#c2ae93]/30">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-semibold text-[#12354e] dark:text-[#f1ece3]">
          Vedant Mehra
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[#12354e] dark:text-[#f1ece3]">
          <Link href="/" className="text-[#12354e] dark:text-[#f1ece3]">
            Reading
          </Link>
          <Link href="/about" className="text-[#12354e] dark:text-[#f1ece3]">
            About
          </Link>
          <Link
            isExternal
            href="https://www.linkedin.com/in/vedantmehratech/"
            className="text-[#12354e] dark:text-[#f1ece3]"
          >
            LinkedIn
          </Link>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
};
