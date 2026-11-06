import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing & Advertising | MayorSmart Global Enterprise",
  description:
    "Engineering-grade enterprise growth, algorithmic demand generation, enterprise technical SEO, and conversion rate science.",
};

export default function DigitalMarketingServicePage() {
  const capabilities = [
    {
      title: "Social Media Marketing (Facebook, Instagram & TikTok)",
      desc: "Full-funnel paid and organic social campaigns engineered for rapid revenue growth. From viral TikTok creatives and Instagram brand positioning to hyper-targeted Facebook retargeting and Lookalike scaling, we maximize ROAS and customer lifetime value.",
      deliverables: ["Meta (Facebook/Instagram) & TikTok Ads management", "High-converting UGC & video creative production", "Pixel & CAPI server-side event tracking"],
      icon: "share",
    },
    {
      title: "Algorithmic Demand Generation (ABM)",
      desc: "Precision account-based marketing engineered for complex institutional buying cycles. We map executive buying committees across target Fortune 500s and deploy personalized, multi-touch digital experiences.",
      deliverables: ["Account intent data integration", "C-suite tailored landing experiences", "High-conversion pipeline acceleration"],
      icon: "monitoring",
    },
    {
      title: "Enterprise Technical SEO & Information Topology",
      desc: "Dominating competitive global search landscapes through systematic technical audits, site architecture refactoring, Core Web Vitals optimization, and programmatic authoritative content hubs.",
      deliverables: ["Comprehensive technical crawling audit", "Schema and entity footprinting", "Sub-second Core Web Vitals compliance"],
      icon: "search",
    },
    {
      title: "Conversion Rate Optimization (CRO) & UX Science",
      desc: "Treating conversion funnels like high-availability distributed systems. We implement rigorous multivariate testing loops, heat-map telemetry, and cognitive friction audits to double pipeline yields.",
      deliverables: ["Multivariate testing infrastructure", "Friction-free form optimization", "Qualitative behavioral analytics"],
      icon: "conversion_path",
    },
    {
      title: "Programmatic DSP Advertising & Media Buying",
      desc: "Multi-channel advertising campaigns across LinkedIn, Google Ads, programmatic DSP networks, and high-impact media placements managed with strict CAC efficiency and automated bid optimization algorithms.",
      deliverables: ["Omnichannel campaign architecture", "Automated algorithmic bid adjustments", "Fraud-free brand safety controls"],
      icon: "campaign",
    },
    {
      title: "Full-Funnel Predictive Revenue Attribution",
      desc: "Eliminate vanity metrics. We construct unified marketing data lakehouses that integrate CRM transactions, advertising ad spend, and website interactions into executive revenue dashboards.",
      deliverables: ["Multi-touch attribution models", "Executive ROI reporting suites", "CRM & ERP pipeline telemetry"],
      icon: "analytics",
    },
    {
      title: "Institutional Brand Positioning & Narrative",
      desc: "Elevate your market authority with rigorous visual identity systems, corporate storytelling, high-stakes investor collateral, and digital design languages that project unassailable enterprise credibility.",
      deliverables: ["Corporate brand guidelines", "Executive design system assets", "High-intent conversion collateral"],
      icon: "palette",
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
            <span className="text-secondary-container font-bold">Digital Marketing &amp; Advertising</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-secondary-fixed text-xs font-mono uppercase tracking-wider self-start">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>PRACTICE 03 // INSTITUTIONAL ADVISORY GROUP</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Enterprise Growth &amp; Digital Marketing
            </h1>

            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              We apply engineering rigor to commercial expansion. Through algorithmic demand generation, enterprise search topology dominance, and predictive attribution, we convert complex technical superiority into market leadership.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact#briefing"
                className="px-6 py-3 rounded-lg bg-secondary-container text-navy-deep font-bold text-sm shadow-md hover:bg-gold-hover transition-all flex items-center gap-2"
              >
                <span>Initiate Commercial Briefing</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
              >
                View All Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="w-full bg-surface-canvas py-8 px-6 lg:px-12 border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">+340%</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Pipeline Velocity Delta</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">3.4x</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Average Pipeline Growth</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">-41.6%</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Customer Acquisition Cost</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-mono text-navy-deep">100%</div>
            <div className="text-xs text-secondary font-bold uppercase mt-0.5">Attributed Revenue Visibility</div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
              DATA-DRIVEN METHODOLOGY
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
              Specialized Growth Disciplines
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

          {/* Bottom Callout */}
          <div className="bg-surface-container-lowest border border-border-subtle p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-navy-deep">Accelerate Your Market Velocity</h3>
              <p className="text-xs text-on-surface-variant mt-1">
                Consult with our Enterprise Growth Directors to audit your commercial acquisition architecture.
              </p>
            </div>
            <Link
              href="/contact#briefing"
              className="px-6 py-2.5 rounded-lg bg-secondary-container text-navy-deep font-bold text-xs tracking-wide shadow hover:bg-gold-hover transition-all shrink-0"
            >
              Request Growth Strategy Session &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
