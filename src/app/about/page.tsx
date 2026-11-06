import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | MayorSmart Global Enterprise",
  description:
    "Architecting zero-fragility IT superstructures, sovereign data enclaves, and mission-critical systems engineering.",
};

export default function AboutPage() {
  const hubs = [
    {
      city: "London",
      country: "United Kingdom",
      type: "Primary EMEA Enclave",
      status: "NOMINAL",
      ping: "4.1ms",
      specs: "Tier-IV Facility • Dual Subsea Feeds • 100% Renewable",
      subnets: "AS-MAYOR-LON-01",
    },
    {
      city: "Frankfurt",
      country: "Germany",
      type: "Central European Core",
      status: "NOMINAL",
      ping: "3.2ms",
      specs: "DE-CIX Peering • Biometric Air-lock • EMP Hardened",
      subnets: "AS-MAYOR-FRA-02",
    },
    {
      city: "Singapore",
      country: "Republic of Singapore",
      type: "APAC Regional Nexus",
      status: "NOMINAL",
      ping: "18.4ms",
      specs: "MAS Notice 655 Verified • Tropical Passive Cooling",
      subnets: "AS-MAYOR-SIN-03",
    },
    {
      city: "Zurich",
      country: "Switzerland",
      type: "Deep Cold-Storage Vault",
      status: "NOMINAL",
      ping: "2.8ms",
      specs: "Alpine Granite Bunker • Air-gapped Hardware HSM Partition",
      subnets: "AS-MAYOR-ZRH-04",
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      type: "Middle East Sovereign Gateway",
      status: "NOMINAL",
      ping: "12.0ms",
      specs: "UAE NESA Aligned • Quadruple Power Grid Redundancy",
      subnets: "AS-MAYOR-DXB-05",
    },
  ];

  const leaders = [
    {
      name: "Sir Julian Vance",
      role: "Executive Chairman & Chief Architect",
      credentials: "FBCS, CEng, Former UK Defense Systems Advisor",
      bio: "Thirty-two years leading high-integrity aerospace, defense network modernization, and ultra-high-throughput banking mainframe transformations across Europe and Asia.",
      icon: "architecture",
    },
    {
      name: "Dr. Elena Rostova",
      role: "Director of Cryptography & Quantum Resilience",
      credentials: "PhD Applied Mathematics (ETH Zurich), IEEE Fellow",
      bio: "Pioneer in post-quantum lattice cryptography and deterministic distributed state consensus. Oversees sovereign key generation and cryptographic boundary controls.",
      icon: "lock",
    },
    {
      name: "Marcus Thorne",
      role: "VP Global Infrastructure Operations",
      credentials: "MSc Distributed Computing (MIT), SRE Fellow",
      bio: "Architected multi-region fault domains and zero-downtime cutover engines for top-tier commodity trading desks and pan-continental telecommunications fabrics.",
      icon: "hub",
    },
    {
      name: "Amara Okafor",
      role: "Head of Neural Systems & Deterministic AI",
      credentials: "MSc Computer Science (Oxford), AI Ethics Chair",
      bio: "Specializes in enterprise air-gapped private weights fine-tuning, deterministic vector ingestion streams, and non-hallucinatory AI workflows for sovereign institutions.",
      icon: "psychology",
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Genesis in London Core",
      desc: "Founded by veteran defense engineers to build failure-proof asynchronous transaction networks for Tier-1 investment consortiums.",
    },
    {
      year: "2016",
      title: "Tier-IV Continental Expansion",
      desc: "Frankfurt and Zurich vault enclaves achieved operational status, introducing sovereign cryptographic partition isolation.",
    },
    {
      year: "2019",
      title: "Post-Quantum Migration",
      desc: "Deployed early-stage lattice-based cryptographic handshakes across all transit corridors ahead of global regulatory mandates.",
    },
    {
      year: "2023",
      title: "MayorSmart GridCore™ Engine",
      desc: "Launched our autonomous mesh topology engine, delivering self-healing multi-cloud failover with sub-millisecond route correction.",
    },
    {
      year: "2026",
      title: "Sovereign AI & Deterministic Fabric",
      desc: "Integrated enterprise private weights neural engines and unified lakehouse meshes into the sovereign GridCore™ platform.",
    },
  ];

  const accreditations = [
    { name: "ISO/IEC 27001:2022", badge: "Information Security Management", status: "Active / Unconditional" },
    { name: "SOC 2 Type II", badge: "Security, Availability & Confidentiality", status: "Continuous Audit" },
    { name: "DORA Aligned", badge: "EU Digital Operational Resilience Act", status: "Strict Compliance" },
    { name: "MAS Cyber Hygiene", badge: "Monetary Authority of Singapore (Notice 655)", status: "Audited & Certified" },
    { name: "FedRAMP High Ready", badge: "Sovereign US Federal Workload Standard", status: "Boundary Certified" },
    { name: "UAE NESA", badge: "National Electronic Security Authority", status: "Tier-1 Authorization" },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Security Clearance Status Ribbon */}
      <section className="w-full bg-navy-deep text-white px-6 lg:px-12 py-2.5 border-b border-white/10 text-xs font-mono">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-secondary-container font-bold">
              CLASSIFICATION: CONTROLLED UNCLASSIFIED // COMMERCIAL SOVEREIGN
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>GRID NODES: 18/18 OPTIMAL</span>
            <span>•</span>
            <span>NTP TIME: SYNCHRONIZED</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full bg-surface-canvas grid-lines py-16 lg:py-24 px-6 lg:px-12 border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">home</span>
              <span>Home</span>
            </Link>
            <span className="text-outline">/</span>
            <span className="text-primary font-bold">About Us</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-soft border border-secondary/20 text-on-secondary-container text-xs font-bold uppercase tracking-wider self-start">
              <span className="material-symbols-outlined text-sm text-secondary">domain</span>
              <span>Corporate Lineage &amp; Engineering Thesis</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-deep leading-tight">
              Architecting Zero-Fragility IT Superstructures
            </h1>

            <p className="text-lg text-on-surface-variant font-normal leading-relaxed">
              MayorSmart Global Enterprises was founded on a singular engineering conviction:
              mission-critical corporate infrastructure cannot rely on brittle commercial abstractions.
              We build sovereign architectures, deterministic distributed systems, and quantum-safe
              enclaves that eliminate single points of failure.
            </p>
          </div>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-navy-deep text-secondary-container flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">gavel</span>
              </div>
              <h3 className="text-base font-bold text-primary">Sovereign Autonomy</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Complete data jurisdiction adherence. We engineer infrastructure where keys, weights, and compute remain legally and physically enclosed.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">speed</span>
              </div>
              <h3 className="text-base font-bold text-primary">Deterministic Latency</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Removing jitter and tail latencies. From sub-millisecond financial settlement to real-time industrial telemetry, timings are bounded.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-secondary-container text-navy-deep flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">security</span>
              </div>
              <h3 className="text-base font-bold text-primary">Zero-Trust Cryptography</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Quantum-safe primitives (Kyber &amp; Dilithium) implemented across transit corridors with continuous multi-party zero-knowledge audits.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high text-navy-deep flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">verified</span>
              </div>
              <h3 className="text-base font-bold text-primary">Continuous Auditability</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Automated regulatory evidence collection, immutable cryptographic logs, and live telemetry that satisfy rigorous board and statutory reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Numerical Proof */}
      <section className="w-full bg-surface-container-lowest border-b border-border-subtle py-12 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="text-4xl lg:text-5xl font-bold font-mono text-navy-deep">14 Yrs</div>
            <div className="text-xs text-secondary font-bold uppercase tracking-wider mt-1">Zero-Regression SLA</div>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl lg:text-5xl font-bold font-mono text-navy-deep">18 Nodes</div>
            <div className="text-xs text-secondary font-bold uppercase tracking-wider mt-1">Multi-Region Enclaves</div>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl lg:text-5xl font-bold font-mono text-navy-deep">$2.4B+</div>
            <div className="text-xs text-secondary font-bold uppercase tracking-wider mt-1">Daily Routed Value</div>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl lg:text-5xl font-bold font-mono text-navy-deep">0 CVEs</div>
            <div className="text-xs text-secondary font-bold uppercase tracking-wider mt-1">Unmitigated Exposure</div>
          </div>
        </div>
      </section>

      {/* Global Command Hubs Section */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12 border-b border-border-subtle" id="command-hubs">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-border-subtle">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-secondary font-bold">
                  38 LOW-LATENCY EDGE RELAYS OPERATIONAL
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
                Global Command Hubs &amp; Data Enclaves
              </h2>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-surface-subtle border border-border-subtle text-xs font-mono text-on-surface-variant">
              <span>GLOBAL STATUS: <strong className="text-emerald-600">100% NOMINAL</strong></span>
              <span className="text-outline">|</span>
              <span>SYNCHRONIZED NTP ATOMIC CLOCKS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-primary bg-primary-fixed/30 px-2.5 py-1 rounded">
                      {hub.subnets}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {hub.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-deep">{hub.city}, {hub.country}</h3>
                  <div className="text-xs font-semibold text-secondary mt-1">{hub.type}</div>
                  <p className="text-xs text-on-surface-variant mt-3 leading-relaxed">
                    {hub.specs}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                  <span className="text-on-surface-variant">Round-Trip Ping:</span>
                  <span className="text-secondary font-bold">{hub.ping}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Directorate & Command (Leadership) */}
      <section className="w-full bg-surface-canvas py-20 px-6 lg:px-12 border-b border-border-subtle" id="leadership">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-border-subtle">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
                EXECUTIVE BOARD &amp; SYSTEMS ARCHITECTS
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
                Scientific Directorate &amp; Command
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md font-normal leading-relaxed">
              Led by veteran systems architects, former defense technology advisors, and quantum cryptography pioneers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-xl border border-border-subtle p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center mb-4 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">{leader.icon}</span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-deep">{leader.name}</h3>
                  <div className="text-xs font-semibold text-secondary mt-1">{leader.role}</div>
                  <div className="text-[11px] font-mono text-outline mt-1">{leader.credentials}</div>

                  <p className="text-xs text-on-surface-variant mt-3 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14-Year Milestones Journey */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12 border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
              PROVEN RESILIENCY RECORD
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
              Fourteen Years of Resilient Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold font-mono text-secondary-container bg-navy-deep px-3 py-1 rounded inline-block mb-3">
                    {m.year}
                  </span>
                  <h4 className="text-sm font-bold text-primary">{m.title}</h4>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Defense Clearances */}
      <section className="w-full bg-surface-canvas py-20 px-6 lg:px-12 border-b border-border-subtle" id="accreditations">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
              INSTITUTIONAL ASSURANCE
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
              Accreditations &amp; Sovereign Defense Clearances
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((acc, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle flex items-start gap-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">verified_user</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-deep">{acc.name}</h4>
                  <div className="text-xs text-on-surface-variant mt-0.5">{acc.badge}</div>
                  <span className="inline-block mt-2 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                    {acc.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-navy-deep text-white p-8 lg:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 mt-6">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white">Engage with MayorSmart Engineering</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Connect directly with a Senior Fellow to review your organization&apos;s infrastructure resilience, zero-trust requirements, or migration roadmap.
              </p>
            </div>
            <Link
              href="/contact#briefing"
              className="px-6 py-3 rounded-lg bg-secondary-container text-navy-deep font-bold text-sm shadow-md hover:bg-gold-hover transition-all shrink-0 flex items-center gap-2"
            >
              <span>Schedule Architecture Briefing</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
