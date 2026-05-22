import Image from "next/image";
import { AnimatedSection } from "@/components/animated";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { assets, contact } from "@/lib/site-data";

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

            <form className="form-grid">
              <div className="field">
                <label htmlFor="first-name">First name *</label>
                <input id="first-name" name="first-name" type="text" />
              </div>
              <div className="field">
                <label htmlFor="last-name">Last name *</label>
                <input id="last-name" name="last-name" type="text" />
              </div>
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" />
              </div>
              <div className="field">
                <label htmlFor="timeline">When are you looking to start?</label>
                <select id="timeline" name="timeline">
                  <option>Immediately</option>
                  <option>Within 1 month</option>
                  <option>Within 3 months</option>
                  <option>Planning stage</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="service">What service do you need?</label>
                <input
                  id="service"
                  name="service"
                  placeholder="RO, wastewater, filtration..."
                  type="text"
                />
              </div>
            </form>
            <button className="form-submit" type="button">
              Get a Quote
            </button>
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
          <form className="form-grid form-grid--wide">
            <div className="field">
              <label htmlFor="partner-first">First name *</label>
              <input id="partner-first" name="partner-first" type="text" />
            </div>
            <div className="field">
              <label htmlFor="partner-last">Last name *</label>
              <input id="partner-last" name="partner-last" type="text" />
            </div>
            <div className="field">
              <label htmlFor="partner-email">Email</label>
              <input id="partner-email" name="partner-email" type="email" />
            </div>
            <div className="field">
              <label htmlFor="partner-subject">Subject</label>
              <input id="partner-subject" name="partner-subject" type="text" />
            </div>
          </form>
          <button className="form-submit" type="button">
            Send Request
          </button>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
