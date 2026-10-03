export const siteConfig = {
  name: "AJH Digital",
  legalName: "AJH Digital, LLC",
  founder: "Aaron Joseph Hall",
  tagline: "Build What Matters.",
  description:
    "AJH Digital is a digital, creative, and professional services company helping individuals, businesses, churches, ministries, and organizations turn ideas into something real.",
  coreMessage:
    "Clear strategy, thoughtful design, and practical support for the work that matters to you.",
  url: "https://ajhdigital.com",
  productionUrl: "https://ajhdigital.com",
  domain: "AJHDigital.com",
  logo: { primary: "/brand/logo.webp", light: "/brand/logo-light.webp", email: "/brand/logo.png", icon: "/brand/monogram.webp" },
  email: "AJHDigitalLLC@gmail.com",
  // The CRM's branded custom domain. Keep this as the single source of truth
  // for the Internal Login link in the footer.
  crmUrl: "https://crm.ajhdigital.com",
  projectRequestUrl: "/contact",
  social: {
    instagram: "https://instagram.com/ajhenterprises",
    linkedin: "https://linkedin.com/company/ajhenterprises",
  },
  nav: [
    { label: "Church & Ministry Websites", href: "/church-websites" },
    { label: "Small Business Websites", href: "/small-business-websites" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Websites", href: "/websites" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
