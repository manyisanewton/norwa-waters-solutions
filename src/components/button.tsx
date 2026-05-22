import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "light" | "water";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link className={`button-link button-link--${variant}`} href={href}>
      {children}
      <span aria-hidden="true">-&gt;</span>
    </Link>
  );
}
