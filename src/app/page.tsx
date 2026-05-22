import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Factory,
  Globe2,
  HomeIcon,
  Landmark,
  Users,
  Recycle,
  ShieldCheck,
} from "lucide-react";
import { AnimatedItem, AnimatedSection, MotionDiv } from "@/components/animated";
import { ButtonLink } from "@/components/button";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { assets, partners, projects, services, stats } from "@/lib/site-data";

const serviceIcons = [Droplets, Factory, Recycle, ShieldCheck];
const heroStats = [
  { icon: Users, value: "100%", label: "Satisfied Clients" },
  { icon: Globe2, value: "45+", label: "Project Partners" },
  { icon: HomeIcon, value: "25,000", label: "Households Served" },
  { icon: Landmark, value: "120+", label: "Completed Projects" },
];

export default function Home() {
  const spotlight = projects[0];

  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="main-content">
        <section className="hero">
          <div className="hero__media">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={assets.images.landscape}
              src={assets.heroVideo}
            />
          </div>
          <div className="hero__inner">
            <MotionDiv
              className="hero__content"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1>Clean Water, Engineered With Precision</h1>
              <p>
                Norwa Waters designs and delivers practical treatment systems for
                industries, institutions, communities, and commercial sites.
              </p>
              <ButtonLink href="/projects" variant="light">
                View Projects
              </ButtonLink>
            </MotionDiv>

            <MotionDiv
              className="hero-proof"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2>Why Choose Us</h2>
              <span className="hero-proof__line" />
              <div className="hero-proof__grid">
                {heroStats.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="hero-proof__item" key={item.label}>
                      <span className="hero-proof__icon">
                        <Icon size={30} strokeWidth={2} />
                      </span>
                      <div>
                        <strong>{item.value}</strong>
                        <p>{item.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </MotionDiv>
          </div>
        </section>

        <AnimatedSection className="section-pad split">
          <div>
            <p className="eyebrow">About Norwa Waters</p>
            <h2 className="section-title">
              Reliable treatment systems for demanding water needs
            </h2>
            <p className="body-copy">
              We plan, install, and maintain water treatment projects that keep
              water quality consistent, operations efficient, and systems easy to
              manage after handover.
            </p>
            <div className="stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="media-frame">
            <Image
              alt="Water treatment infrastructure"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              src={assets.images.square}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="section-pad--tight">
          <div className="split" style={{ alignItems: "end" }}>
            <div>
              <p className="eyebrow">Featured Projects</p>
              <h2 className="section-title">We Build Projects That Last</h2>
            </div>
            <div style={{ justifySelf: "end" }}>
              <ButtonLink href="/projects" variant="dark">
                All Projects
              </ButtonLink>
            </div>
          </div>
          <div className="project-strip">
            {projects.slice(0, 3).map((project, index) => (
              <AnimatedItem delay={index * 0.08} key={project.slug}>
                <Link className="project-card" href={`/projects/${project.slug}`}>
                  <div className="media-frame">
                    <Image
                      alt={project.title}
                      fill
                      sizes="(max-width: 980px) 50vw, 33vw"
                      src={project.image}
                    />
                  </div>
                  <h3>{project.title}</h3>
                </Link>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="services-preview">
          <div className="service-mini">
            <p className="eyebrow">Our Services</p>
            <h2 className="section-title">Treatment from source to supply</h2>
            <p className="body-copy">
              Focused solutions for clean water, process water, wastewater, and
              long-term plant performance.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <ButtonLink href="/services" variant="dark">
                Explore Services
              </ButtonLink>
            </div>
          </div>
          {services.slice(0, 4).map((service, index) => {
            const Icon = serviceIcons[index] ?? Droplets;
            return (
              <div className="service-mini" key={service.title}>
                <span className="icon-pill">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </AnimatedSection>

        <AnimatedSection className="section-pad spotlight">
          <div>
            <p className="eyebrow">Project Spotlight</p>
            <h2 className="section-title">{spotlight.title}</h2>
            <p className="body-copy">{spotlight.summary}</p>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{spotlight.location}</dd>
              </div>
              <div>
                <dt>Capacity</dt>
                <dd>{spotlight.capacity}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{spotlight.status}</dd>
              </div>
            </dl>
          </div>
          <Link className="media-frame" href={`/projects/${spotlight.slug}`}>
            <Image
              alt={spotlight.title}
              fill
              sizes="(max-width: 980px) 100vw, 65vw"
              src={spotlight.image}
            />
          </Link>
        </AnimatedSection>

        <AnimatedSection className="partners-section">
          <p className="partners-title">Our Partners</p>
          <div className="partner-logo-grid">
            {partners.map((partner, index) => (
              <AnimatedItem
                className="partner-logo-card"
                delay={index * 0.02}
                key={partner.name}
              >
                <Image
                  alt={`${partner.name} logo`}
                  height={90}
                  src={partner.logo}
                  width={220}
                />
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="section-pad--tight split">
          <div>
            <p className="eyebrow">Ready to Start</p>
            <h2 className="section-title">Plan your next water project</h2>
          </div>
          <Link
            href="/contact"
            style={{
              alignItems: "center",
              color: "var(--ocean-blue)",
              display: "inline-flex",
              fontWeight: 850,
              gap: "0.75rem",
              justifySelf: "end",
              textTransform: "uppercase",
            }}
          >
            Request a quote <ArrowRight size={20} />
          </Link>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
