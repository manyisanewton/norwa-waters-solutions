import Image from "next/image";
import Link from "next/link";
import {
  Droplet,
  Filter,
  Gauge,
  Headset,
  Pickaxe,
  Sprout,
  Settings,
  ShieldCheck,
  SunMedium,
  Waves,
} from "lucide-react";
import { AnimatedItem, AnimatedSection } from "@/components/animated";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { assets, services } from "@/lib/site-data";

const icons = [
  Gauge,
  Filter,
  Waves,
  Droplet,
  Settings,
  Pickaxe,
  Sprout,
  ShieldCheck,
  SunMedium,
  Headset,
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
                  <Link className="service-card-link" href={`/services/${service.slug}`}>
                    <span className="icon-pill">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <span className="service-card-link__cta">View service</span>
                  </Link>
                </AnimatedItem>
              );
            })}
          </div>
          <div className="service-image">
            <div className="media-frame service-image__frame">
              <Image
                alt="Water system installation"
                fill
                sizes="(max-width: 980px) 100vw, 38vw"
                src={assets.images.vertical}
              />
            </div>
            <div className="media-frame service-image__frame service-image__frame--secondary">
              <Image
                alt="Water treatment system equipment"
                fill
                sizes="(max-width: 980px) 100vw, 38vw"
                src={assets.images.wide}
              />
            </div>
            <div className="media-frame service-image__frame service-image__frame--tertiary">
              <Image
                alt="Clean water project installation"
                fill
                sizes="(max-width: 980px) 100vw, 38vw"
                src={assets.images.landscape}
              />
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
