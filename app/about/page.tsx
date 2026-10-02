import Image from "next/image";
import { withBrandMetadata } from "@/lib/social";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCta from "@/components/sections/FinalCta";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = withBrandMetadata({
  title: "About",
  description:
    "Meet Aaron Joseph Hall and AJH Digital, a brand/DBA of AJH Enterprises, LLC, focused on websites, content, and practical technology.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | AJH Digital",
    description:
      "Meet Aaron Joseph Hall and AJH Digital, a brand/DBA of AJH Enterprises, LLC, focused on websites, content, and practical technology.",
    url: "/about",
  },
});

const values = [
  {
    title: "Clarity over cleverness",
    description: "The goal is always to be understood — in a website, in writing, and in how a project is run.",
  },
  {
    title: "Real relationships",
    description: "Projects work better when there's an actual relationship behind them, not just a transaction.",
  },
  {
    title: "Built to last",
    description: "A website, a piece of writing, or a practical solution should hold up over time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Aaron Joseph Hall."
        description="I'm the founder of AJH Digital. I work across communication, websites, and practical technology—and I built this company to bring that work under one roof."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-ink text-background">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-ink to-primary/20">
                <Image src="/images/about/aaron-cutout.webp" alt="Aaron Joseph Hall, founder of AJH Digital" fill sizes="(min-width: 1024px) 384px, 90vw" className="object-contain object-bottom" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="font-display text-2xl text-background">Aaron Joseph Hall</p>
                <p className="mt-2 text-sm leading-relaxed text-background/65">Founder, writer, pastor, speaker, and builder of useful things.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Hi, I&apos;m Aaron.</h2>
            <p className="text-lg leading-relaxed text-text">
              I started {siteConfig.name} to bring together the work I actually do: building
              websites and technology and writing and communicating ideas clearly. AJH Digital brings that client work and the products I build together as a brand/DBA of AJH Enterprises, LLC.
            </p>
            <p className="text-lg leading-relaxed text-text">
              I&apos;m a pastor, church planter, writer, speaker, consultant, REALTOR®, husband,
              and dad. Those roles have taught me how to listen carefully, explain complicated
              things clearly, and build practical solutions around real people—not abstract
              ideas. That same approach guides every client project I take on.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-alt py-16 sm:py-20 lg:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our Parent Company"
              title="Part of AJH Enterprises, LLC."
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-6 text-lg leading-relaxed text-text">
            <p>
              <strong className="text-ink">Aaron Joseph Hall</strong> is me — the person behind
              the work, writing the blog, and doing the actual communication and technology
              work described on this site.
            </p>
            <p>
              <a href="https://ajhenterprises.com" className="font-semibold text-primary underline underline-offset-4">AJH Enterprises, LLC</a> is the parent company of AJH Digital.
              AJH Digital operates as its brand/DBA for website development, website management,
              content, and digital services.
            </p>
            <p>
              <strong className="text-ink">Products</strong> like{" "}
              <a href="/products" className="text-primary underline underline-offset-4">
                The Ministry Study
              </a>{" "}
              are individual tools built through AJH Digital — each with its own name and its
              own purpose.
            </p>
            <a href="https://ajhenterprises.com" className="font-semibold text-primary underline underline-offset-4">Visit AJH Enterprises, LLC →</a>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="How I Work"
            title="A few things that guide every project."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-7">
                  <h3 className="font-display text-xl text-ink">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title="Let's talk about your project."
        description="If this sounds like the right fit, the next step is a conversation."
      />
    </>
  );
}
