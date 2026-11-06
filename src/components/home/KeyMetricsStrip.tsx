export default function KeyMetricsStrip() {
  const metrics = [
    {
      title: "Reliability",
      value: "99.999%",
      desc: "Enterprise uptime SLA across all multi-region fabrics.",
      dotColor: "bg-emerald-500",
    },
    {
      title: "Volume",
      value: "$2.4B+",
      desc: "Daily transactional assets secured and routed in real-time.",
      dotColor: "bg-blue-500",
    },
    {
      title: "Governance",
      value: "15+",
      desc: "Certified sovereign frameworks: ISO, SOC 2, HIPAA & DORA.",
      dotColor: "bg-amber-500",
    },
    {
      title: "Velocity",
      value: "< 8 min",
      desc: "Direct architect mission response guarantee, 24/7/365.",
      dotColor: "bg-purple-500",
    },
  ];

  return (
    <section className="w-full bg-surface-canvas py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  {item.title}
                </span>
                <span className={`w-2 h-2 rounded-full ${item.dotColor}`}></span>
              </div>
              <div className="text-3xl lg:text-4xl font-bold font-mono text-navy-deep mb-1 tracking-tight">
                {item.value}
              </div>
              <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
