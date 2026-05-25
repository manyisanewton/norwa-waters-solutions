import Image from "next/image";
import Link from "next/link";
import { assets, contact } from "@/lib/site-data";
import { ButtonLink } from "./button";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  "Water Pumping Solutions",
  "Water Treatment Systems",
  "Desalination Solutions",
  "Maintenance & Service Contracts",
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image
            alt="Norwa Waters logo"
            height={72}
            src={assets.logo}
            width={200}
          />
          <p>
            Water treatment systems for industries, institutions, communities,
            and commercial projects.
          </p>
        </div>

        <div>
          <h3>Company</h3>
          <nav className="footer-links">
            {companyLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3>Services</h3>
          <nav className="footer-links">
            {serviceLinks.map((service) => (
              <Link href="/services" key={service}>
                {service}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3>Contact</h3>
          <p>{contact.address}</p>
          <p>{contact.hours}</p>
          <a className="footer-contact-link" href={`tel:${contact.phone}`}>
            {contact.phone}
          </a>
          <a className="footer-contact-link" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>

        <div className="footer-action">
          <h3>Inquiries</h3>
          <p>Looking for a water treatment solution?</p>
          <ButtonLink href="/contact" variant="water">
            Get a Quote
          </ButtonLink>
          <Link className="subcontractor-link" href="/contact#partners">
            Partner with us
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>(c) 2026 Norwa Waters. All rights reserved.</span>
        <Link href="/">Privacy Policy</Link>
        <span>Built for clean water impact.</span>
      </div>
    </footer>
  );
}
