import type { Metadata } from "next";
import { LiveShowcase } from "../components/LiveShowcase";
import { Projects } from "../components/Projects";
import { profile } from "../lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: `Client and product work by ${profile.name} — live sites, SaaS products and freelance projects.`,
};

export default function WorkPage() {
  return (
    <>
      <LiveShowcase />
      <Projects />
    </>
  );
}
