# Context README

## Project Overview

- **Project Name:** Mr MyKey Tampa
- **Type:** Single-page marketing/lead-generation website for a 24/7 mobile locksmith service
- **Stack:** React 18 + TypeScript, Vite, Tailwind CSS, Supabase JS client
- **Operation:** EDIT (built on top of source job `7fabd7f9-833b-41fb-8f8d-9cffd8e7713b`)
- **Database Mode:** Shared Supabase Direct
- **No routing framework detected** — single `App.tsx` renders all sections as a scrollable one-page layout
- **No Stripe commerce flow is active** — Stripe-related env vars are present in `.env` but no checkout, payment, or product components exist in the codebase

---

## End-to-End Features List

- Full-screen hero section with background image, headline, and call-to-action phone link
- Sticky/scroll-aware navigation with mobile hamburger menu
- Services section dynamically fetched from Supabase with hardcoded fallback data
- "Why Us" section with four static value-proposition cards
- Service area section dynamically fetched from Supabase with hardcoded fallback city list
- Customer reviews section dynamically fetched from Supabase with hardcoded fallback reviews and star ratings
- Testimonials section with placeholder slots for future Google review data
- Emergency CTA section with phone and SMS links
- Footer with phone number, logo, and Instagram icon
- Floating call button (mobile only, fixed bottom-right, hidden on `lg+` screens)
- All phone links use `tel:850-238-6119`

---

## Business DNA

- **Business Name:** Mr MyKey Tampa
- **Category:** 24/7 Mobile Locksmith Service
- **USP Hook:** Fast, professional 24/7 mobile locksmith serving Tampa Bay with car, home, and business lock solutions
- **Stage:** Growth
- **Design Vibe:** Bold
- **Location Model:** Service area (not a fixed storefront)
- **Conversion Goal:** Transact (drive phone calls / direct contact)
- **Target Audience:** General public
- **Reseller Page:** No
- **Named Technician:** "Rusty" referenced in WhyUs copy

---

## Project/App Capabilities

- **Dynamic data loading:** Services, service-area cities, and customer reviews are fetched from Supabase at runtime; each component falls back to local hardcoded data if the fetch fails or returns empty
- **Supabase integration:** Client initialized in `src/lib/supabase.ts` using `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- **No authentication:** No login, signup, or protected routes
- **No ecommerce/checkout:** No Stripe checkout flow is implemented despite Stripe env vars being present
- **No routing:** All content lives on a single scrollable page; section anchors (`#home`, `#contact`, `#reviews`) are used for in-page navigation
- **Mobile-first:** Floating call button visible only on mobile; nav collapses to hamburger on small screens
- **Accessibility:** ARIA labels present on hero, emergency CTA, and star rating components

---

## Page-by-Page Breakdown

This project has **no multi-page routing**. All sections are rendered sequentially in `src/App.tsx`.

### Single Page — Section Order

| Order | Section Component | Anchor ID | Notes |
|-------|-------------------|-----------|-------|
| 1 | `Nav` | — | Sticky, scroll-aware, mobile hamburger |
| 2 | `Hero` | `#home` | Full-screen, background image, phone CTA |
| 3 | `Services` | — | Supabase-fetched, fallback list |
| 4 | `WhyUs` | — | 4 static cards: 24/7, Mobile, Tools, Licensed |
| 5 | `ServiceArea` | — | Supabase-fetched city list, fallback cities |
| 6 | `CustomerReviews` | — | Supabase-fetched reviews, star ratings |
| 7 | `Testimonials` | `#reviews` | Placeholder slots for Google reviews |
| 8 | `EmergencyCTA` | `#contact` | Phone + SMS links, dark brown background |
| 9 | `Footer` | — | Logo, phone, Instagram icon |
| — | `FloatingCallButton` | — | Fixed, mobile-only overlay |

---

## Component-Level Signals

### `Nav.tsx`
- Uses `useState`, `useEffect`, `useCallback` for scroll detection and mobile menu toggle
- Renders logo image from hosted URL, phone number, and hamburger (`Menu`/`X`) icons
- Phone: `850-238-6119` | `tel:850-238-6119`

### `Hero.tsx`
- Full-screen section with background image div
- Contains headline copy and a `ChevronDown` scroll indicator
- Phone CTA link using `tel:850-238-6119`

### `Services.tsx`
- Calls `fetchServices()` from `src/data/services.ts` on mount
- Falls back to `fallbackServices` if fetch fails
- Each service card shows a `Check` icon and a phone link

### `WhyUs.tsx`
- Fully static — no data fetching
- Four reasons: `Clock` (24/7), `MapPin` (Mobile), `Wrench` (Tools), `ShieldCheck` (Licensed)
- Copy references technician "Rusty" by name

### `ServiceArea.tsx`
- Calls `fetchServiceAreaCities()` on mount, falls back to `fallbackServiceAreaCities`
- Renders city list with `MapPin` icons and a phone CTA

### `CustomerReviews.tsx`
- Calls `fetchReviews()` on mount, falls back to `fallbackReviews`
- Uses internal `StarRow` sub-component accepting a `count` prop
- Imports `Review` type from `src/data/services.ts`

### `Testimonials.tsx`
- Static placeholder — renders 3 empty `ReviewSlot` objects
- Comment in code notes: "Replace placeholder objects with real Google review data when available"
- No Supabase fetch

### `EmergencyCTA.tsx`
- Static section, dark brown background (`#3B2314`)
- Two CTAs: `Phone` icon (call) and `MessageSquare` icon (SMS)
- Both link to `tel:850-238-6119`

### `FloatingCallButton.tsx`
- Fixed position, bottom-right, `z-50`
- Hidden on `lg` and above (`lg:hidden`)
- Gold background (`bg-brand-gold`), black text

### `Footer.tsx`
- Renders hosted logo image, phone number with `Phone` icon, and `Instagram` icon
- No nav links or sitemap

---

## Code Structure Map

```text
mr-mykey-tampa/
├── .env                          # Supabase + Stripe env vars (Stripe unused in code)
├── index.html                    # Vite HTML entry point
├── icon.svg                      # Favicon/icon asset
├── package.json                  # Dependencies: React 18, Supabase JS, Lucide React
├── postcss.config.js             # Tailwind + Autoprefixer
├── tailwind.config.ts            # Custom brand color palette, font config
├── tsconfig.json                 # ES2020, strict mode, react-jsx
├── vite.config.ts                # Vite + React plugin
└── src/
    ├── main.tsx                  # React DOM root render
    ├── App.tsx                   # Single-page layout, renders all section components
    ├── index.css                 # Global styles, Tailwind directives
    ├── vite-env.d.ts             # Vite env type declarations
    ├── lib/
    │   └── supabase.ts           # Supabase client init (VITE_SUPABASE_URL + ANON_KEY)
    ├── data/
    │   └── services.ts           # Supabase fetch functions + fallback data + types
    │                             # Exports: fetchServices, fetchReviews,
    │                             #          fetchServiceAreaCities, fallbackServices,
    │                             #          fallbackReviews, fallbackServiceAreaCities
    │                             # Types: Service, Review
    └── components/
        ├── Nav.tsx               # Sticky nav, mobile hamburger, scroll-aware
        ├── Hero.tsx              # Full-screen hero, phone CTA
        ├── Services.tsx          # Dynamic service cards
        ├── WhyUs.tsx             # Static 4-card value props
        ├── ServiceArea.tsx       # Dynamic city list
        ├── CustomerReviews.tsx   # Dynamic reviews with star ratings
        ├── Testimonials.tsx      # Static placeholder review slots
        ├── EmergencyCTA.tsx      # Phone + SMS emergency section
        ├── Footer.tsx            # Logo, phone, Instagram
        └── FloatingCallButton.tsx # Mobile-only fixed call button
```

---

## Code Style & Guidelines

- **Language:** TypeScript (strict mode, `noEmit: true`, `isolatedModules: true`)
- **JSX:** `react-jsx` transform (no explicit React import needed in components)
- **Styling:** Tailwind CSS utility classes exclusively; no CSS modules or styled-components
- **Custom Tailwind tokens:** Brand color palette under `brand.*` key:
  - `brand-black: #0A0A0A`
  - `brand-charcoal: #1A1A1A`
  - `brand-steel: #2C2C2C`
  - `brand-gold: #C9A84C`
  - `brand-gold-light: #E2C47A`
  - `brand-gold-dark: #A07830`
  - `brand-cream: #F5F0E8`
  - `brand-off-white: #FAFAF7`
- **Icons:** Lucide React only (`lucide-react@^0.441.0`)
- **Data fetching:** `useEffect` + `useState` pattern; no external query library (no React Query, SWR, etc.)
- **Fallback pattern:** Every Supabase-fetched component initializes state with fallback data and only updates if fetch succeeds
- **Phone constant pattern:** Each component that links to the phone number defines its own local `const TEL = 'tel:850-238-6119'` and `const PHONE = '850-238-6119'`
- **No global state management** — no Context, Redux, or Zustand
- **Accessibility:** `aria-label` used on key sections and interactive elements
- **Module type:** ESM (`"type": "module"` in package.json)

---

## Database Structure

No database schema files or migration files were detected in the project.

The Supabase client is initialized and used for live data fetching in three areas:

| Data Domain | Fetch Function | Fallback Export | Inferred Table/Source |
|-------------|---------------|-----------------|----------------------|
| Services | `fetchServices()` | `fallbackServices` | Unknown — inferred from Supabase query in `services.ts` |
| Customer Reviews | `fetchReviews()` | `fallbackReviews` | Unknown — inferred from Supabase query in `services.ts` |
| Service Area Cities | `fetchServiceAreaCities()` | `fallbackServiceAreaCities` | Unknown — inferred from Supabase query in `services.ts` |

- All fetch logic and type definitions (`Service`, `Review`) live in `src/data/services.ts`
- The actual Supabase table names, column schemas, and RLS policies are **not available** in the provided context
- The `VITE_RUNTIME_SCHEMA` env var suggests a runtime-scoped schema may be in use
- **Stripe env vars** (`VITE_STRIPE_CHECKOUT_FUNCTION`, `VITE_STRIPE_WEBHOOK_FUNCTION`, etc.) are present in `.env` but no corresponding Edge Functions, payment tables, or checkout UI components exist in the codebase — these vars are unused
