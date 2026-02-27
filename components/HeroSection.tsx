// components/HeroSection.tsx
import Image from "next/image";
import DashboardMockup from "./DashboardMockup";

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-white">
      {/* ===== Background: layered gradient flow like reference ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#EAF2FF]" />

        {/* Soft top glow */}
        <div className="absolute -top-44 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DCEBFF]/70 blur-3xl" />

        {/* Right-side diagonal blue slab behind dashboard */}
        <div
          className="absolute -right-44 top-[-140px] h-[560px] w-[980px] rotate-[-10deg] rounded-[90px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(191,221,255,0.78) 0%, rgba(164,207,255,0.30) 55%, rgba(255,255,255,0.0) 100%)",
          }}
        />

        {/* Mid blue flow (subtle) */}
        <div
          className="absolute right-[-260px] top-[130px] h-[520px] w-[820px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(120,175,255,0.35) 0%, rgba(120,175,255,0.12) 45%, rgba(255,255,255,0) 72%)",
          }}
        />

        {/* Bottom wave band */}
        <svg
          className="absolute bottom-0 left-0 h-[340px] w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,224 C240,176 420,260 720,214 C980,176 1140,110 1440,140 L1440,320 L0,320 Z"
            fill="#DDEBFF"
            opacity="0.88"
          />
          <path
            d="M0,252 C260,210 520,290 820,244 C1080,206 1200,150 1440,170 L1440,320 L0,320 Z"
            fill="#CFE2FF"
            opacity="0.55"
          />
        </svg>

        {/* Soft vignette for cleanliness */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/45" />
      </div>

      {/* ===== Dog pinned to screen corner ===== */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-30 hidden lg:block">
        <Image
          src="/landing/dog.png"
          alt="Golden retriever"
          width={2400}
          height={2400}
          priority
          className="
            h-auto
            w-[820px]
            xl:w-[980px]
            2xl:w-[1120px]
            translate-x-[6%]
            translate-y-[10%]
            drop-shadow-[0_70px_140px_rgba(15,23,42,0.25)]
          "
        />
      </div>

      {/* Red wedge behind dog */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-20 hidden lg:block"
        style={{
          width: 520,
          height: 380,
          background:
            "linear-gradient(135deg, rgba(229,57,53,0.0) 0%, rgba(229,57,53,0.38) 100%)",
          clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 80%)",
          transform: "translate(12%, 30%) rotate(8deg)",
        }}
      />

      {/* ===== Content (wider + pushed left) ===== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] px-8 pt-[160px]">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Preventive Pet Health Platform
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              The Operating System <br className="hidden sm:block" />
              for{" "}
              <span className="text-blue-600">
                Preventive Pet <br className="hidden sm:block" />
                Health
              </span>
              .
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Centralized health records. Personalized diagnostics, intelligent care plans.
              Ongoing monitoring — all in one secure platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kits"
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(229,57,53,0.22)] transition hover:brightness-95"
              >
                Start With a Health Test
              </a>
              <a
                href="#supplements"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(30,94,255,0.20)] transition hover:brightness-95"
              >
                Shop Supplements
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-700">
                  ✓
                </span>
                Secure &amp; Encrypted
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-700">
                  ✓
                </span>
                Veterinary-Informed
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-700">
                  ✓
                </span>
                Data-Driven Insights
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="relative z-20 lg:justify-self-end">
            {/* soft glow behind dashboard */}
            <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-blue-200/20 blur-3xl" />
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}