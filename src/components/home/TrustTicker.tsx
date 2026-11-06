export default function TrustTicker() {
  const partners = [
    {
      name: "APEX SOVEREIGN",
      svg: (
        <svg
          className="w-5 h-5 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "QUANTIX FINTECH",
      svg: (
        <svg
          className="w-5 h-5 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      name: "VANGUARD FLEET",
      svg: (
        <svg
          className="w-5 h-5 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect height="7" width="7" x="3" y="3" />
          <rect height="7" width="7" x="14" y="3" />
          <rect height="7" width="7" x="14" y="14" />
          <rect height="7" width="7" x="3" y="14" />
        </svg>
      ),
    },
    {
      name: "GRIDCORE POWER",
      svg: (
        <svg
          className="w-5 h-5 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      name: "NEXUS TELECOM",
      svg: (
        <svg
          className="w-5 h-5 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-surface-container-lowest border-y border-border-subtle py-6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant shrink-0">
          <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
          <span>Institutional Trust</span>
          <span className="text-border-bold">•</span>
          <span className="text-outline font-normal lowercase">
            140+ Fortune 500 deployments
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-85">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-tight text-navy-deep hover:text-secondary transition-colors"
            >
              {partner.svg}
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
