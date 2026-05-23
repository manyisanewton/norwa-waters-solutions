import Image from "next/image";
import {
  Droplet,
  Filter,
  Gauge,
  Handshake,
  Recycle,
  Settings,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { AnimatedItem, AnimatedSection } from "@/components/animated";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { assets, services } from "@/lib/site-data";

const icons = [
  Droplet,
  Filter,
  Recycle,
  Gauge,
  Waves,
  Settings,
  ShieldCheck,
  Handshake,
];

export default function ServicesPage() {
  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="main-content">
        <AnimatedSection className="service-hero">
          <div className="service-hero__content">
            <p className="eyebrow">Our Services</p>
            <h1>Water treatment services for every project stage</h1>
            <p>
              Practical systems for clean water, process water, wastewater, and
              long-term plant performance.
            </p>
          </div>
          <div className="service-hero__right">
            <Image
              alt="Pouring clean water into a glass"
              height={620}
              priority
              src="/assets/service hero background image/service hero.png"
              width={900}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="services-page-grid">
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = icons[index] ?? Droplet;
              return (
                <AnimatedItem className="service-cell" delay={index * 0.04} key={service.title}>
                  <span className="icon-pill">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </AnimatedItem>
              );
            })}
          </div>
          <div className="service-image">
            <div className="media-frame">
              <Image
                alt="Water system installation"
                fill
                sizes="(max-width: 980px) 100vw, 38vw"
                src={assets.images.vertical}
              />
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
