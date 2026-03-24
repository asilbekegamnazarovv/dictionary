"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/components/logo.png";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import Shortcuts from "./shortcuts";
import { BookOpenText, Home, Languages } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Words", href: "/words" },
    { id: 3, name: "Translate", href: "/translate" },
  ];

  const mediaNavLinks = [
    { id: 1, icon: <Home />, href: "/" },
    { id: 2, icon: <BookOpenText />, href: "/words" },
    { id: 3, icon: <Languages />, href: "/translate" },
  ];

  return (
    <header>
      <nav className="cntr mt-5 hidden md:flex items-center justify-between border p-2 rounded-full backdrop-blur-lg bg-gray-400/10 border-gray-400/20 dark:bg-gray-600/10 dark:border-gray-500/20">
        <div className="flex items-center gap-5">
          <Link
            href={"/"}
            className="w-12.5 h-10 flex items-center justify-center border rounded-full bg-white dark:bg-[#0A0A0A]"
          >
            <Image src={logo} loading="eager" alt="this is a picture" />
          </Link>
          <Shortcuts />
        </div>
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-2.5">
            {links.map((item) => {
              const { id, name, href } = item;
              const isActive = pathname === href;
              return (
                <li key={id}>
                  <Link
                    href={href}
                    className={`
              relative px-1 py-2 ${isActive ? "text-[#209CEE]" : "text-gray-700 dark:text-gray-300"}
              after:block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5
              after:bg-[#209CEE] rounded-full after:transition-all after:duration-300 capitalize
              ${isActive ? "after:w-full" : ""}
              hover:after:w-full
            `}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
      <div className="fixed right-0 bottom-0 left-0 flex md:hidden h-15 bg-olive-400 dark:bg-zinc-900 rounded-t-xl items-center justify-between px-10">
        {mediaNavLinks.map((item) => {
          const { href, icon, id } = item;
          const isActive = pathname === href;
          return (
            <div key={id}>
              <Link
                href={href}
                className={`py-0.5 ${isActive ? "text-[#209CEE]" : "text-gray-800 dark:text-gray-300"} bg-white w-full h-full rounded-full`}
              >
                {icon}
              </Link>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
