import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { capabilities } from "@/lib/data/capabilities";

export default function WhatIDo() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How We Can Help"
          title="Practical help for what comes next."
          description="Start with your goal. We bring technology, creativity, communication, and strategy together to help you reach it."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {capabilities.map((service) => {
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl text-ink">{service.name}</h3>
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
