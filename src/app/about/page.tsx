import Image from "next/image";
import { AnimatedSection } from "@/components/animated";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { assets, testimonials } from "@/lib/site-data";

const values = [
  {
    title: "Engineering",
    text: "We design around water quality, site constraints, maintenance access, and long-term reliability.",
  },
  {
    title: "Experience",
    text: "Our projects cover borehole treatment, RO systems, wastewater reuse, and industrial process water.",
  },
  {
    title: "Accountability",
    text: "We stay close to performance after installation through testing, servicing, and operator support.",
  },
];

export default function AboutPage() {
  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="main-content">
        <AnimatedSection className="about-intro">
          <div>
            <p className="eyebrow">About Us</p>
            <h1 className="section-title">We build water solutions that last</h1>
          </div>
          <div>
            <p className="body-copy">
              Norwa Waters helps businesses, institutions, and communities turn
              water challenges into dependable treatment systems. Our work is
              practical, technical, and built for daily use.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section-pad split">
          <div className="media-frame">
            <Image
              alt="Water treatment field work"
              fill
              sizes="(max-width: 980px) 100vw, 56vw"
              src={assets.images.landscape}
            />
          </div>
          <div className="value-list">
            {values.map((value) => (
              <div key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="dark-panel">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title">Client success stories</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.name}>
                <p>{testimonial.quote}</p>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="section-pad split">
          <div>
            <p className="eyebrow">Our Mission</p>
            <h2 className="section-title">Building a sustainable water future</h2>
            <p className="body-copy">
              We believe clean water infrastructure should be dependable,
              efficient, and responsible. Every project is planned to improve
              access, reduce waste, and support the people who operate it.
            </p>
            <p className="body-copy">
              From design to maintenance, our focus is simple: better water,
              better systems, better outcomes.
            </p>
          </div>
          <div className="media-frame">
            <Image
              alt="Sustainable water project"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              src={assets.images.water}
            />
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
