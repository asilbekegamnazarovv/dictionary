import Image from "next/image";
import Link from "next/link";
import logo from "@/components/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="cntr mt-5 flex items-center justify-between border p-2 rounded-full backdrop-blur-lg bg-gray-400/10 border-gray-400/20 dark:bg-white/10 dark:border-white/20">
        <Link href={"/"} className="border rounded-full p-1 bg-white">
          <Image src={logo} loading="eager" alt="this is a picture" />
        </Link>
        <div>
          <ul></ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
