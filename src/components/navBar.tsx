"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = cva("block py-2 px-3 rounded md:p-0", {
  variants: {
    variant: {
      default:
        "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700",
      active: "text-white bg-blue-700 md:bg-transparent md:text-blue-700",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const sections = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Quotes",
    href: "/quotes",
  },
  {
    name: "Writings",
    href: "/writings",
  },
];

export function NavBar() {
  const pathname = usePathname();
  console.log("PATH:", pathname);

  return (
    <nav
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
        {sections.map(({ name, href }) => {
          const isCurrent = pathname === href;
          return (
            <li key={name}>
              <Link
                href={href}
                className={navLink({
                  variant: isCurrent ? "active" : "default",
                })}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
