import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialized Practice Capabilities | MayorSmart Global Enterprise",
  description:
    "Cybersecurity & Sovereign Trust, Mission-Critical Custom Software Development, and Enterprise Growth & Digital Marketing.",
};

export default function ServicesPage() {
  const deploymentPhases = [
    {
      num: "01",
      name: "Discovery & Threat Modeling",
      duration: "1 - 2 Weeks",
      desc: "Comprehensive topology mapping, attack surface analysis, and regulatory constraint audit (EU GDPR, MAS, DORA).",
      deliverable: "Target Architecture Blueprint & Threat Model Dossier",
    },
    {
      num: "02",
      name: "Sovereign Prototyping & Sandboxing",
      duration: "2 - 4 Weeks",
      desc: "Simulated load testing, quantum-safe cryptographic handshakes, and sub-millisecond API mesh validations in an isolated enclave.",
      deliverable: "Verified Performance Benchmarks & Code Artifacts",
    },
    {
      num: "03",
      name: "Zero-Downtime Mesh Cutover",
      duration: "1 - 3 Weeks",
      desc: "Bi-directional event replication, shadow-traffic routing, and automated rollback triggers ensuring zero transaction loss.",
      deliverable: "Production Switchover & Live Traffic Certification",
    },
    {
      num: "04",
      name: "Autonomous SRE & SLA Governance",
      duration: "Continuous 24/7/365",
      desc: "Continuous red-team intrusion simulations, sub-8-minute architect incident response, and automated statutory audit logs.",
      deliverable: "Monthly Governance Reports & 99.999% SLA Uptime",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Services Overview Hero */}
      <section className="w-full bg-gradient-to-b from-surface-canvas via-surface to-surface-canvas border-b border-border-subtle py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">home</span>
              <span>Home</span>
            </Link>
            <span className="text-outline">/</span>
            <span className="text-primary font-bold">Services &amp; Capabilities</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-soft border border-secondary/20 text-on-secondary-container text-xs font-bold uppercase tracking-wider self-start">
              <span className="material-symbols-outlined text-sm text-secondary">verified_user</span>
              <span>Specialized Practice Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-deep leading-tight">
              Enterprise Practice Capabilities
            </h1>

            <p className="text-lg text-on-surface-variant font-normal leading-relaxed">
              MayorSmart delivers high-assurance engineering across three core disciplines: defense-grade cybersecurity,
              mission-critical custom software architecture, and data-driven commercial acceleration.
            </p>
          </div>

          {/* Quick Jump Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-4xl">
            <a
              href="#cybersecurity"
              className="p-4 rounded-xl bg-surface-container-lowest border border-border-subtle hover:border-primary/50 shadow-sm flex items-center justify-between group transition-all"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-secondary font-bold">PRACTICE 01</span>
                <div className="text-sm font-bold text-primary group-hover:text-secondary">Cybersecurity &amp; IT Consulting</div>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_downward</span>
            </a>

            <a
              href="#software-engineering"
              className="p-4 rounded-xl bg-surface-container-lowest border border-border-subtle hover:border-primary/50 shadow-sm flex items-center justify-between group transition-all"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-secondary font-bold">PRACTICE 02</span>
                <div className="text-sm font-bold text-primary group-hover:text-secondary">Software &amp; App Development</div>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_downward</span>
            </a>

            <a
              href="#enterprise-growth"
              className="p-4 rounded-xl bg-surface-container-lowest border border-border-subtle hover:border-primary/50 shadow-sm flex items-center justify-between group transition-all"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-secondary font-bold">PRACTICE 03</span>
                <div className="text-sm font-bold text-primary group-hover:text-secondary">Digital Marketing &amp; Advertising</div>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* PRACTICE 01: Cybersecurity & IT Consulting */}
      <section className="w-full py-20 bg-surface-canvas border-b border-border-subtle px-6 lg:px-12" id="cybersecurity">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-border-subtle">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-primary text-on-primary rounded font-mono text-[11px] font-bold">PRACTICE 01</span>
                <span className="text-secondary font-mono text-xs font-semibold">DIRECTORATE OF DEFENSIVE SYSTEMS</span>
              </div>
              <h2 className="text-3xl font-bold text-navy-deep">Cybersecurity Consulting &amp; Sovereign Trust</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-lowest border border-border-subtle rounded-full text-xs font-mono font-semibold text-primary">NIST FIPS 203/204</span>
              <span className="px-3 py-1 bg-surface-container-lowest border border-border-subtle rounded-full text-xs font-mono font-semibold text-primary">FedRAMP High</span>
              <span className="px-3 py-1 bg-surface-container-lowest border border-border-subtle rounded-full text-xs font-mono font-semibold text-primary">DORA Aligned</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-navy-deep text-secondary-container flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">shield</span>
                </div>
                <h3 className="text-base font-bold text-primary">Zero-Trust Network Architecture</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Eliminate implicit perimeter trust. Every packet, RPC call, and database query is cryptographically authenticated with microsegmented identities.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  Zero Trust • Least Privilege • Continuous IAM
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-secondary-container text-navy-deep flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">vpn_key</span>
                </div>
                <h3 className="text-base font-bold text-primary">Post-Quantum Cryptography</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Migration from RSA/ECC to NIST-standardized quantum-resistant algorithms (ML-KEM / Kyber and ML-DSA / Dilithium) across all transactional vaults.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  Quantum-Safe • Key Encapsulation • Lattice Security
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">security</span>
                </div>
                <h3 className="text-base font-bold text-primary">Continuous Red-Team Drills</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Active adversarial emulation testing cloud perimeters, supply-chain vulnerabilities, and physical data enclave boundaries with zero operational disruption.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  Adversary Emulation • MITRE ATT&amp;CK • Automated SRE
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-navy-deep flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">policy</span>
                </div>
                <h3 className="text-base font-bold text-primary">Sovereign Compliance Automation</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Continuous evidence collection and automated compliance validation mapped to EU DORA, Singapore MAS Notice 655, and ISO 27001 requirements.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  Statutory Evidence • Continuous Auditing • Zero Drift
                </div>
              </div>
            </div>

            {/* Sidebar Callout */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-secondary uppercase tracking-wider block mb-2">
                  DIVISION BENCHMARKS
                </span>
                <h3 className="text-lg font-bold text-navy-deep mb-3">
                  Defensive Outcomes Guaranteed
                </h3>
                <ul className="space-y-3 text-xs text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check_circle</span>
                    <span><strong>0 Unmitigated CVEs:</strong> Immediate automated containment under 1.2s.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check_circle</span>
                    <span><strong>100% Audit Pass Rate:</strong> Built-in proof mechanisms for statutory regulators.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check_circle</span>
                    <span><strong>24/7/365 Sovereign NOC:</strong> Direct lines to senior defense engineers.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle">
                <Link
                  href="/services/cybersecurity"
                  className="w-full py-2.5 rounded bg-primary text-white font-bold text-xs tracking-wide text-center flex items-center justify-center gap-2 hover:bg-navy-deep transition-all"
                >
                  <span>Explore Dedicated Cybersecurity Page</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE 02: Software & App Development */}
      <section className="w-full py-20 bg-surface border-b border-border-subtle px-6 lg:px-12" id="software-engineering">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-border-subtle">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-primary text-on-primary rounded font-mono text-[11px] font-bold">PRACTICE 02</span>
                <span className="text-secondary font-mono text-xs font-semibold">GRIDCORE™ SOFTWARE DIRECTORATE</span>
              </div>
              <h2 className="text-3xl font-bold text-navy-deep">Mission-Critical Custom Software Development</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-lowest border border-border-subtle rounded-md text-xs font-mono font-bold text-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span> Kubernetes Mesh
              </span>
              <span className="px-3 py-1 bg-surface-container-lowest border border-border-subtle rounded-md text-xs font-mono font-bold text-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Apache Kafka
              </span>
              <span className="px-3 py-1 bg-surface-container-lowest border border-border-subtle rounded-md text-xs font-mono font-bold text-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Rust / Go / TypeScript
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-navy-deep text-secondary-container flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">hub</span>
                </div>
                <h3 className="text-base font-bold text-primary">High-Throughput Distributed Backends</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Asynchronous transactional systems processing millions of queries per second with deterministic sub-millisecond p99 latencies.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  1.82M tx/s • Zero Jitter • Non-Blocking I/O
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-secondary-container text-navy-deep flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">cloud_sync</span>
                </div>
                <h3 className="text-base font-bold text-primary">Cloud-Native Microservices Mesh</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Multi-region container orchestration across Kubernetes, Envoy proxies, and gRPC fabrics with zero-downtime blue/green deployment pipelines.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  Autonomous Mesh • Multi-Region • Auto-Healing
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">dataset</span>
                </div>
                <h3 className="text-base font-bold text-primary">ERP &amp; Financial Core Integration</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Bespoke integration middleware connecting legacy SAP S/4HANA, Oracle Financials, and core banking ledgers to modern real-time event buses.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  SAP Sync • Kafka Event Mesh • Instant Reconciliation
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-navy-deep flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">devices</span>
                </div>
                <h3 className="text-base font-bold text-primary">Sovereign Enterprise Web &amp; Mobile Apps</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  High-performance web applications, executive command dashboards, and cross-platform mobile portals built with rigorous cryptographic state sync.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  Next.js • TypeScript • End-to-End Encrypted
                </div>
              </div>
            </div>

            {/* Sidebar Callout */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-secondary uppercase tracking-wider block mb-2">
                  CODEBASE GUARANTEE
                </span>
                <h3 className="text-lg font-bold text-navy-deep mb-3">
                  Complete Code Ownership &amp; IP Transfer
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  We reject proprietary vendor lock-in. Every line of source code, test suite, and CI/CD deployment pipeline is 100% owned by your organization with zero ongoing licensing encumbrances.
                </p>
                <div className="mt-4 space-y-2 text-xs font-mono text-primary">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-sm">code</span>
                    <span>Strict Type-Safe TypeScript / Rust / Go</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-sm">integration_instructions</span>
                    <span>100% Automated Test Coverage</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle">
                <Link
                  href="/services/software-development"
                  className="w-full py-2.5 rounded bg-primary text-white font-bold text-xs tracking-wide text-center flex items-center justify-center gap-2 hover:bg-navy-deep transition-all"
                >
                  <span>Explore Software Development Page</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE 03: Digital Marketing & Advertising */}
      <section className="w-full py-20 bg-surface-canvas border-b border-border-subtle px-6 lg:px-12" id="enterprise-growth">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-border-subtle">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-primary text-on-primary rounded font-mono text-[11px] font-bold">PRACTICE 03</span>
                <span className="text-secondary font-mono text-xs font-semibold">INSTITUTIONAL ADVISORY GROUP</span>
              </div>
              <h2 className="text-3xl font-bold text-navy-deep">Enterprise Growth &amp; Digital Marketing</h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-container text-navy-deep font-bold rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[20px]">trending_up</span>
              <span className="font-mono text-xs">+340% Pipeline Velocity Delta</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-navy-deep text-secondary-container flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">monitoring</span>
                </div>
                <h3 className="text-base font-bold text-primary">Algorithmic Demand Generation</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Precision programmatic campaigns and account-based marketing engines targeting executive decision-makers across institutional, fintech, and public sectors.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  ABM Engines • Programmatic DSP • B2B Enterprise
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-secondary-container text-navy-deep flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <h3 className="text-base font-bold text-primary">Enterprise Technical SEO &amp; Authority</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Dominating high-intent search topology through deep information architecture audits, performance budget optimization, and authoritative domain footprinting.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  Search Topology • Core Web Vitals • Zero Churn
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">conversion_path</span>
                </div>
                <h3 className="text-base font-bold text-primary">Conversion Rate &amp; UX Science</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Rigorous multivariate testing, heat-mapping telemetry, and friction-free user journey engineering that multiplies customer lifetime value.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  Multivariate A/B • Behavioral Telemetry • Funnel Lift
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-navy-deep flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">analytics</span>
                </div>
                <h3 className="text-base font-bold text-primary">Predictive Revenue Attribution</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Multi-touch attribution models integrating CRM, advertising spend, and pipeline velocity into unified executive visualization suites.
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-semibold">
                  Full-Funnel Attribution • Real-Time ROI • Lakehouse Sync
                </div>
              </div>
            </div>

            {/* Sidebar Callout */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-secondary uppercase tracking-wider block mb-2">
                  COMMERCIAL IMPACT
                </span>
                <h3 className="text-lg font-bold text-navy-deep mb-3">
                  Engineering Precision Applied to Market Scale
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  We treat commercial growth like a high-availability distributed pipeline: deterministic metrics, rigorous testing loops, and scalable acquisition engines.
                </p>
                <div className="mt-4 p-4 rounded-lg bg-gold-soft border border-secondary/20">
                  <div className="text-2xl font-bold font-mono text-secondary">3.4x</div>
                  <div className="text-[11px] font-bold text-on-surface-variant uppercase mt-0.5">Average Pipeline Expansion in 6 Months</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle">
                <Link
                  href="/services/digital-marketing"
                  className="w-full py-2.5 rounded bg-primary text-white font-bold text-xs tracking-wide text-center flex items-center justify-center gap-2 hover:bg-navy-deep transition-all"
                >
                  <span>Explore Digital Marketing Page</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Phase Deployment Lifecycle */}
      <section className="w-full py-20 bg-surface border-b border-border-subtle px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
              PROVEN EXECUTION METHODOLOGY
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
              4-Phase Deployment Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentPhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-bold font-mono text-secondary-container bg-navy-deep px-3 py-1 rounded inline-block mb-3">
                    {phase.num}
                  </span>
                  <div className="text-xs font-mono font-bold text-secondary mt-1">{phase.duration}</div>
                  <h3 className="text-base font-bold text-primary mt-1">{phase.name}</h3>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle text-[11px] font-mono text-primary">
                  <span className="text-outline block text-[10px] uppercase">Key Deliverable:</span>
                  <strong>{phase.deliverable}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="bg-navy-deep text-white p-8 lg:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 mt-6">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white">Engage Practice Leadership</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Connect directly with a Senior Practice Fellow to evaluate your enterprise workload specifications or discuss custom engagement packages.
              </p>
            </div>
            <Link
              href="/contact#briefing"
              className="px-6 py-3 rounded-lg bg-secondary-container text-navy-deep font-bold text-sm shadow-md hover:bg-gold-hover transition-all shrink-0 flex items-center gap-2"
            >
              <span>Initiate Practice Consultation</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
