import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | MayorSmart Global Enterprise",
  description: "Enterprise service level agreements, IP ownership transfer, and master consulting terms.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-surface-canvas py-16 px-6 lg:px-12 border-b border-border-subtle">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 bg-surface-container-lowest p-8 sm:p-12 rounded-2xl border border-border-subtle shadow-sm">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary font-bold">Terms of Service</span>
        </nav>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
            ENTERPRISE CONTRACTUAL GOVERNANCE
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-deep">
            Enterprise Terms of Service &amp; SLA Framework
          </h1>
          <div className="text-xs font-mono text-outline mt-2">
            EFFECTIVE DATE: NOVEMBER 2026 • MASTER VERSION 5.2
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-on-surface-variant leading-relaxed space-y-6">
          <section>
            <h2 className="text-base font-bold text-navy-deep uppercase tracking-wider mb-2">
              1. Scope of Engagement
            </h2>
            <p>
              These Terms of Service govern all professional engineering engagements, architecture discovery sessions, technical audits, and managed GridCore™ cloud infrastructure provisions delivered by MayorSmart Global Enterprises (&quot;MayorSmart&quot;) to enterprise customers.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy-deep uppercase tracking-wider mb-2">
              2. Complete Intellectual Property Ownership Transfer
            </h2>
            <p>
              Unless otherwise explicitly stipulated in an executed Statement of Work (SOW):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Client Custom Deliverables:</strong> All custom source code, documentation, microservice manifests, and architectural runbooks authored specifically for the client become the exclusive intellectual property of the client upon final milestone settlement.</li>
              <li><strong>Zero Vendor Lock-In:</strong> MayorSmart claims no perpetual proprietary licensing rights or ongoing royalty encumbrances over client custom software systems.</li>
              <li><strong>Pre-Existing Primitives:</strong> Pre-existing MayorSmart proprietary frameworks (such as the core GridCore™ kernel engine) remain licensed under non-exclusive, perpetual enterprise agreements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy-deep uppercase tracking-wider mb-2">
              3. Service Level Agreement (SLA) &amp; Uptime Guarantee
            </h2>
            <p>
              MayorSmart guarantees a 99.999% (&quot;five nines&quot;) operational availability across all multi-region sovereign enclave deployments. For Priority 1 critical incidents, our site reliability engineers enforce a maximum initial containment response time of 8 minutes. Failure to meet documented uptime metrics triggers contractual SLA credit compensations as defined in the Master Services Agreement.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy-deep uppercase tracking-wider mb-2">
              4. Mutual Confidentiality &amp; NDA
            </h2>
            <p>
              All proprietary business disclosures, architectural topologies, threat models, and software source code exchanged during technical discovery and operational phases are protected under automated, binding bilateral Non-Disclosure Agreements enforced pursuant to the laws of England and Wales, the Canton of Zurich, or the Republic of Singapore, as elected in the applicable regional jurisdiction schedule.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy-deep uppercase tracking-wider mb-2">
              5. Governing Law &amp; Arbitration
            </h2>
            <p>
              Any disputes arising under these terms shall be resolved through final and binding institutional arbitration under the Rules of the London Court of International Arbitration (LCIA) or the Singapore International Arbitration Centre (SIAC).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
