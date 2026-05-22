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
import { PageHero } from "@/components/page-hero";
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
        <PageHero
          eyebrow="Our Services"
          title="Water treatment services for every project stage"
        />

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
