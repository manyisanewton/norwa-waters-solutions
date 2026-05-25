"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { assets, navLinks } from "@/lib/site-data";
import { ButtonLink } from "./button";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
        <Image
          priority
          src={assets.logo}
          alt="Norwa Waters logo"
          width={190}
          height={69}
        />
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`site-nav ${isOpen ? "site-nav--open" : ""}`}>
        {navLinks.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              className={active ? "active" : undefined}
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="header-cta">
        <ButtonLink href="/contact" variant="water">
          Get a Quote
        </ButtonLink>
      </div>
    </header>
  );
}
