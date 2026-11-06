"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        setPortalModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      subItems: [
        {
          title: "Cybersecurity & IT Consulting",
          desc: "Sovereign trust, penetration testing, threat modeling & compliance",
          href: "/services/cybersecurity",
          icon: "security",
        },
        {
          title: "Software & Application Development",
          desc: "Mission-critical architectures, distributed systems & cloud-native apps",
          href: "/services/software-development",
          icon: "code",
        },
        {
          title: "Digital Marketing & Advertising",
          desc: "Data-driven commercial expansion, enterprise SEO & conversion engines",
          href: "/services/digital-marketing",
          icon: "campaign",
        },
      ],
    },
    { name: "Console", href: "/#telemetry" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-border-subtle/80 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="h-20 max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo & Brand Lockup */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
              aria-label="MayorSmart Global Enterprise Home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/logo.png"
                alt="MayorSmart Logo"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary tracking-tight leading-none">
                  MayorSmart
                </span>
                <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mt-0.5">
                  Global Enterprise
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden xl:flex items-center gap-8 ml-6"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`text-sm py-1 inline-flex items-center gap-1 transition-colors ${
                          isActive
                            ? "font-bold text-primary border-b-2 border-primary"
                            : "font-medium text-on-surface-variant hover:text-primary"
                        }`}
                        aria-expanded={servicesDropdownOpen}
                      >
                        {link.name}
                        <span className="material-symbols-outlined text-base">
                          expand_more
                        </span>
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 bg-surface-container-lowest rounded-xl shadow-xl border border-border-subtle p-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-secondary px-3 py-1">
                            Core Practice Divisions
                          </div>
                          <div className="space-y-1 mt-1">
                            {link.subItems?.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface transition-colors group"
                              >
                                <span className="material-symbols-outlined text-secondary text-xl mt-0.5 group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </span>
                                <div>
                                  <div className="text-xs font-bold text-primary group-hover:text-secondary">
                                    {item.title}
                                  </div>
                                  <div className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-border-subtle mt-2 pt-2 px-3">
                            <Link
                              href="/services"
                              className="text-xs font-bold text-primary hover:text-secondary flex items-center justify-between"
                            >
                              <span>View All Services</span>
                              <span className="material-symbols-outlined text-sm">
                                arrow_forward
                              </span>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm py-1 transition-colors ${
                      isActive
                        ? "font-bold text-primary border-b-2 border-primary"
                        : "font-medium text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Live Nodes Beacon */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 mr-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-semibold tracking-wide text-emerald-800 uppercase">
                Grid Nodes Online
              </span>
            </div>

            {/* Client Portal Button */}
            <button
              onClick={() => setPortalModalOpen(true)}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-surface-subtle text-primary font-semibold text-xs tracking-wide hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary/20"
            >
              Client Portal
            </button>

            {/* Primary Request Briefing CTA */}
            <Link
              href="/contact#briefing"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary-container text-navy-deep font-semibold text-xs tracking-wide shadow-sm hover:bg-gold-hover transition-all focus:ring-2 focus:ring-secondary/40 active:scale-95"
            >
              <span>Request Briefing</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-primary hover:bg-surface-subtle focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container-lowest border-b border-border-subtle px-6 py-6 animate-in slide-in-from-top-4 duration-200 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-800 uppercase">
                  Telemetry Nodes: 18 Active
                </span>
              </div>
              <span className="text-xs font-mono text-on-surface-variant font-medium">
                SLA: 99.999%
              </span>
            </div>

            <nav className="flex flex-col gap-2 mt-4">
              <Link
                href="/"
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-primary hover:bg-surface-subtle flex items-center justify-between"
              >
                <span>Home</span>
                <span className="material-symbols-outlined text-sm text-outline">
                  chevron_right
                </span>
              </Link>
              <Link
                href="/solutions"
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-primary hover:bg-surface-subtle flex items-center justify-between"
              >
                <span>Platform Solutions</span>
                <span className="material-symbols-outlined text-sm text-outline">
                  chevron_right
                </span>
              </Link>
              
              <div className="py-2 px-3">
                <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                  Practice Divisions
                </div>
                <div className="pl-2 space-y-1 border-l-2 border-secondary/20">
                  <Link
                    href="/services/cybersecurity"
                    className="block py-1.5 text-xs font-medium text-on-surface-variant hover:text-primary"
                  >
                    1. Cybersecurity & IT Consulting
                  </Link>
                  <Link
                    href="/services/software-development"
                    className="block py-1.5 text-xs font-medium text-on-surface-variant hover:text-primary"
                  >
                    2. Software & App Development
                  </Link>
                  <Link
                    href="/services/digital-marketing"
                    className="block py-1.5 text-xs font-medium text-on-surface-variant hover:text-primary"
                  >
                    3. Digital Marketing & Advertising
                  </Link>
                  <Link
                    href="/services"
                    className="block py-1.5 text-xs font-bold text-primary"
                  >
                    All Practice Capabilities &rarr;
                  </Link>
                </div>
              </div>

              <Link
                href="/#telemetry"
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-primary hover:bg-surface-subtle flex items-center justify-between"
              >
                <span>GridCore™ Console</span>
                <span className="material-symbols-outlined text-sm text-outline">
                  chevron_right
                </span>
              </Link>
              <Link
                href="/about"
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-primary hover:bg-surface-subtle flex items-center justify-between"
              >
                <span>About Us</span>
                <span className="material-symbols-outlined text-sm text-outline">
                  chevron_right
                </span>
              </Link>
              <Link
                href="/contact"
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-primary hover:bg-surface-subtle flex items-center justify-between"
              >
                <span>Contact Gateway</span>
                <span className="material-symbols-outlined text-sm text-outline">
                  chevron_right
                </span>
              </Link>
            </nav>

            <div className="mt-6 pt-4 border-t border-border-subtle flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPortalModalOpen(true);
                }}
                className="w-full py-2.5 rounded-lg bg-surface-subtle text-primary font-bold text-xs tracking-wide text-center"
              >
                Client Portal Access
              </button>
              <Link
                href="/contact#briefing"
                className="w-full py-2.5 rounded-lg bg-secondary-container text-navy-deep font-bold text-xs tracking-wide text-center flex items-center justify-center gap-2"
              >
                <span>Request Executive Briefing</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Client Portal Modal */}
      {portalModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setPortalModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-2xl border border-border-subtle relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPortalModalOpen(false)}
              className="absolute top-5 right-5 text-on-surface-variant hover:text-primary p-1 rounded-lg"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">lock</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-deep">
                  MayorSmart Client Portal
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Zero-trust authenticated enterprise gateway
                </p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Client authentication session initiated. Redirecting to sovereign IAM single sign-on..."
                );
                setPortalModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                  Enterprise Identifier / SSO Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="architect@institution.com"
                  className="w-full h-10 px-3 text-xs bg-surface-canvas rounded border border-border-bold focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                  Security Token / Hardware Key
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••••••"
                  className="w-full h-10 px-3 text-xs bg-surface-canvas rounded border border-border-bold focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-border-bold text-primary focus:ring-primary"
                  />
                  <span className="text-on-surface-variant">
                    Remember Enclave
                  </span>
                </label>
                <Link
                  href="/contact"
                  className="text-secondary font-semibold hover:underline"
                >
                  Need clearance?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded bg-primary text-white font-bold text-xs tracking-wide hover:bg-navy-deep transition-all mt-2"
              >
                Authenticate Session &rarr;
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between text-[11px] text-outline">
              <span>SOC 2 Type II Certified</span>
              <span>TLS 1.3+ PQ-Encrypted</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
