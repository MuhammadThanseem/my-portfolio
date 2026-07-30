import type { Metadata } from "next";
import { ProcessTimeline } from "../components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Process",
  description: "How Muhammad Thanseem C approaches a project, from discovery through shipping and monitoring.",
};

export default function ProcessPage() {
  return <ProcessTimeline />;
}
