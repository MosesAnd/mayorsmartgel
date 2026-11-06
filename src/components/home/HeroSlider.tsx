"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface SlideData {
  id: number;
  badge: string;
  badgeHighlight: string;
  badgeSub: string;
  badgeSubColor: string;
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  primaryCtaIcon: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  secondaryCtaIcon: string;
  metrics: { value: string; label: string; highlight?: boolean }[];
  bgImage: string;
  pillLabel: string;
}

const slides: SlideData[] = [
  {
    id: 0,
    badge: "Tier-IV Sovereign Core",
    badgeHighlight: "bg-secondary-container",
    badgeSub: "99.999% SLA",
    badgeSubColor: "text-secondary-fixed",
    title: "Autonomous Cloud & Infrastructure",
    description:
      "Mission-critical hybrid orchestration, zero-downtime mesh conversions, and sovereign multi-region resilience for Fortune 500 institutions and public sectors.",
    primaryCtaText: "Explore Cloud Solutions",
    primaryCtaLink: "/services/software-development",
    primaryCtaIcon: "arrow_forward",
    secondaryCtaText: "Platform Architecture",
    secondaryCtaLink: "/solutions",
    secondaryCtaIcon: "play_circle",
    metrics: [
      { value: "< 14ms", label: "Global Latency", highlight: true },
      { value: "100%", label: "Sovereign Data" },
      { value: "18 Nodes", label: "EMEA / APAC" },
    ],
    bgImage: "/assets/img/datacenter-cloud.png",
    pillLabel: "01 Cloud",
  },
  {
    id: 1,
    badge: "Zero-Trust Architecture",
    badgeHighlight: "bg-emerald-400",
    badgeSub: "SOC 2 / ISO 27001",
    badgeSubColor: "text-white font-mono",
    title: "Next-Gen Cybersecurity & Sovereign Defense",
    description:
      "Zero-trust architecture, quantum-safe encryption, and 24/7 proactive threat mitigation protecting sovereign networks and high-throughput transactional vaults.",
    primaryCtaText: "Security Briefing",
    primaryCtaLink: "/services/cybersecurity",
    primaryCtaIcon: "shield",
    secondaryCtaText: "Inspect Threat Fabric",
    secondaryCtaLink: "/#telemetry",
    secondaryCtaIcon: "visibility",
    metrics: [
      { value: "0 CVEs", label: "Unmitigated", highlight: true },
      { value: "< 1.2s", label: "Response Window" },
      { value: "TLS 1.3+", label: "PQ-Encrypted" },
    ],
    bgImage: "/assets/img/cybersecurity-noc.png",
    pillLabel: "02 Cyber",
  },
  {
    id: 2,
    badge: "Applied Neural Architecture",
    badgeHighlight: "bg-cyan-400",
    badgeSub: "Private Weights",
    badgeSubColor: "text-secondary-fixed",
    title: "Enterprise AI & Deterministic Intelligence",
    description:
      "Private LLMs, high-speed neural pipelines, and sovereign data models designed to eliminate hallucinations with sub-millisecond execution.",
    primaryCtaText: "Discover AI Framework",
    primaryCtaLink: "/services/software-development",
    primaryCtaIcon: "psychology",
    secondaryCtaText: "Commercial Growth",
    secondaryCtaLink: "/services/digital-marketing",
    secondaryCtaIcon: "campaign",
    metrics: [
      { value: "1.82M", label: "Tx / Second", highlight: true },
      { value: "Air-Gapped", label: "Fine-Tuning" },
      { value: "Zero Drift", label: "Governance" },
    ],
    bgImage: "/assets/img/ai-neural-matrix.png",
    pillLabel: "03 AI & Growth",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance slides every 7 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden bg-navy-deep text-white min-h-[680px] lg:h-[740px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="MayorSmart Enterprise Capabilities Carousel"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full min-h-[680px] lg:h-[740px]">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-700 ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image with Ambient Dark Tech Overlays */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.bgImage}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center filter brightness-40 transform scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent"></div>
              </div>

              {/* Slide Content */}
              <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-12">
                <div className="max-w-2xl flex flex-col gap-5">
                  {/* Category Pill Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur-md self-start">
                    <span
                      className={`w-2 h-2 rounded-full ${slide.badgeHighlight} animate-ping`}
                    ></span>
                    <span>{slide.badge}</span>
                    <span className="text-white/40">•</span>
                    <span className={slide.badgeSubColor}>{slide.badgeSub}</span>
                  </div>

                  {/* Heading */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Dual CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href={slide.primaryCtaLink}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary-container text-navy-deep font-bold text-sm shadow-lg hover:bg-gold-hover transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span>{slide.primaryCtaText}</span>
                      <span className="material-symbols-outlined text-lg">
                        {slide.primaryCtaIcon}
                      </span>
                    </Link>

                    <Link
                      href={slide.secondaryCtaLink}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm backdrop-blur-md transition-all duration-300"
                    >
                      <span className="material-symbols-outlined text-lg text-secondary-container">
                        {slide.secondaryCtaIcon}
                      </span>
                      <span>{slide.secondaryCtaText}</span>
                    </Link>
                  </div>

                  {/* 3-Column Real-Time Metrics Strip */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
                    {slide.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div
                          className={`text-2xl font-bold font-mono ${
                            metric.highlight ? "text-secondary-container" : "text-white"
                          }`}
                        >
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Controls & Interactive Indicators */}
      <div className="absolute bottom-8 max-w-[1440px] mx-auto w-full left-1/2 -translate-x-1/2 px-6 lg:px-12 flex items-center justify-between z-20 pointer-events-none">
        {/* Numbered Category Pills */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {slides.map((s, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlide(idx)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-white/25 border border-white/40 text-white shadow-md"
                    : "bg-white/10 border border-white/10 text-slate-300 hover:bg-white/20"
                }`}
                aria-label={`Jump to slide: ${s.title}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-secondary-container" : "bg-slate-400"
                  }`}
                ></span>
                <span>{s.pillLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
