"use client";

import { useState } from "react";
import Link from "next/link";

interface EnclaveContact {
  city: string;
  country: string;
  role: string;
  phone: string;
  email: string;
  latency: string;
  address: string;
}

const enclaves: EnclaveContact[] = [
  {
    city: "London",
    country: "United Kingdom",
    role: "Primary EMEA Enclave & Governance",
    phone: "+44 (0) 20 7946 0912",
    email: "lon.enclave@mayorsmart.com",
    latency: "4.1ms",
    address: "25 Bank Street, Canary Wharf, London E14 5JP",
  },
  {
    city: "Frankfurt",
    country: "Germany",
    role: "Central European Core Exchange",
    phone: "+49 (0) 69 9002 8100",
    email: "fra.enclave@mayorsmart.com",
    latency: "3.2ms",
    address: "Mainzer Landstraße 180, 60327 Frankfurt am Main",
  },
  {
    city: "Singapore",
    country: "Singapore",
    role: "APAC Regional Command Nexus",
    phone: "+65 6712 3400",
    email: "sin.enclave@mayorsmart.com",
    latency: "18.4ms",
    address: "Marina Bay Financial Centre Tower 1, Singapore 018981",
  },
  {
    city: "Zurich",
    country: "Switzerland",
    role: "Alpine Sovereign Vault Facility",
    phone: "+41 (0) 44 215 5000",
    email: "zrh.enclave@mayorsmart.com",
    latency: "2.8ms",
    address: "Gotthardstrasse 26, 8002 Zürich",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    role: "Middle East Gateway Enclave",
    phone: "+971 (0) 4 319 9000",
    email: "dxb.enclave@mayorsmart.com",
    latency: "12.0ms",
    address: "DIFC Gate Precinct 4, Dubai, UAE",
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    classification: "rfp",
    workEmail: "",
    executiveName: "",
    organization: "",
    phone: "",
    urgency: "standard",
    scope: "",
    ndaAgreement: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Classification Banner */}
      <section className="w-full bg-navy-deep text-white px-6 lg:px-12 py-2.5 border-b border-white/10 text-xs font-mono">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-secondary-container font-bold">
              CLASSIFICATION: CONTROLLED UNCLASSIFIED // COMMERCIAL SOVEREIGN
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span>DIRECT ARCHITECT ROUTING: ACTIVE</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">&lt; 8 MIN RESPONSE SLA</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="w-full bg-surface-canvas grid-lines py-16 lg:py-20 px-6 lg:px-12 border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-bold">Contact Gateway</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-soft border border-secondary/20 text-on-secondary-container text-xs font-bold uppercase tracking-wider self-start">
              <span className="material-symbols-outlined text-sm text-secondary">encrypted</span>
              <span>Encrypted Communications Gateway</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-deep leading-tight">
              Mission-Critical Communications Gateway
            </h1>

            <p className="text-lg text-on-surface-variant font-normal leading-relaxed">
              Connect directly with our Principal Enterprise Architects, Sovereign Defense Fellows, and Incident Response SREs. All inquiries are encrypted in transit and handled under automated bilateral NDA.
            </p>
          </div>
        </div>
      </section>

      {/* Real-Time Enclave Latency Bar */}
      <section className="w-full bg-navy-deep text-white py-4 px-6 lg:px-12 border-b border-white/10 overflow-x-auto">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6 min-w-[700px]">
          <div className="text-[11px] font-mono text-slate-400 uppercase font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Live Mesh Latencies:</span>
          </div>
          {enclaves.map((enc, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-300 font-semibold">{enc.city}:</span>
              <span className="text-secondary-container font-bold">{enc.latency}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Dual Grid: Enclaves Directory (Left) + Briefing Dispatch Form (Right) */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface" id="briefing">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Command Enclaves & Emergency Hotline */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
                REGIONAL JURISDICTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep">
                Live Command Enclaves
              </h2>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Direct physical and cryptographic contact channels to each regional enclave directorate.
              </p>
            </div>

            {/* Emergency Hotline Box */}
            <div className="bg-red-950/20 border-2 border-red-500/40 rounded-xl p-5 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">emergency</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-red-600 block">
                  PRIORITY 1 // EMERGENCY INCIDENT DESK
                </span>
                <div className="text-lg font-bold font-mono text-red-900 dark:text-red-300 mt-0.5">
                  +44 (0) 800 014 8899
                </div>
                <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                  24/7/365 immediate dispatch for critical network outages, active cyber incidents, and sovereign SLA failovers.
                </p>
              </div>
            </div>

            {/* Enclaves List */}
            <div className="space-y-4">
              {enclaves.map((enc, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest p-5 rounded-xl border border-border-subtle shadow-sm flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-navy-deep">
                      {enc.city}, {enc.country}
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                      {enc.latency}
                    </span>
                  </div>
                  <div className="text-xs text-secondary font-semibold">{enc.role}</div>
                  <p className="text-[11px] text-outline font-mono">{enc.address}</p>

                  <div className="pt-2 mt-1 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <a href={`tel:${enc.phone.replace(/[^0-9+]/g, "")}`} className="text-primary hover:text-secondary font-bold">
                      {enc.phone}
                    </a>
                    <a href={`mailto:${enc.email}`} className="text-on-surface-variant hover:text-primary">
                      {enc.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Confidential Briefing & RFP Dispatch Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 sm:p-10 rounded-2xl border border-border-subtle shadow-xl">
            <div className="mb-6 pb-4 border-b border-border-subtle">
              <span className="text-xs font-mono text-secondary font-bold uppercase tracking-wider block mb-1">
                EXECUTIVE INTAKE DOSSIER
              </span>
              <h3 className="text-2xl font-bold text-navy-deep">
                Initiate Architecture Briefing or Technical RFP
              </h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Submissions are reviewed by our Systems Engineering Directorate within 8 minutes during active trading windows.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
                    Directive Classification *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { id: "rfp", label: "Technical Architecture RFP" },
                      { id: "cyber", label: "Cybersecurity Posture Audit" },
                      { id: "software", label: "Custom Software Engineering" },
                      { id: "growth", label: "Commercial Growth Strategy" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, classification: opt.id })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium text-left transition-all border ${
                          formData.classification === opt.id
                            ? "bg-primary text-white border-primary font-bold shadow-sm"
                            : "bg-surface text-on-surface-variant border-border-subtle hover:border-primary/40"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1">
                      Institutional Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="e.g. cto@enterprise.com"
                      className="w-full h-10 px-3.5 text-xs bg-surface rounded-lg border border-border-bold focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1">
                      Executive Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.executiveName}
                      onChange={(e) => setFormData({ ...formData, executiveName: e.target.value })}
                      placeholder="Arthur Sterling"
                      className="w-full h-10 px-3.5 text-xs bg-surface rounded-lg border border-border-bold focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1">
                      Organization / Sovereign Entity *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Continental Financial Services"
                      className="w-full h-10 px-3.5 text-xs bg-surface rounded-lg border border-border-bold focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1">
                      Direct Telephone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 20 7946 0912"
                      className="w-full h-10 px-3.5 text-xs bg-surface rounded-lg border border-border-bold focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1">
                    Deployment Scope &amp; Target Timelines
                  </label>
                  <textarea
                    rows={3}
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    placeholder="Provide an overview of target transactional throughput, security compliance constraints, or current architectural bottlenecks..."
                    className="w-full p-3 text-xs bg-surface rounded-lg border border-border-bold focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    id="contact-nda"
                    type="checkbox"
                    checked={formData.ndaAgreement}
                    onChange={(e) => setFormData({ ...formData, ndaAgreement: e.target.checked })}
                    className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="contact-nda" className="text-xs text-on-surface-variant cursor-pointer select-none">
                    Transmit automated mutual Non-Disclosure Agreement (NDA) to my email address.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-lg bg-secondary-container text-navy-deep font-bold text-xs tracking-wider uppercase shadow-md hover:bg-gold-hover transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 mt-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-navy-deep border-t-transparent rounded-full animate-spin"></span>
                      <span>Encrypting &amp; Dispatching Dossier...</span>
                    </span>
                  ) : (
                    <>
                      <span>Submit Encrypted Directive</span>
                      <span className="material-symbols-outlined text-base">lock</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-4xl">verified</span>
                </div>
                <h4 className="text-2xl font-bold text-navy-deep">Directive Transmitted</h4>
                <p className="text-xs text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  Your architecture intake dossier has been dispatched to the Systems Fellow on duty. An encrypted mutual NDA and confirmation receipt have been routed to <strong className="text-primary font-mono">{formData.workEmail}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        classification: "rfp",
                        workEmail: "",
                        executiveName: "",
                        organization: "",
                        phone: "",
                        urgency: "standard",
                        scope: "",
                        ndaAgreement: true,
                      });
                    }}
                    className="px-4 py-2 rounded-lg bg-surface-subtle text-primary font-bold text-xs hover:bg-surface-container-high transition-colors"
                  >
                    Submit Another Communication
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enterprise Protocols FAQ */}
      <section className="w-full py-16 px-6 lg:px-12 bg-surface-canvas border-t border-border-subtle">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-1">
              OPERATIONAL PROCEDURES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-deep">
              Engagement Protocols &amp; Security FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <h4 className="text-sm font-bold text-navy-deep mb-2">How are initial NDAs handled?</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Prior to technical discovery, an automated bilateral NDA signed by our Corporate Secretary is transmitted to your institutional email.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <h4 className="text-sm font-bold text-navy-deep mb-2">What is the incident response SLA?</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                For Priority 1 emergencies, our distributed SRE team guarantees an initial engineer-led containment response within 8 minutes.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-subtle shadow-sm">
              <h4 className="text-sm font-bold text-navy-deep mb-2">Where does client data reside?</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                All communications and client codebases are strictly geofenced within sovereign enclaves pursuant to EU GDPR and MAS guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
