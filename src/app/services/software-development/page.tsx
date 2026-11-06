import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software & Application Development | MayorSmart Global Enterprise",
  description:
    "Mission-critical distributed systems, high-throughput transactional backends, cloud-native microservices, and enterprise application development.",
};

export default function SoftwareDevelopmentServicePage() {
  const capabilities = [
    {
      title: "Distributed Transactional Backends",
      desc: "Engineered in Rust, Go, and C++ for extreme concurrency. Designed to execute over 1.8 million transactions per second with bounded tail latencies (p99 < 14ms) under intense global load.",
      deliverables: ["Event-driven micro-engines", "Zero-copy I/O pipelines", "Deterministic transaction ordering"],
      icon: "hub",
    },
    {
      title: "Cloud-Native Kubernetes Service Mesh",
      desc: "Architected across multi-region sovereign cloud fabrics. Features automated failover, dynamic traffic shaping, distributed tracing, and zero-downtime blue/green deployment orchestration.",
      deliverables: ["Multi-region cluster manifests", "Automated canary controllers", "GitOps deployment pipelines"],
      icon: "cloud_sync",
    },
    {
      title: "Full-Stack Enterprise Web & Mobile Apps",
      desc: "Ultra-responsive, type-safe digital experiences built with Next.js, React, and TypeScript. Fully optimized for high-density analytical dashboards, offline state synchronization, and complex workflows.",
      deliverables: ["Modular component library", "Accessible design system", "Mobile-responsive PWA & native wrappers"],
      icon: "devices",
    },
    {
      title: "Core Banking & ERP Integration (SAP / Oracle)",
      desc: "High-velocity data bridges connecting legacy on-premise transactional backends to modern cloud event streams. Bi-directional real-time sync with SAP S/4HANA, Oracle Cloud, and banking ledgers.",
      deliverables: ["Kafka event integration bus", "Real-time ledger reconciliation", "Legacy mainframe decoupling"],
      icon: "dataset",
    },
    {
      title: "Private AI & Neural Ingestion Pipelines",
      desc: "Integrate private, air-gapped machine learning models into production software. From high-speed vector embeddings to deterministic RAG systems with zero external data exfiltration.",
      deliverables: ["Local model fine-tuning runtime", "Vector lakehouse schemas", "Hallucination-free validation filters"],
      icon: "psychology",
    },
    {
      title: "Zero-Downtime Legacy Modernization",
      desc: "Dismantle legacy technical debt without risking operational disruption. Using the Strangler Fig pattern and shadow traffic replication, we convert legacy systems into modern modular platforms seamlessly.",
      deliverables: ["Shadow verification harness", "Automated rollback safety nets", "Zero customer-facing downtime"],
      icon: "autorenew",
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
            <span className="text-secondary-container font-bold">Software &amp; Application Development</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-secondary-fixed text-xs font-mono uppercase tracking-wider self-start">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              <span>PRACTICE 02 // GRIDCORE™ SOFTWARE DIRECTORATE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Mission-Critical Custom Software Development
            </h1>

            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              We design, build, and deploy ultra-high-throughput distributed software platforms. From sovereign banking cores and ERP event meshes to enterprise web applications, we guarantee zero technical debt and 100% client code ownership.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact#briefing"
                className="px-6 py-3 rounded-lg bg-secondary-container text-navy-deep font-bold text-sm shadow-md hover:bg-gold-hover transition-all flex items-center gap-2"
              >
                <span>Initiate Software Consultation</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link
                href="/solutions"
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
              >
                Inspect GridCore™ Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="w-full bg-surface-canvas py-8 px-6 lg:px-12 border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">1.82M</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Transactions / Second</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">&lt; 14ms</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">P99 Global Latency</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">99.999%</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Enterprise Uptime SLA</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">100%</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Client Code Ownership</div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
              ENGINEERING PILLARS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
              Specialized Software Disciplines
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

          {/* Bottom Code Handover Guarantee */}
          <div className="bg-surface-container-lowest border border-border-subtle p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-navy-deep">Ready to Engineer Your System?</h3>
              <p className="text-xs text-on-surface-variant mt-1">
                From initial technical discovery to production deployment and full source code handover.
              </p>
            </div>
            <Link
              href="/contact#briefing"
              className="px-6 py-2.5 rounded-lg bg-secondary-container text-navy-deep font-bold text-xs tracking-wide shadow hover:bg-gold-hover transition-all shrink-0"
            >
              Request Architecture Consultation &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
