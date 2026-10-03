export const projectTypes = [
 "Website / Web Development", "Website Management", "Software / Technology", "Writing", "Book / Publishing", "Editing", "Consulting", "Content / Copywriting", "Branding / Creative", "Digital Product", "Other",
] as const;
export const serviceInterest: Record<(typeof projectTypes)[number],string> = {
 "Website / Web Development":"website", "Website Management":"website_maintenance", "Software / Technology":"software", "Writing":"writing", "Book / Publishing":"publishing", "Editing":"editing", "Consulting":"consulting", "Content / Copywriting":"copywriting", "Branding / Creative":"branding", "Digital Product":"digital_product", "Other":"other",
};

export type ProjectType = (typeof projectTypes)[number];

export type ContactFormData = {
  name: string;
  email: string;
  organization: string;
  website: string;
  projectType: ProjectType | "";
  message: string;
  // Honeypot field — should always be empty when submitted by a human.
  company: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!projectTypes.includes(data.projectType as ProjectType)) {
    errors.projectType = "Please select what you need help with.";
  }

  if (!data.message.trim()) {
    errors.message = "Please add a short message so I know what you need.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Please add a little more detail so I can help.";
  }

  if(data.name.length>200) errors.name="Please shorten your name.";
  if(data.message.length>15000) errors.message="Please keep your message under 15,000 characters.";
  return errors;
}
