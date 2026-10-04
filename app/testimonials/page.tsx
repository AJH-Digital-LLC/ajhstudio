import { withBrandMetadata } from "@/lib/social";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/cards/TestimonialCard";
import FinalCta from "@/components/sections/FinalCta";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { testimonials, getFeaturedTestimonial } from "@/lib/data/testimonials";

export const metadata: Metadata = withBrandMetadata({
  title: "Testimonials",
  description: "What clients have to say about working with AJH Digital.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Testimonials | AJH Digital",
    description: "What clients have to say about working with AJH Digital.",
    url: "/testimonials",
  },
});

export default function TestimonialsPage() {
  const featured = getFeaturedTestimonial();
  const rest = testimonials.filter((t) => !t.isPlaceholder && t.id !== featured?.id);

  return (
    <>
      <PageHero
        eyebrow="Client Experience"
        title="Client testimonials."
        description="Good work starts with listening, clear communication, and personal attention. This is where we share client experiences with AJH Digital."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />

      {featured ? (
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Featured
          </h2>
          <Reveal>
            <TestimonialCard testimonial={featured} large />
          </Reveal>
        </Container>
      </section>

      ) : (
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface-alt p-8 sm:p-12">
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Client stories are on the way.</h2>
              <p className="mt-4 leading-relaxed text-muted">We’ll share testimonials here as clients give permission to publish their feedback. In the meantime, explore our work or tell us about your experience.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/websites">Explore Our Work</Button>
                <Button href={`mailto:${siteConfig.email}?subject=My%20AJH%20Digital%20experience`}>Share Your Experience</Button>
              </div>
              <p className="mt-4 text-sm text-muted">We’ll confirm your permission and how you’d like to be credited before publishing your feedback.</p>
            </div>
          </Container>
        </section>
      )}

      {rest.length > 0 && (
        <section className="border-t border-border bg-surface-alt py-16 sm:py-20 lg:py-24">
          <Container>
            <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              More From Clients
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((testimonial, i) => (
                <Reveal key={testimonial.id} delay={i * 90}>
                  <TestimonialCard testimonial={testimonial} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCta
        eyebrow="Get Started"
        title="Have a project of your own?"
        description="I'd love to hear what you're working on."
        primaryLabel="Let's Talk"
      />
    </>
  );
}
