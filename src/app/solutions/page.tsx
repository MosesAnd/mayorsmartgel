import type { Metadata } from "next";
import SolutionsClient from "@/components/solutions/SolutionsClient";

export const metadata: Metadata = {
  title: "GridCore™ Reference Architecture | MayorSmart Global Enterprise",
  description:
    "The mission-critical sovereign software foundation engineered for zero technical debt, sub-millisecond distributed state consensus, and post-quantum encryption.",
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
