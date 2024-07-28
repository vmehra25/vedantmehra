import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export const NavBar = () => {
  return (
    <section className="p-4">
      <div className="flex items-center justify-between">
        <Link
          isBlock
          href="/"
          className="text-blue-950 lg:text-7xl md:text-6xl text-5xl font-bold mb-4 transition"
        >
          Vedant Mehra
        </Link>
        <div className="h-full flex flex-col items-center justify-between">
          <Link isExternal href="https://www.linkedin.com/in/vmehra25/">
            <Button
              radius="full"
              className="bg-red-500 text-white mb-2"
              target="_blank"
            >
              Contact
            </Button>
          </Link>
          <Link href="/about" className="mt-2">
            <p>About me</p>
          </Link>
        </div>
      </div>
    </section>
  );
};
