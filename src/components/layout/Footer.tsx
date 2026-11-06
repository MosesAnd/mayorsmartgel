import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-navy-deep text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/logo.png"
                alt="MayorSmart Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white tracking-tight leading-none">
                  MayorSmart
                </span>
                <span className="text-[11px] font-semibold text-secondary-container uppercase tracking-wider mt-0.5">
                  Global Enterprise
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 font-normal leading-relaxed max-w-md mt-2">
              Architecting zero-fragility IT superstructures, sovereign cloud
              infrastructure, defense-grade cybersecurity, and high-velocity
              digital transformation for Fortune 500 institutions and sovereign
              entities.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-2.5 py-1 rounded bg-white/10 text-slate-200 text-xs font-mono">
                SOC 2 TYPE II
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-slate-200 text-xs font-mono">
                ISO 27001
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-slate-200 text-xs font-mono">
                DORA READY
              </span>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary-container mb-4">
              Core Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="hover:text-white transition-colors"
                >
                  Cybersecurity & IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  className="hover:text-white transition-colors"
                >
                  Software & App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-white transition-colors"
                >
                  Digital Marketing & Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Specialized Practice Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-white transition-colors"
                >
                  GridCore™ Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Sovereign Enclaves */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary-container mb-4">
              Command Enclaves
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link
                  href="/about#command-hubs"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>London Sovereign Hub</span>
                  <span className="text-[10px] text-emerald-400 font-mono">4.1ms</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#command-hubs"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Frankfurt Core Node</span>
                  <span className="text-[10px] text-emerald-400 font-mono">3.2ms</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#command-hubs"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Singapore APAC Node</span>
                  <span className="text-[10px] text-emerald-400 font-mono">18.4ms</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#command-hubs"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Zurich Secure Vault</span>
                  <span className="text-[10px] text-emerald-400 font-mono">2.8ms</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#command-hubs"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Dubai Middle East Node</span>
                  <span className="text-[10px] text-emerald-400 font-mono">12.0ms</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary-container mb-4">
              Governance & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link
                  href="/about#accreditations"
                  className="hover:text-white transition-colors"
                >
                  Defense Clearances
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#briefing"
                  className="hover:text-white transition-colors"
                >
                  Executive Briefing Intake
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Emergency NOC Hotline
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sovereign Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="max-w-2xl text-[11px] leading-relaxed">
            <strong className="text-slate-300">Sovereign Data Disclaimer:</strong> All
            mission-critical data packets, cryptographic telemetry, and enterprise
            assets remain isolated within jurisdictional sovereign boundaries pursuant
            to EU GDPR, MAS, and DORA regulatory frameworks.
          </p>

          <div className="text-right shrink-0 font-mono text-[11px]">
            &copy; {currentYear} MayorSmart Global Enterprises. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
