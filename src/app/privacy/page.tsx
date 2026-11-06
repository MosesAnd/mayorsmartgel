import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | MayorSmart Global Enterprise",
  description: "Sovereign data governance, jurisdictional boundary compliance, and enterprise cryptographic isolation policy.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-surface-canvas py-16 px-6 lg:px-12 border-b border-border-subtle">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 bg-surface-container-lowest p-8 sm:p-12 rounded-2xl border border-border-subtle shadow-sm">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary font-bold">Privacy Policy</span>
        </nav>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
            GOVERNANCE &amp; SOVEREIGN COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-deep">
            Sovereign Data Governance &amp; Privacy Policy
          </h1>
          <div className="text-xs font-mono text-outline mt-2">
            EFFECTIVE DATE: NOVEMBER 2026 • REVISION v4.19
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-on-surface-variant leading-relaxed space-y-6">
          <section>
            <h2 className="text-base font-bold text-navy-deep uppercase tracking-wider mb-2">
              1. Sovereign Data Commitment
            </h2>
            <p>
              MayorSmart Global Enterprises operates on the foundational principle of complete jurisdictional data sovereignty. We reject centralized telemetry scraping and multi-tenant key mingling. All customer data, source code artifacts, and cryptographic keys remain strictly confined to the designated regional sovereign enclave (London, Frankfurt, Singapore, Zurich, or Dubai) agreed upon during contract execution.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy-deep uppercase tracking-wider mb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect only the minimum institutional contact details and operational telemetry necessary to execute our enterprise advisory and engineering obligations:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Executive institutional work email addresses, corporate titles, and telephone numbers.</li>
              <li>Network telemetry data (latency, packet transit timestamps) generated via the GridCore™ platform.</li>
              <li>Technical specifications and architecture requirements submitted under mutual NDA.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy-deep uppercase tracking-wider mb-2">
              3. Regulatory Framework Adherence
            </h2>
            <p>
              Our infrastructure and handling procedures are engineered to continuously satisfy:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>EU GDPR (Regulation 2016/679):</strong> Strict data minimization, zero cross-border transfer without explicit adequacy decisions, and immutable right-to-erasure workflows.</li>
              <li><strong>EU DORA (Digital Operational Resilience Act):</strong> Continuous operational resilience testing, audit trail preservation, and incident reporting.</li>
              <li><strong>Singapore MAS Notice 655:</strong> Cyber hygiene protocols, data encryption in transit and at rest, and multi-factor authentication.</li>
              <li><strong>Swiss FADP:</strong> Banking-grade secret protection within our Zurich vault infrastructure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy-deep uppercase tracking-wider mb-2">
              4. Cryptographic State &amp; Key Governance
            </h2>
            <p>
              All customer communications and client code repositories are protected with post-quantum lattice cryptography (NIST FIPS 203/204 compliant). Customer encryption keys are stored within air-gapped Hardware Security Modules (HSMs) and are never accessible by MayorSmart engineering personnel without explicit, multi-party time-locked customer authorization.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy-deep uppercase tracking-wider mb-2">
              5. Contact our Data Protection Officer
            </h2>
            <p>
              For statutory inquiries, regulatory audits, or data rights assertions, contact the Office of the Data Protection Officer directly:
            </p>
            <div className="p-4 rounded-xl bg-surface-canvas border border-border-subtle font-mono text-xs text-navy-deep">
              Office of the Data Protection Officer<br />
              MayorSmart Global Enterprises<br />
              Canary Wharf, London E14 5JP<br />
              Email: dpo@mayorsmart.com
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
