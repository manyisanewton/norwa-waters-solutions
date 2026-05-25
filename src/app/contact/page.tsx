import Image from "next/image";
import { AnimatedSection } from "@/components/animated";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { assets, contact } from "@/lib/site-data";

const quoteFields = [
  { label: "First name", name: "first_name", required: true },
  { label: "Last name", name: "last_name", required: true },
  { label: "Email", name: "email", type: "email" as const, required: true },
  { label: "Phone", name: "phone", type: "tel" as const },
  {
    label: "Service needed",
    name: "service_needed",
    type: "select" as const,
    required: true,
    options: [
      "Water Pumping Solutions",
      "Water Treatment Systems",
      "Desalination Solutions",
      "Water Storage Solutions",
      "Maintenance & Service Contracts",
      "Technical Consultation & System Design",
      "Irrigation & Agricultural Solutions",
      "Industrial Water Solutions",
      "Solar-Powered Water Systems",
      "After-Sales Support & Training",
    ],
  },
  {
    label: "Project timeline",
    name: "project_timeline",
    type: "select" as const,
    options: ["Immediately", "Within 1 month", "Within 3 months", "Planning stage"],
  },
  { label: "Location", name: "location", placeholder: "Town, county, or site" },
  { label: "Subject", name: "subject", placeholder: "Project inquiry" },
  {
    label: "Project details",
    name: "project_details",
    type: "textarea" as const,
    placeholder: "Tell us about the source water, expected use, capacity, or current challenge.",
    required: true,
    wide: true,
  },
];

const partnerFields = [
  { label: "First name", name: "partner_first_name", required: true },
  { label: "Last name", name: "partner_last_name", required: true },
  { label: "Email", name: "partner_email", type: "email" as const, required: true },
  { label: "Phone", name: "partner_phone", type: "tel" as const },
  {
    label: "Partnership type",
    name: "partnership_type",
    type: "select" as const,
    options: ["Supplier", "Installer", "Technician", "Consultant", "Other"],
  },
  { label: "Company", name: "company" },
  {
    label: "How would you like to work with us?",
    name: "partner_message",
    type: "textarea" as const,
    wide: true,
  },
];

export default function ContactPage() {
  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="main-content">
        <AnimatedSection className="section-pad quote-layout">
          <div>
            <p className="eyebrow">Get a Quote</p>
            <h1 className="section-title">
              Request a quote for your water project
            </h1>
            <p className="body-copy">We will review your request and respond shortly.</p>

            <ContactForm
              buttonLabel="Get a Quote"
              fields={quoteFields}
              formName="Project Quote Request"
            />
          </div>
          <div className="media-frame">
            <Image
              alt="Water treatment service site"
              fill
              sizes="(max-width: 980px) 100vw, 42vw"
              src={assets.images.vertical}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="contact-panel">
          <p className="eyebrow">Contact Us</p>
          <h2>For inquiries or project questions</h2>
          <div className="contact-grid">
            <div>
              <h3>Address</h3>
              <p>{contact.address}</p>
            </div>
            <div>
              <h3>Office Hours</h3>
              <p>{contact.hours}</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>{contact.email}</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>{contact.phone}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section-pad" id="partners">
          <p className="eyebrow">Work With Us</p>
          <h2 className="section-title">Partner with Norwa Waters</h2>
          <p className="body-copy">
            Suppliers, installers, technicians, and specialists can share their
            details for future collaboration.
          </p>
          <ContactForm
            buttonLabel="Send Request"
            fields={partnerFields}
            formName="Partner Request"
            gridClassName="form-grid form-grid--wide"
          />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
