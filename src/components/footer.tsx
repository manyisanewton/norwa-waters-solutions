import Link from "next/link";
import { contact, navLinks } from "@/lib/site-data";
import { ButtonLink } from "./button";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h2>Norwa Waters</h2>
          <nav className="footer-links">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3>Head Office</h3>
          <p>{contact.address}</p>
          <p>
            {contact.phone}
            <br />
            {contact.email}
          </p>
        </div>

        <div>
          <h3>Socials</h3>
          <nav className="footer-links footer-links--spaced">
            <a href="https://facebook.com" rel="noreferrer" target="_blank">
              Facebook
            </a>
            <a href="https://instagram.com" rel="noreferrer" target="_blank">
              Instagram
            </a>
            <a href="https://linkedin.com" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </nav>
        </div>

        <div>
          <h3>Inquiries</h3>
          <p>Looking for a water treatment solution?</p>
          <ButtonLink href="/contact">Get a Quote</ButtonLink>
          <Link className="subcontractor-link" href="/contact#partners">
            Partner with us
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <Link href="/">Privacy Policy</Link>
        <Link href="#top">Back to Top</Link>
        <span>(c) 2026 Norwa Waters. All rights reserved.</span>
      </div>
    </footer>
  );
}
