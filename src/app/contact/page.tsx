import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact & Communications Gateway | MayorSmart Global Enterprise",
  description:
    "Direct executive communications gateway to Principal Enterprise Architects, Sovereign Defense Fellows, and Incident Response SREs.",
};

export default function ContactPage() {
  return <ContactClient />;
}
