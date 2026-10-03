import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import FinalCta from "@/components/sections/FinalCta";
import Link from "next/link";
export default function CapabilityPage({ title, description, sections }: { title: string; description: string; sections: {title: string; description: string; items: string[]}[] }) {
  return <><PageHero eyebrow="AJH Digital Services" title={title} description={description} breadcrumbs={[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:title}]}/>
    <section className="py-16 sm:py-20"><Container><div className="grid gap-8 lg:grid-cols-2">{sections.map(section => <article key={section.title} className="rounded-2xl border border-border bg-surface p-7 sm:p-10"><h2 className="font-display text-3xl text-ink">{section.title}</h2><p className="mt-4 leading-relaxed text-muted">{section.description}</p><ul className="mt-6 list-disc space-y-3 pl-5 text-text">{section.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div><p className="mt-10 max-w-3xl leading-relaxed text-muted">Every engagement starts with a conversation about your goals, timeline, and the help you need. We agree on scope, deliverables, and pricing before work begins. <Link href="/contact" className="font-semibold text-primary underline underline-offset-4">Request a consultation</Link>.</p></Container></section>
    <FinalCta title="Let’s talk about your next step." description="Share your idea, where things stand, and what you want to accomplish." primaryLabel="Request a Consultation" primaryHref="/contact"/></>;
}
