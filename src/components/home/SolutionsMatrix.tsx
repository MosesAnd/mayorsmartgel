import Link from "next/link";

export default function SolutionsMatrix() {
  const cards = [
    {
      category: "Cloud Mesh",
      title: "Autonomous Infrastructure",
      desc: "Zero-fragility sovereign cloud platforms designed for mission-critical multi-region orchestration.",
      stat: "99.999% SLA",
      points: [
        "Zero-downtime multi-region migrations",
        "Enterprise Kubernetes service mesh",
        "Autonomous failover topology",
      ],
      link: "/services/software-development",
      accentBg: "bg-navy-deep text-secondary-container",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
        </svg>
      ),
    },
    {
      category: "Neural Fabric",
      title: "Enterprise AI & Lakehouse",
      desc: "Deterministic machine intelligence and vector pipelines engineered for air-gapped corporate environments.",
      stat: "1.82M tx/s",
      points: [
        "Air-gapped private LLM fine-tuning",
        "Deterministic vector ingestion streams",
        "Automated metadata data governance",
      ],
      link: "/services/software-development",
      accentBg: "bg-secondary-container text-navy-deep",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        </svg>
      ),
    },
    {
      category: "Zero Trust",
      title: "Sovereign Defense Matrix",
      desc: "Comprehensive defense-grade cybersecurity posture across network, hardware, and application vectors.",
      stat: "ISO 27001/SOC2",
      points: [
        "Continuous perimeter microsegmentation",
        "Quantum-safe TLS 1.3 cryptographic keys",
        "Real-time red-team telemetry sensors",
      ],
      link: "/services/cybersecurity",
      accentBg: "bg-navy-deep text-secondary-container",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      category: "Core Connect",
      title: "Enterprise Integration & ERP",
      desc: "High-throughput transactional sync engine bridging legacy mainframes to modern cloud architectures.",
      stat: "Sub-second",
      points: [
        "Bi-directional SAP S/4HANA & Oracle sync",
        "Event-driven high-velocity Kafka buses",
        "Autonomous financial reconciliation",
      ],
      link: "/services/digital-marketing",
      accentBg: "bg-surface-container-high text-primary",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-20" id="solutions">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-border-subtle">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-sm text-secondary">
                terminal
              </span>
              <span>Modular Platform Architecture</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
              Enterprise Solutions Matrix
            </h2>
            <p className="text-sm text-on-surface-variant mt-2 font-normal leading-relaxed">
              High-throughput software infrastructure built to dismantle technical
              debt and accelerate enterprise operational velocity.
            </p>
          </div>

          <Link
            href="/contact#briefing"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
          >
            <span>Explore Custom Deployment Packages</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        {/* 4-Card Modern IT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-surface rounded-xl p-6 border border-border-subtle flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

              <div className="flex flex-col gap-4">
                <div
                  className={`w-12 h-12 rounded-lg ${card.accentBg} flex items-center justify-center shadow-md`}
                >
                  {card.icon}
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                    {card.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary mt-1">
                    {card.title}
                  </h3>
                </div>

                <ul className="space-y-2 text-xs text-on-surface-variant">
                  {card.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs">
                <span className="font-mono text-on-surface-variant font-semibold">
                  {card.stat}
                </span>
                <Link
                  href={card.link}
                  className="font-bold text-primary group-hover:text-secondary flex items-center gap-1 transition-colors"
                >
                  <span>Deploy</span>
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
