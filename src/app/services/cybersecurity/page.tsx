import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cybersecurity & IT Consulting | MayorSmart Global Enterprise",
  description:
    "Defense-grade cybersecurity consulting, post-quantum cryptography, zero-trust network architectures, and sovereign compliance automation.",
};

export default function CybersecurityServicePage() {
  const capabilities = [
    {
      title: "Zero-Trust Architecture & Microsegmentation",
      desc: "Implement continuous cryptographic verification across all endpoints, services, and human identities. We dismantle implicit perimeter trust using SPIFFE/SPIRE microsegmentation, mutual TLS, and dynamic context-aware policy enforcement.",
      deliverables: ["Microsegmented network topology", "mTLS identity mesh", "Least-privilege policy framework"],
      icon: "shield",
    },
    {
      title: "Post-Quantum Cryptography (PQC) Migration",
      desc: "Transition mission-critical data stores and transit pipelines to NIST-standardized quantum-resistant algorithms (ML-KEM / Kyber and ML-DSA / Dilithium). Safeguard against 'Harvest Now, Decrypt Later' threat vectors.",
      deliverables: ["PQC cryptographic readiness audit", "Hardware HSM migration", "Quantum-safe TLS 1.3+ tunnels"],
      icon: "vpn_key",
    },
    {
      title: "Continuous Red-Team Adversary Emulation",
      desc: "Full-scope adversarial drills mimicking nation-state and advanced persistent threat (APT) actor playbooks. Includes social engineering, physical enclave testing, cloud configuration exploitation, and zero-day payload testing.",
      deliverables: ["Executive threat dossier", "Remediation blueprint with proof-of-concept", "Re-test verification certification"],
      icon: "warning",
    },
    {
      title: "Automated Sovereign Regulatory Compliance",
      desc: "Transform manual audit preparation into automated continuous evidence gathering. Mapped natively to EU DORA, Singapore MAS Notice 655, SOC 2 Type II, ISO/IEC 27001:2022, and FedRAMP High standards.",
      deliverables: ["Continuous compliance telemetry", "Automated statutory reporting engine", "Immutable audit log ledgers"],
      icon: "policy",
    },
    {
      title: "24/7/365 Sovereign SOC & Incident Response",
      desc: "Dedicated rapid-response infrastructure architects on call 24/7. Guaranteed sub-8-minute response window to critical security thresholds with autonomous enclave containment protocols.",
      deliverables: ["Dedicated emergency hotline", "Containment SLA guarantee (<8 min)", "Forensic telemetry analysis"],
      icon: "support_agent",
    },
    {
      title: "Cloud Security Posture & DevSecOps",
      desc: "Embed automated static (SAST), dynamic (DAST), and software composition analysis (SCA) directly into your CI/CD pipelines. Ensure every container, Terraform manifest, and Helm chart adheres to defense-grade policies.",
      deliverables: ["Automated pipeline security gates", "Infrastructure as Code (IaC) linting", "Zero-trust container hardening"],
      icon: "lock_reset",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section className="w-full bg-navy-deep text-white py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto flex flex-col gap-6 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-secondary-container font-bold">Cybersecurity &amp; IT Consulting</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-secondary-fixed text-xs font-mono uppercase tracking-wider self-start">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>PRACTICE 01 // DEFENSIVE SYSTEMS DIRECTORATE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Cybersecurity &amp; Sovereign Trust Consulting
            </h1>

            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              We design, test, and govern defense-grade security superstructures. From post-quantum lattice cryptography to continuous adversary emulation, we ensure sovereign networks remain uncompromised.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact#briefing"
                className="px-6 py-3 rounded-lg bg-secondary-container text-navy-deep font-bold text-sm shadow-md hover:bg-gold-hover transition-all flex items-center gap-2"
              >
                <span>Request Security Briefing</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
              >
                Emergency Incident Hotline
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="w-full bg-surface-canvas py-8 px-6 lg:px-12 border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">0 CVEs</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Unmitigated Exposure</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">&lt; 1.2s</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Incident Isolation Window</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">TLS 1.3+</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Post-Quantum Cryptography</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">100%</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Statutory Audit Pass Rate</div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
              COMPREHENSIVE DEFENSIVE CAPABILITIES
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
              Specialized Cybersecurity Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-navy-deep text-secondary-container flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-xl">{cap.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-primary">{cap.title}</h3>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <span className="text-[10px] font-mono text-secondary font-bold uppercase block mb-1.5">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-1 text-xs text-on-surface font-medium">
                    {cap.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-surface-container-lowest border border-border-subtle p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-navy-deep">Need a Comprehensive Security Audit?</h3>
              <p className="text-xs text-on-surface-variant mt-1">
                Our Principal Cryptographers and SREs conduct initial threat assessments under automated bilateral NDA.
              </p>
            </div>
            <Link
              href="/contact#briefing"
              className="px-6 py-2.5 rounded-lg bg-secondary-container text-navy-deep font-bold text-xs tracking-wide shadow hover:bg-gold-hover transition-all shrink-0"
            >
              Initiate Security Briefing &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
