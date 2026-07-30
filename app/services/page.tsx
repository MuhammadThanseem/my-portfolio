import type { Metadata } from "next";
import { Services } from "../components/Services";

export const metadata: Metadata = {
  title: "Services",
  description: "Web, backend, AI/RAG, IoT and DevOps services offered by Muhammad Thanseem C.",
};

export default function ServicesPage() {
  return <Services />;
}
