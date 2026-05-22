import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { projects } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project
      ? `${project.title} | Norwa Waters`
      : "Project | Norwa Waters",
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="main-content">
        <AnimatedSection className="project-detail">
          <div className="project-viewer">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
              }}
            >
              <Link
                href="/projects"
                style={{
                  alignItems: "center",
                  color: "var(--deep-navy)",
                  display: "inline-flex",
                  fontWeight: 800,
                  gap: "0.6rem",
                  textTransform: "uppercase",
                }}
              >
                <ArrowLeft size={18} /> Projects
              </Link>
              <Link
                href={`/projects/${next.slug}`}
                style={{
                  alignItems: "center",
                  color: "var(--ocean-blue)",
                  display: "inline-flex",
                  fontWeight: 800,
                  gap: "0.6rem",
                  textTransform: "uppercase",
                }}
              >
                Next <ArrowRight size={18} />
              </Link>
            </div>
            <div className="media-frame">
              <Image
                alt={project.title}
                fill
                priority
                sizes="(max-width: 980px) 100vw, 80vw"
                src={project.image}
              />
            </div>
            <div className="project-copy">
              <p className="eyebrow">{project.category}</p>
              <h1>{project.title}</h1>
              <p className="body-copy" style={{ marginInline: "auto" }}>
                {project.summary}
              </p>
              <div className="project-facts">
                <div className="project-fact">
                  <span>Location</span>
                  <strong>{project.location}</strong>
                </div>
                <div className="project-fact">
                  <span>Scope</span>
                  <strong>{project.scope}</strong>
                </div>
                <div className="project-fact">
                  <span>Capacity</span>
                  <strong>{project.capacity}</strong>
                </div>
                <div className="project-fact">
                  <span>Status</span>
                  <strong>{project.status}</strong>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "3rem",
              }}
            >
              <Link href={`/projects/${previous.slug}`}>{previous.title}</Link>
              <Link href={`/projects/${next.slug}`}>{next.title}</Link>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
