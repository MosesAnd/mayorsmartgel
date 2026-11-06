"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NodeData {
  id: string;
  name: string;
  region: string;
  latency: string;
  load: string;
  status: "OPTIMAL" | "VAULT";
}

const nodes: NodeData[] = [
  { id: "fra", name: "Frankfurt Core", region: "EU-Central", latency: "3.2ms", load: "42%", status: "OPTIMAL" },
  { id: "lon", name: "London Sovereign", region: "UK-West", latency: "4.1ms", load: "38%", status: "OPTIMAL" },
  { id: "sin", name: "Singapore Node", region: "APAC-South", latency: "18.4ms", load: "56%", status: "OPTIMAL" },
  { id: "zrh", name: "Zurich Vault", region: "CH-Alpine", latency: "2.8ms", load: "29%", status: "VAULT" },
  { id: "dxb", name: "Dubai Terminal", region: "ME-East", latency: "12.0ms", load: "47%", status: "OPTIMAL" },
];

export default function GridCoreConsole() {
  const [selectedNode, setSelectedNode] = useState(nodes[0]);
  const [simulatedTime, setSimulatedTime] = useState("14:48:12");
  const [trafficCount, setTrafficCount] = useState(1824510);

  // Tick simulated traffic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setSimulatedTime(
        now.toTimeString().split(" ")[0] || "14:48:12"
      );
      setTrafficCount((prev) => prev + Math.floor(Math.random() * 45) - 20);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-surface-canvas py-20" id="telemetry">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Narrative */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6" id="architecture">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-soft border border-secondary/20 text-on-secondary-container text-xs font-bold uppercase tracking-wider self-start">
            <span className="material-symbols-outlined text-sm text-secondary">
              memory
            </span>
            <span>Institutional Systems Engine</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep leading-tight">
            Engineered for Sovereign Compliance &amp; Extreme Throughput
          </h2>

          <p className="text-sm text-on-surface-variant font-normal leading-relaxed">
            Eliminate operational regression. MayorSmart delivers verified codebases,
            automated evidence logging, and hardware-accelerated conduits engineered
            to withstand systemic shocks.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm transition-all hover:border-primary/30">
              <div className="w-10 h-10 rounded-lg bg-gold-soft text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">policy</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary">
                  Sovereign Data Residency
                </h4>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  Strict adherence to EU GDPR, Singapore MAS, and UAE sovereign cloud
                  mandates with cryptographic geographic confinement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm transition-all hover:border-primary/30">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">bolt</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary">
                  Stress-Tested Resiliency
                </h4>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  Engineered to absorb 10x burst traffic spikes with zero compute latency
                  degradation across multi-cloud meshes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm transition-all hover:border-primary/30">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high text-navy-deep flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">terminal</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary">
                  Zero Vendor Lock-In
                </h4>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  Full engineering code handover, comprehensive architecture runbooks,
                  and deep technical transfer to your internal SRE staff.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Modern GridCore™ Console (Dark Tech HUD) */}
        <div className="w-full lg:w-1/2 bg-navy-deep text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Console Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-3 h-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-sm font-bold tracking-tight text-white font-mono">
                MayorSmart GridCore™ Console
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-primary-container text-inverse-primary text-[10px] font-mono uppercase tracking-wider">
                LIVE TELEMETRY
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 text-[10px] font-mono">
                v4.19
              </span>
            </div>
          </div>

          {/* Live Global Node Selector */}
          <div className="mb-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
              <span>Active Sovereign Enclaves</span>
              <span className="font-mono text-emerald-400">18/18 Online</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {nodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-2 rounded-lg text-left transition-all ${
                      isSelected
                        ? "bg-secondary-container text-navy-deep shadow-md font-bold"
                        : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5"
                    }`}
                  >
                    <div className="text-[11px] font-bold truncate">{node.name}</div>
                    <div className="text-[10px] font-mono opacity-80 mt-0.5 flex items-center justify-between">
                      <span>{node.latency}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Node Telemetry Detail Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 bg-black/40 p-4 rounded-xl border border-white/10">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">
                Active Region
              </div>
              <div className="text-sm font-mono font-bold text-white mt-0.5">
                {selectedNode.region}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">
                Round-Trip Latency
              </div>
              <div className="text-sm font-mono font-bold text-secondary-container mt-0.5">
                {selectedNode.latency}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">
                Current Core Load
              </div>
              <div className="text-sm font-mono font-bold text-emerald-400 mt-0.5">
                {selectedNode.load}
              </div>
            </div>
          </div>

          {/* Streaming Live Terminal Logs */}
          <div className="bg-black/60 rounded-xl p-4 border border-white/5 font-mono text-[11px] space-y-1.5 terminal-scroll max-h-48 overflow-y-auto">
            <div className="text-slate-500 border-b border-white/5 pb-1 flex items-center justify-between text-[10px]">
              <span>[ENCLAVE TELEMETRY STREAM]</span>
              <span>RATE: {trafficCount.toLocaleString()} TX/SEC</span>
            </div>
            <div className="text-emerald-400">
              [{simulatedTime}.01] NODE_SYNC: {selectedNode.name} consensus validated
              (12/12 peers)
            </div>
            <div className="text-cyan-300">
              [{simulatedTime}.14] CRYPTO: Quantum lattice key rotation executed
              [PQ-Kyber-1024]
            </div>
            <div className="text-slate-300">
              [{simulatedTime}.29] VECTOR_INGEST: Lakehouse pipeline sync latency
              @ {selectedNode.latency}
            </div>
            <div className="text-emerald-400">
              [{simulatedTime}.48] POLICY_AUDIT: Zero unmitigated CVEs across
              active clusters
            </div>
            <div className="text-amber-300">
              [{simulatedTime}.66] RESILIENCE: Multi-region autonomous heartbeat:
              HEALTHY
            </div>
          </div>

          {/* Console Action Bar */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="material-symbols-outlined text-sm text-emerald-400">
                verified_user
              </span>
              <span>Sovereign Enclave Isolation Active</span>
            </div>
            <Link
              href="/solutions"
              className="text-xs font-bold text-secondary-container hover:text-gold-hover flex items-center gap-1 transition-colors"
            >
              <span>Full Architecture</span>
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
