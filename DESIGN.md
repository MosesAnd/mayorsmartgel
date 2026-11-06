# DESIGN SYSTEM: MAYORSMART GLOBAL ENTERPRISES

> **Source of Truth:** Google Stitch (`MayorSmart Brand Design System`, Project ID: `8213773298979301550`)  
> **Aesthetic Theme:** Corporate Tech Vanguard  
> **Primary Typography:** IBM Plex Sans  
> **Target Viewports:** Desktop (1440px / 1280px container) & Mobile (390px fluid)

---

## 1. Brand Identity & Creative North Star

### The Creative North Star: "Corporate Tech Vanguard"
MayorSmart Global Enterprises is designed as an institutional, mission-critical technology leader delivering zero-fragility software architecture, sovereign cloud infrastructure, high-throughput financial systems, and defense-grade cybersecurity.

The visual style combines **Modern Corporate Credibility** with **High-Contrast Precision Engineering**:
- **Monolithic Authority:** Grounded in deep enterprise navy (`#001D47` / `#002B66`) and high-legibility crisp canvas neutrals (`#F8FAFC`).
- **Energizing Accents:** Warm radiant amber gold (`#F5B82E` / `#E0A31B`) acts as a beacon for high-intent actions, key metrics, and priority focal points.
- **Architectural Discipline:** Structured tabular densities, hairline structural borders (`#E2E8F0` / `#CBD5E1`), and restrained 4px geometry create a sense of operational stability and precision.
- **Luminous Telemetry:** Dark glassmorphic command HUDs (the *GridCore™ Console*) provide live observability into global nodes, latencies, and security matrices.

---

## 2. Complete Color System

### 2.1 Primary Brand Colors
| Token Name | Hex Code | Role & Description |
| :--- | :--- | :--- |
| `primary` | `#00173e` | Deepest foundation navy. Brand typography, active navigation states. |
| `primary-container` | `#002b66` | Institutional navy. Header brand marks, primary buttons, console backgrounds. |
| `navy-deep` | `#001D47` | Hero section canvas, dark telemetry HUDs, executive footer panels. |
| `surface-tint` | `#3f5d9a` | Soft slate blue tint for contextual highlights. |
| `inverse-primary` | `#aec6ff` | High-contrast light blue for tags on dark navy backgrounds. |
| `primary-fixed` | `#d8e2ff` | Soft tinted container background for high-tech badges. |

### 2.2 Secondary & Accent Colors (Warm Gold)
| Token Name | Hex Code | Role & Description |
| :--- | :--- | :--- |
| `secondary` | `#7b5800` | Deep golden brown for authoritative icons and high-contrast labels. |
| `secondary-container`| `#fdbf35` / `#F5B82E` | Radiant gold. Primary CTAs ("Request Briefing"), pill highlights, live indicators. |
| `gold-hover` | `#E0A31B` | Active hover state for primary gold CTAs. |
| `gold-soft` | `#FEF7E6` | Muted cream gold for badge backgrounds and active metric cards. |
| `secondary-fixed` | `#ffdea5` | Warm light amber for subheadings in dark sections. |

### 2.3 Surface & Canvas Hierarchy
| Token Name | Hex Code | Role & Description |
| :--- | :--- | :--- |
| `surface-canvas` | `#F8FAFC` | Main application background (Light mode foundation). |
| `surface` | `#f8f9ff` | Subtle tinted page container canvas. |
| `surface-container-lowest` | `#ffffff` | Pure white. Interactive cards, form containers, elevated panels. |
| `surface-subtle` | `#F1F5F9` | Secondary panel backgrounds, button neutral states, code blocks. |
| `surface-container-high` | `#e0e9f9` | Selected state backgrounds, table headers, hover surfaces. |
| `surface-dim` | `#d1daeb` | Disabled backgrounds and muted boundaries. |

### 2.4 Structural Borders & Dividers
| Token Name | Hex Code | Role & Description |
| :--- | :--- | :--- |
| `border-subtle` | `#E2E8F0` | 1px hairline perimeter border for cards and section dividers. |
| `border-bold` | `#CBD5E1` | Input field borders, active tab outlines, interactive element borders. |
| `outline` | `#747781` | Muted icons, inactive navigation pills, secondary metadata. |

### 2.5 Semantic Status Colors
| Status | Background | Border / Accent | Text Token | Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **Online / Operational** | `#ECFDF5` (emerald-50) | `#10B981` (emerald-500) | `#065F46` (emerald-800) | Live nodes, 99.999% SLA, normal operations |
| **Warning / Elevated** | `#FFFBEB` (amber-50) | `#F59E0B` (amber-500) | `#92400E` (amber-800) | Telemetry load spikes, scheduled maintenance |
| **Critical / Incident** | `#FEF2F2` (red-50) | `#EF4444` (red-500) | `#991B1B` (red-800) | Unmitigated threats, critical thresholds |
| **Info / Telemetry** | `#EFF6FF` (blue-50) | `#3B82F6` (blue-500) | `#1E40AF` (blue-800) | Global network routing, packets processed |

---

## 3. Typography System

The entire typographic framework relies strictly on **IBM Plex Sans**, combining industrial clarity with computational elegance.

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

| Type Scale Token | Font Size | Weight | Line Height | Tracking | Recommended Use |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | 48px (3rem) | 700 (Bold) | 56px (3.5rem) | `-0.02em` | Desktop Hero headline |
| `display-hero-mobile`| 32px (2rem) | 700 (Bold) | 40px (2.5rem) | `-0.015em`| Mobile Hero headline |
| `headline-lg` | 36px (2.25rem)| 600 (SemiBold)| 44px (2.75rem)| `-0.015em`| Major Section H2 Titles |
| `headline-lg-mobile`| 26px (1.625rem)| 600 (SemiBold)| 34px (2.125rem)| `-0.01em` | Mobile Section H2 Titles |
| `headline-md` | 28px (1.75rem)| 600 (SemiBold)| 36px (2.25rem)| `-0.01em` | Section Sub-headers / Feature Titles |
| `headline-sm` | 20px (1.25rem)| 600 (SemiBold)| 28px (1.75rem)| `-0.005em`| Card Titles, Modal Headers |
| `title-md` | 16px (1rem) | 600 (SemiBold)| 24px (1.5rem) | `0em` | Sub-card headings, Form labels |
| `body-lg` | 18px (1.125rem)| 400 (Regular) | 28px (1.75rem)| `0em` | Hero lead paragraphs, intro callouts |
| `body-md` | 15px (0.9375rem)| 400 (Regular)| 22px (1.375rem)| `0em` | Standard body copy, list descriptions |
| `body-sm` | 13px (0.8125rem)| 400 (Regular)| 18px (1.125rem)| `0em` | Card descriptions, secondary text |
| `label-md` | 12px (0.75rem)| 600 (SemiBold)| 16px (1rem) | `0.05em` | Overlines, Category Tags, Buttons |
| `label-sm` | 11px (0.6875rem)| 500 (Medium) | 14px (0.875rem)| `0.04em` | Micro badges, status labels, breadcrumbs |
| `mono-metric` | 22px (1.375rem)| 700 (Bold) | 26px (1.625rem)| `-0.01em` | Real-time metric digits, latency readouts |

---

## 4. Spacing, Layout & Grid Architecture

### 4.1 Layout Constraints & Max Widths
- **Maximum Viewport Width:** `1440px` (`max-w-[1440px] mx-auto`)
- **Desktop Section Margins:** `3rem` (`48px` / `px-6 lg:px-12`)
- **Mobile Section Margins:** `1rem` (`16px` / `px-4 sm:px-6`)
- **Desktop Columns:** 12-column responsive fluid grid with `1.5rem` to `2rem` gutters (`gap-6` or `gap-8`).
- **Tablet Columns:** 6 to 8 columns with `1rem` to `1.5rem` gutters.
- **Mobile Columns:** 1 or 2 columns with `1rem` gutters (`gap-4`).

### 4.2 Spacing Scale
- `space-xs`: `0.25rem` (4px)
- `space-sm`: `0.5rem` (8px)
- `space-md`: `1rem` (16px)
- `space-lg`: `1.5rem` (24px)
- `space-xl`: `2.5rem` (40px)
- **Section Padding Vertical:** `py-16` to `py-20` (64px - 80px) on desktop; `py-10` to `py-12` on mobile.

---

## 5. Elevation, Shapes & Depth

### 5.1 Border Radii
- `sm`: `0.125rem` (2px)
- `DEFAULT`: `0.25rem` (4px) — **Base default** for form inputs, small badges, and action buttons.
- `md`: `0.375rem` (6px)
- `lg`: `0.5rem` (8px) — **Cards, feature containers, console HUDs**.
- `xl`: `0.75rem` (12px) — **Modals, hero highlight cards**.
- `full`: `9999px` — **Status indicator pills and icon circles**.

### 5.2 Elevation & Shadow Layers
- **Layer 0 (Canvas):** Flat background rendered in `surface-canvas` (`#F8FAFC`). No shadow.
- **Layer 1 (Standard Card):** `#FFFFFF` surface with 1px border (`#E2E8F0`) and ambient lift:
  `box-shadow: 0 1px 3px rgba(27, 36, 48, 0.04), 0 4px 12px rgba(27, 36, 48, 0.03)`
- **Layer 2 (Hover / Active Card):**
  `box-shadow: 0 8px 24px rgba(0, 43, 102, 0.08)`, `-translate-y-1` transition.
- **Layer 3 (Console HUD & Modals):**
  `box-shadow: 0 20px 48px rgba(0, 29, 71, 0.16)` with subtle 1px border `rgba(255, 255, 255, 0.1)`.

---

## 6. Component Specifications

### 6.1 Navigation Header
- **Desktop:** Sticky top header (`h-20`, 80px) with `bg-surface/90 backdrop-blur-xl border-b border-border-subtle/80`.
- **Left:** MayorSmart brand lockup (Logo mark + "MayorSmart" bold + "GLOBAL ENTERPRISE" uppercase subtitle) + navigation links (`Solutions`, `Architecture`, `Console`, `Impact`, `Contact`).
- **Right:** Live Grid Node status badge (`Grid Nodes Online` with pulsing green dot), `Client Portal` subtle button, and `Request Briefing` primary gold CTA.
- **Mobile:** Sticky top header (`h-16`, 64px) with logo and responsive hamburger toggle drawer.

### 6.2 Buttons & Action Controls
- **Primary CTA (Gold):** `bg-secondary-container text-navy-deep font-semibold text-xs tracking-wide rounded-lg px-4 py-2 hover:bg-gold-hover transition-all`. Incorporates trailing arrow icon.
- **Secondary CTA (Dark/Outline):** `bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm rounded-lg px-6 py-3 backdrop-blur-md transition-all`.
- **Tertiary / Portal Button:** `bg-surface-subtle text-primary font-semibold text-xs rounded-lg px-4 py-2 hover:bg-surface-container-high transition-colors`.

### 6.3 Hero Carousel & Slider
- **Container:** Dark navy canvas (`bg-navy-deep`) with full-bleed photographic background filtered at 50% brightness and blended with directional gradient overlays (`from-navy-deep via-navy-deep/80 to-transparent`).
- **Content:** Category overline badge (with ping indicator) + 48px bold heading + 18px body lead + dual action buttons + 3-column real-time metric strip with mono digits.
- **Controls:** Numbered category pills (`01 Cloud`, `02 Cyber`, `03 AI & Data`) with active progress states + left/right chevron navigation.

### 6.4 The GridCore™ Console HUD
- **Styling:** Dark tech dashboard panel (`bg-navy-deep text-white rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8`).
- **Telemetry Indicators:** Active ping green dot + `LIVE TELEMETRY v4.19` badge.
- **Node Grid:** Real-time region status cards (Frankfurt `3.2ms`, London `4.1ms`, Singapore `18.4ms`, Zurich `2.8ms`, Dubai `12.0ms`).
- **Live Terminal Stream:** Monospace event log with timestamped zero-trust authentication events, vector throughput, and automatic failover checks.

### 6.5 Enterprise Form Controls
- **Inputs & Selects:** Crisp 40px height, 1px border (`#CBD5E1`), background `#FFFFFF`, font size 14px/15px.
- **Focus State:** 1px stroke `#002B66` with a 3px soft focus ring `rgba(0, 43, 102, 0.15)`.
- **Labels:** 12px uppercase semibold (`#131C28`) with `0.04em` tracking.

### 6.6 Enterprise Footer
- **Theme:** Deep corporate navy `#001D47` with border `#FFFFFF/10`.
- **Structure:** 4-column link directory (Practice Areas, Sovereign Enclaves, Governance & Standards, Executive Briefings) + legal disclaimer regarding sovereign data boundaries and regulatory compliance.

---

## 7. Iconography & Assets

### 7.1 Icons
- Primary Icon System: **Google Material Symbols Outlined**
- Sizing Standards:
  - Micro / Inline: `14px` - `16px`
  - Standard Button: `18px` - `20px`
  - Feature Icon Box: `24px` (inside 40px - 48px rounded containers)

### 7.2 Verified Project Assets
All verified image assets are extracted and located in `.stitch_source/assets/`:
1. `logo.png` — High-resolution MayorSmart corporate logo.
2. `datacenter-cloud.png` — Cloud infrastructure & sovereign server room visualization.
3. `cybersecurity-noc.png` — Defense-grade cybersecurity network operations center.
4. `tech-architects.png` — Enterprise IT engineering leadership conference room.
5. `ai-neural-matrix.png` — Applied enterprise artificial intelligence & data matrix.
