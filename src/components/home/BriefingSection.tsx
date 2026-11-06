"use client";

import { useState } from "react";

export default function BriefingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    workEmail: "",
    fullName: "",
    enterpriseScale: "tier1",
    primaryFocus: "cloud",
    scopeDetails: "",
    ndaAgreement: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real brief dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="w-full bg-surface-canvas py-20" id="briefing">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="bg-surface-container-lowest rounded-2xl shadow-xl border border-border-subtle p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-soft border border-secondary/20 text-on-secondary-container text-xs font-bold uppercase tracking-wider self-start">
              <span className="material-symbols-outlined text-sm text-secondary">
                encrypted
              </span>
              <span>Confidential Intake</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep leading-tight">
              Request an Architecture Briefing
            </h2>

            <p className="text-sm text-on-surface-variant font-normal leading-relaxed">
              Consult directly with our Principal Enterprise Architects. All
              discovery sessions are conducted under automated bilateral NDA.
            </p>

            <div className="space-y-3 pt-2 text-xs font-medium text-on-surface">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base">
                  check_circle
                </span>
                <span>Immediate bilateral Non-Disclosure Agreement (NDA)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base">
                  check_circle
                </span>
                <span>Custom high-level infrastructure topology assessment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base">
                  check_circle
                </span>
                <span>Partner-level systems engineering lead assigned</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-border-subtle flex items-center justify-between mt-2">
              <div>
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider block">
                  Global Briefings Desk
                </span>
                <span className="text-sm font-bold text-primary font-mono">
                  briefings@mayorsmart.com
                </span>
              </div>
              <span className="material-symbols-outlined text-secondary text-2xl">
                mail
              </span>
            </div>
          </div>

          {/* Right Modern Form / Success State */}
          <div className="lg:col-span-7 bg-surface p-6 sm:p-8 rounded-xl border border-border-subtle shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider text-on-surface"
                      htmlFor="work-email"
                    >
                      Institutional Work Email *
                    </label>
                    <input
                      id="work-email"
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, workEmail: e.target.value })
                      }
                      placeholder="e.g. cto@enterprise.com"
                      className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-border-subtle text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider text-on-surface"
                      htmlFor="full-name"
                    >
                      Executive Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Arthur Sterling"
                      className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-border-subtle text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider text-on-surface"
                      htmlFor="enterprise-scale"
                    >
                      Organization Scale *
                    </label>
                    <select
                      id="enterprise-scale"
                      value={formData.enterpriseScale}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          enterpriseScale: e.target.value,
                        })
                      }
                      className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-border-subtle text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    >
                      <option value="tier1">Fortune 500 / Sovereign Tier-1</option>
                      <option value="tier2">Enterprise (1,000 - 10,000)</option>
                      <option value="tier3">Mid-Market Scale (250 - 1,000)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider text-on-surface"
                      htmlFor="primary-interest"
                    >
                      Primary Focus *
                    </label>
                    <select
                      id="primary-interest"
                      value={formData.primaryFocus}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryFocus: e.target.value,
                        })
                      }
                      className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-border-subtle text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    >
                      <option value="cloud">Cloud &amp; Infrastructure Mesh</option>
                      <option value="cyber">
                        Cybersecurity &amp; Zero Trust Consulting
                      </option>
                      <option value="software">
                        Software &amp; Application Development
                      </option>
                      <option value="marketing">
                        Digital Marketing &amp; Advertising
                      </option>
                      <option value="ai">
                        Enterprise AI &amp; Private Models
                      </option>
                      <option value="erp">ERP Middleware Integration</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold uppercase tracking-wider text-on-surface"
                    htmlFor="scope-details"
                  >
                    Directive / Workload Scope
                  </label>
                  <textarea
                    id="scope-details"
                    rows={2}
                    value={formData.scopeDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        scopeDetails: e.target.value,
                      })
                    }
                    placeholder="Brief outline of target workloads, deployment timeline, and compliance mandates..."
                    className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-border-subtle text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    id="nda-check"
                    type="checkbox"
                    checked={formData.ndaAgreement}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ndaAgreement: e.target.checked,
                      })
                    }
                    className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer"
                  />
                  <label
                    htmlFor="nda-check"
                    className="text-xs text-on-surface-variant cursor-pointer select-none"
                  >
                    Transmit automated mutual NDA prior to initial briefing session.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full py-3.5 px-6 rounded-lg bg-secondary-container text-navy-deep font-bold text-sm shadow-md hover:bg-gold-hover transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-navy-deep border-t-transparent rounded-full animate-spin"></span>
                      <span>Processing Encryption Dossier...</span>
                    </span>
                  ) : (
                    <>
                      <span>Initiate Executive Briefing Process</span>
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="p-8 flex flex-col items-center justify-center text-center gap-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">
                    verified
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-deep">
                    Briefing Request Received
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1 max-w-sm leading-relaxed">
                    Your bilateral NDA dossier has been dispatched to{" "}
                    <strong className="text-primary font-mono">
                      {formData.workEmail}
                    </strong>
                    . A Systems Fellow will contact you within 8 minutes.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      workEmail: "",
                      fullName: "",
                      enterpriseScale: "tier1",
                      primaryFocus: "cloud",
                      scopeDetails: "",
                      ndaAgreement: true,
                    });
                  }}
                  className="px-4 py-2 rounded-lg bg-surface-container text-primary font-semibold text-xs hover:bg-surface-container-high transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
