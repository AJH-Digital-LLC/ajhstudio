import { withBrandMetadata } from "@/lib/social";
import type { Metadata } from "next";
import EntryOffers from "@/components/sections/EntryOffers";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import FeaturedWork from "@/components/sections/FeaturedWork";
import BlogPreview from "@/components/sections/BlogPreview";
import FinalCta from "@/components/sections/FinalCta";
import Process from "@/components/sections/Process";
import WebsiteOffer from "@/components/sections/WebsiteOffer";

export const metadata: Metadata = withBrandMetadata({
  title: "Build What Matters | AJH Digital",
  description:
    "Websites, technology, writing, publishing, and consulting for individuals, businesses, churches, ministries, and organizations. Practical help to build what matters.",
  alternates: { canonical: "/" },
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <EntryOffers />
      <WebsiteOffer />
      <FeaturedWork />
      <Process />
      <BlogPreview />
      <FinalCta
        title="Have a project in mind?"
        description="Whether it's a new website, help finding the right words, or a practical digital project—tell me about it."
        primaryLabel="Discuss Your Project"
        primaryHref="/contact"
      />
    </>
  );
}
