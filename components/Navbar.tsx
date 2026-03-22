"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/components/logo.png";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";
import { Kbd } from "./ui/kbd";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 5, name: "Words", href: "/words" },
  ];
  return (
    <header>
      <nav className="cntr mt-5 flex items-center justify-between border p-2 rounded-full backdrop-blur-lg bg-gray-400/10 border-gray-400/20 dark:bg-gray-600/10 dark:border-gray-500/20">
        <div className="flex items-center gap-5">
          <Link
            href={"/"}
            className="w-12.5 h-10 flex items-center justify-center border rounded-full bg-white dark:bg-[#0A0A0A]"
          >
            <Image src={logo} loading="eager" alt="this is a picture" />
          </Link>
          <InputGroup className="h-9 bg-transparent">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align={"inline-end"}>
              <Kbd>CTRL + K</Kbd>
            </InputGroupAddon>
          </InputGroup>
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
    </header>
  );
};

export default Navbar;
