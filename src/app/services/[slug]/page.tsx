import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated";
import { ButtonLink } from "@/components/button";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { assets, services } from "@/lib/site-data";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service ? `${service.title} | Norwa Waters` : "Service | Norwa Waters",
    description: service?.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const serviceIndex = services.findIndex((item) => item.slug === slug);
  const service = services[serviceIndex];

  if (!service) {
    notFound();
  }

  const nextService = services[(serviceIndex + 1) % services.length];

  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="main-content">
        <AnimatedSection className="service-detail-hero">
          <div>
            <Link className="back-link" href="/services">
              <ArrowLeft size={18} /> Services
            </Link>
            <p className="eyebrow">Service</p>
            <h1>{service.title}</h1>
            <p>{service.details}</p>
            <ButtonLink href="/contact" variant="water">
              Request This Service
            </ButtonLink>
          </div>
          <div className="media-frame">
            <Image
              alt={service.title}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 44vw"
              src={assets.images.water}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="service-detail-body">
          <div>
            <p className="eyebrow">What We Cover</p>
            <h2 className="section-title">Built around your water quality goals</h2>
          </div>
          <div className="service-highlight-grid">
            {service.highlights.map((highlight) => (
              <div className="service-highlight" key={highlight}>
                <CheckCircle2 size={22} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="next-service-band">
          <div>
            <p className="eyebrow">Next Service</p>
            <h2>{nextService.title}</h2>
          </div>
          <Link href={`/services/${nextService.slug}`}>
            View service <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
