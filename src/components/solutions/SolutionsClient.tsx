"use client";

import { useState } from "react";
import Link from "next/link";

interface LayerData {
  layer: string;
  name: string;
  badge: string;
  components: string[];
  specs: string;
  latency: string;
}

const architectureLayers: LayerData[] = [
  {
    layer: "LAYER 04",
    name: "Governance, Telemetry & Audit Mesh",
    badge: "Continuous Compliance",
    components: [
      "Real-time eBPF network telemetry probes",
      "Immutable cryptographic audit ledger (WORM compliant)",
      "Automated statutory evidence exporter (DORA / MAS Notice 655)",
    ],
    specs: "Zero overhead agentless observability • Sub-millisecond trace stitching",
    latency: "< 0.8ms",
  },
  {
    layer: "LAYER 03",
    name: "Cryptographic Vault & Sovereign State Engine",
    badge: "Quantum-Resistant",
    components: [
      "Hardware HSM air-gapped cryptographic partition",
      "Post-quantum lattice key encapsulation (ML-KEM-1024)",
      "Geofenced sovereign data residency locks (EU / APAC / ME)",
    ],
    specs: "FIPS 140-3 Level 4 validation • Zero external trust root dependencies",
    latency: "< 1.2ms",
  },
  {
    layer: "LAYER 02",
    name: "Sovereign Compute & Microservices Fabric",
    badge: "Autonomous Mesh",
    components: [
      "Multi-region Kubernetes orchestrator with self-healing topology",
      "Asynchronous non-blocking Rust/Go microservices daemons",
      "Deterministic private AI vector inference lakehouse",
    ],
    specs: "1.82M tx/second sustained throughput • Autonomous failover under 50ms",
    latency: "< 3.2ms",
  },
  {
    layer: "LAYER 01",
    name: "High-Throughput Ingestion & Edge Gateway",
    badge: "DDoS Hardened",
    components: [
      "Anycast BGP global edge network (38 operational relays)",
      "Hardware-accelerated TLS 1.3 termination proxies",
      "Dynamic rate limiting & adaptive volumetric DDoS scrubbing",
    ],
    specs: "Terabit-scale burst mitigation • Anycast zero-route packet drop",
    latency: "< 4.1ms",
  },
];

export default function SolutionsClient() {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [rfpSubmitted, setRfpSubmitted] = useState<boolean>(false);
  const [rfpData, setRfpData] = useState({
    name: "",
    email: "",
    organization: "",
    scope: "Platform Architecture Blueprint",
  });

  const benchmarks = [
    { metric: "Sustained Throughput", standard: "120,000 tx/s", gridcore: "1,820,000 tx/s", delta: "+15.1x Delta" },
    { metric: "P99 Execution Latency", standard: "45ms - 120ms", gridcore: "< 14ms (Bounded)", delta: "-76% Reduction" },
    { metric: "Failover RTO (Recovery Time)", standard: "15 - 45 Minutes", gridcore: "< 50 Milliseconds", delta: "Near-Zero" },
    { metric: "Annual Infrastructure OPEX", standard: "Baseline (100%)", gridcore: "-38.4% Efficiency", delta: "$14.2M Saved" },
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
            <span className="text-secondary-container font-bold">Solutions Architecture</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-secondary-fixed text-xs font-mono uppercase tracking-wider self-start">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>GRIDCORE™ REFERENCE PLATFORM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              MayorSmart GridCore™ Reference Blueprint
            </h1>

            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              The mission-critical sovereign software foundation engineered for zero technical debt,
              sub-millisecond distributed state consensus, post-quantum encryption, and air-gapped neural workflows.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#blueprint"
                className="px-6 py-3 rounded-lg bg-secondary-container text-navy-deep font-bold text-sm shadow-md hover:bg-gold-hover transition-all flex items-center gap-2"
              >
                <span>Inspect Architecture Stack</span>
                <span className="material-symbols-outlined text-lg">arrow_downward</span>
              </a>
              <a
                href="#intake-rfp"
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
              >
                Download Technical Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Modular Pillars */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface-canvas border-b border-border-subtle" id="pillar-filter-bar">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
              SYSTEM FOUNDATIONS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
              Modular Architecture Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-navy-deep text-secondary-container flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">memory</span>
              </div>
              <h3 className="text-base font-bold text-primary">Autonomous Compute</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Self-healing containerized topology across multi-cloud enclaves. Dynamic auto-scaling without cold-start penalties.
              </p>
              <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-bold">
                99.999% SLA • Sub-50ms Failover
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-secondary-container text-navy-deep flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">enhanced_encryption</span>
              </div>
              <h3 className="text-base font-bold text-primary">Post-Quantum Cryptography</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Lattice-based key encapsulation mechanisms and stateful digital signatures natively embedded into RPC layers.
              </p>
              <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-bold">
                ML-KEM / ML-DSA • NIST Compliant
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">psychology</span>
              </div>
              <h3 className="text-base font-bold text-primary">Deterministic Neural Fabric</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Air-gapped private neural weights, deterministic vector ingestion streams, and automated data quality assertions.
              </p>
              <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-bold">
                Zero Data Exfiltration • Private RAG
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high text-navy-deep flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">sync_alt</span>
              </div>
              <h3 className="text-base font-bold text-primary">Unified Lakehouse Mesh</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                High-velocity Kafka event buses harmonizing SAP S/4HANA, Oracle Cloud, and banking transactional ledgers in real-time.
              </p>
              <div className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-secondary font-bold">
                Sub-Second ERP Sync • Zero Drift
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Blueprint Stack */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface border-b border-border-subtle" id="blueprint">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-border-subtle">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
                TOPOLOGY BREAKDOWN
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
                MayorSmart GridCore™ Reference Architecture
              </h2>
            </div>
            <span className="text-xs font-mono text-on-surface-variant bg-surface-subtle px-3 py-1.5 rounded-lg border border-border-subtle">
              VERIFIED TIER-IV ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-3">
              {architectureLayers.map((item, idx) => {
                const isSelected = activeLayer === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveLayer(idx)}
                    className={`p-5 rounded-xl text-left transition-all border ${
                      isSelected
                        ? "bg-navy-deep text-white border-navy-deep shadow-xl"
                        : "bg-surface-container-lowest text-on-surface border-border-subtle hover:border-primary/40 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[11px] font-mono font-bold ${isSelected ? "text-secondary-container" : "text-secondary"}`}>
                        {item.layer}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isSelected ? "bg-white/10 text-slate-200" : "bg-surface-canvas text-on-surface-variant"}`}>
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-sm font-bold mt-1">{item.name}</div>
                    <div className={`text-xs mt-1 ${isSelected ? "text-slate-300" : "text-outline"}`}>
                      Latency Overhead: <strong className={isSelected ? "text-secondary-container" : "text-primary"}>{item.latency}</strong>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-border-subtle shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-subtle">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-mono text-xs font-bold">
                      {architectureLayers[activeLayer].layer}
                    </span>
                    <h3 className="text-lg font-bold text-navy-deep">
                      {architectureLayers[activeLayer].name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded font-bold">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary block mb-2">
                      Core Layer Primitives &amp; Modules:
                    </span>
                    <ul className="space-y-2.5">
                      {architectureLayers[activeLayer].components.map((comp, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs text-on-surface font-medium">
                          <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-canvas border border-border-subtle mt-4">
                    <span className="text-[10px] uppercase font-bold text-outline block mb-1">
                      Architectural Verification &amp; Standards:
                    </span>
                    <p className="text-xs text-navy-deep font-mono font-medium">
                      {architectureLayers[activeLayer].specs}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between text-xs">
                <span className="text-on-surface-variant font-mono">
                  Sovereign Enclave Isolation: <strong>ENFORCED</strong>
                </span>
                <a
                  href="#intake-rfp"
                  className="font-bold text-primary hover:text-secondary flex items-center gap-1"
                >
                  <span>Request Full Specification Dossier</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarks & ROI Matrix */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface-canvas border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
              QUANTIFIABLE PERFORMANCE
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
              Verifiable Performance ROI
            </h2>
          </div>

          <div className="overflow-x-auto bg-surface-container-lowest rounded-xl border border-border-subtle shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-canvas text-on-surface-variant uppercase font-mono tracking-wider border-b border-border-subtle">
                <tr>
                  <th className="py-4 px-6">System Metric</th>
                  <th className="py-4 px-6">Standard Enterprise Cloud</th>
                  <th className="py-4 px-6 font-bold text-primary">MayorSmart GridCore™</th>
                  <th className="py-4 px-6 text-right">Advantage Delta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {benchmarks.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-canvas/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-navy-deep">{row.metric}</td>
                    <td className="py-4 px-6 text-on-surface-variant font-mono">{row.standard}</td>
                    <td className="py-4 px-6 font-mono font-bold text-primary">{row.gridcore}</td>
                    <td className="py-4 px-6 text-right font-mono font-bold text-emerald-700">{row.delta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical RFP & Whitepaper Intake Form */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface" id="intake-rfp">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-navy-deep text-white rounded-2xl p-8 lg:p-12 border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-mono text-secondary-container uppercase tracking-wider font-bold">
                TECHNICAL ARTIFACT ACCESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Download MayorSmart GridCore™ Architecture Whitepaper
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Receive the complete 48-page architectural specification including cryptographic key rotation proofs,
                eBPF telemetry manifests, and Kubernetes multi-cluster failover controllers.
              </p>
              <div className="text-xs font-mono text-slate-400 mt-2">
                CLASSIFICATION: CONTROLLED UNCLASSIFIED • PDF / 8.4 MB
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10">
              {!rfpSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRfpSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Executive Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={rfpData.name}
                        onChange={(e) => setRfpData({ ...rfpData, name: e.target.value })}
                        placeholder="Arthur Sterling"
                        className="w-full h-10 px-3 bg-white/10 border border-white/20 rounded text-xs text-white placeholder-slate-400 focus:outline-none focus:border-secondary-container"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Institutional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={rfpData.email}
                        onChange={(e) => setRfpData({ ...rfpData, email: e.target.value })}
                        placeholder="cto@enterprise.com"
                        className="w-full h-10 px-3 bg-white/10 border border-white/20 rounded text-xs text-white placeholder-slate-400 focus:outline-none focus:border-secondary-container"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Organization / Sovereign Entity *
                    </label>
                    <input
                      type="text"
                      required
                      value={rfpData.organization}
                      onChange={(e) => setRfpData({ ...rfpData, organization: e.target.value })}
                      placeholder="Continental Financial Services"
                      className="w-full h-10 px-3 bg-white/10 border border-white/20 rounded text-xs text-white placeholder-slate-400 focus:outline-none focus:border-secondary-container"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-secondary-container text-navy-deep font-bold text-xs tracking-wide uppercase hover:bg-gold-hover transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Transmit Whitepaper to Institutional Inbox</span>
                    <span className="material-symbols-outlined text-base">download</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-2xl">verified</span>
                  </div>
                  <h4 className="text-base font-bold text-white">Whitepaper Dispatched</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    The GridCore™ Architecture Reference Dossier has been transmitted to <strong className="text-secondary-container">{rfpData.email}</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
