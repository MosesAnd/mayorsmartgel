import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="w-full bg-surface-container-lowest py-20" id="case-studies">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-border-subtle">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-sm text-secondary">
                trending_up
              </span>
              <span>Quantifiable Impact</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
              Engineered Outcomes at Scale
            </h2>
            <p className="text-sm text-on-surface-variant mt-2 font-normal leading-relaxed">
              Validated deployments for global financial institutions, logistics
              carriers, and sovereign authorities.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Certified Results
            </span>
          </div>
        </div>

        {/* Featured Case Study with Image + 2 Quick Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Big Featured Study with Rich Image */}
          <div className="lg:col-span-7 bg-surface rounded-2xl overflow-hidden border border-border-subtle shadow-md flex flex-col justify-between group transition-all duration-300 hover:shadow-xl">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/tech-architects.png"
                alt="Enterprise Technology Executives in modern conference room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent"></div>
              <span className="absolute bottom-4 left-6 px-3 py-1 rounded-full bg-secondary-container text-navy-deep text-xs font-bold shadow-md">
                Featured Case: Global Financial Consortium
              </span>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Cross-Border Settlement
                </span>
                <h3 className="text-2xl font-bold text-navy-deep mt-1">
                  APAC Interbank Mesh Synchronization
                </h3>
                <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Migrated legacy clearing protocols across 18 central banks to an
                  asynchronous event mesh with zero customer-facing downtime.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border-subtle">
                <div className="bg-surface-container-low p-4 rounded-xl">
                  <div className="text-3xl font-bold font-mono text-secondary">
                    -68%
                  </div>
                  <div className="text-xs text-on-surface-variant font-medium uppercase tracking-wider mt-0.5">
                    Settlement Latency
                  </div>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl">
                  <div className="text-3xl font-bold font-mono text-primary">
                    $14.2M
                  </div>
                  <div className="text-xs text-on-surface-variant font-medium uppercase tracking-wider mt-0.5">
                    Annual OPEX Saved
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Two Compact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Card A: Logistics */}
            <div className="bg-surface rounded-2xl p-6 border border-border-subtle shadow-sm flex flex-col justify-between flex-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Logistics &amp; Fleet
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    VERIFIED
                  </span>
                </div>
                <h4 className="text-lg font-bold text-navy-deep">
                  Pan-Regional Real-Time Telematics
                </h4>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  Unified 42 legacy distribution hubs with an edge-computed tracking
                  network processing 12M+ telematics daily.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-border-subtle">
                <div>
                  <span className="text-2xl font-bold font-mono text-navy-deep">
                    41.6%
                  </span>
                  <span className="text-[11px] block text-on-surface-variant uppercase font-semibold">
                    Route Variance Reduced
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-mono text-secondary">
                    12M+
                  </span>
                  <span className="text-[11px] block text-on-surface-variant uppercase font-semibold">
                    Daily Events
                  </span>
                </div>
              </div>
            </div>

            {/* Card B: SCADA Zero-Trust Defense */}
            <div className="bg-surface rounded-2xl p-6 border border-border-subtle shadow-sm flex flex-col justify-between flex-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    National Infrastructure
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    VERIFIED
                  </span>
                </div>
                <h4 className="text-lg font-bold text-navy-deep">
                  SCADA Zero-Trust Defense
                </h4>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  Enclave microsegmentation and continuous countermeasure suites
                  across municipal electrical grid hubs and water utilities.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-border-subtle">
                <div>
                  <span className="text-2xl font-bold font-mono text-navy-deep">
                    &lt; 1.2s
                  </span>
                  <span className="text-[11px] block text-on-surface-variant uppercase font-semibold">
                    Threat Neutralization
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-mono text-secondary">
                    100%
                  </span>
                  <span className="text-[11px] block text-on-surface-variant uppercase font-semibold">
                    Audit Pass Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Testimonial Quote */}
        <div className="bg-navy-deep text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container text-navy-deep flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">
                format_quote
              </span>
            </div>
            <div>
              <p className="text-base sm:text-lg font-medium text-white italic">
                “MayorSmart re-architected our core transactional ecosystem in under 9
                months with zero customer-facing downtime.”
              </p>
              <div className="text-xs text-slate-300 mt-1 font-semibold">
                Arthur Sterling •{" "}
                <span className="text-secondary-fixed">
                  Group CTO, Continental Financial Services
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono font-semibold text-slate-200">
              ISO/IEC 27001
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono font-semibold text-slate-200">
              SOC 2 TYPE II
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
