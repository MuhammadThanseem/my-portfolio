import type { Metadata } from "next";
import { Contact } from "../components/Contact";
import { profile } from "../lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} for freelance or full-time opportunities.`,
};

export default function ContactPage() {
  return <Contact />;
}
