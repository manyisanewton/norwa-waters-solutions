import Image from "next/image";
import Link from "next/link";
import { AnimatedItem, AnimatedSection } from "@/components/animated";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="main-content">
        <PageHero
          eyebrow="Our Projects"
          title="Treatment projects built to last"
          description="A visual look at water systems delivered for industrial, commercial, institutional, and community needs."
        />

        <AnimatedSection className="section-pad--tight projects-grid">
          {projects.map((project, index) => (
            <AnimatedItem delay={index * 0.04} key={project.slug}>
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
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
