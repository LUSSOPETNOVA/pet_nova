// components/Section4.tsx
import Image from "next/image";

const steps = [
  {
    title: "Start With a Health Test",
    desc: "Order a test kit to cucover your\npet’s health markers.",
    iconSrc: "/icons/centralized.png",
    iconW: 320,
    iconH: 190,
  },
  {
    title: "Get Recommended Plan",
    desc: "Receive personalized care plan\nbased on expert analysis.",
    iconSrc: "/icons/custom_care.png",
    iconW: 240,
    iconH: 200,
  },
  {
    title: "Monitor & Retest",
    desc: "Track progress, receive supplements,\nand retest periodically.",
    iconSrc: "/icons/ongoing_monitor.png",
    iconW: 320,
    iconH: 210,
  },
];

function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 80" className={className} fill="none" aria-hidden="true">
      <path
        d="M10 58 C70 40, 120 40, 175 38"
        stroke="rgba(120, 170, 255, 0.22)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M10 58 C70 40, 120 40, 175 38"
        stroke="rgba(120, 170, 255, 0.65)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M172 26 L205 38 L172 50"
        stroke="rgba(120, 170, 255, 0.65)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Section4() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ===== full-section layered background ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6FAFF] to-[#EEF5FF]" />
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#D8E9FF]/60 blur-3xl" />
        <div className="absolute -right-56 -top-36 h-[560px] w-[560px] rounded-full bg-[#DDEBFF]/55 blur-3xl" />
        <div className="absolute left-1/2 top-32 h-[420px] w-[1050px] -translate-x-1/2 rounded-full bg-[#E7F1FF]/70 blur-3xl" />

        <svg
          className="absolute left-0 top-0 h-full w-full opacity-70"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C220,120 520,210 760,170 C1010,125 1180,55 1440,95 L1440,0 L0,0 Z"
            fill="#E7F1FF"
            opacity="0.55"
          />
          <path
            d="M0,740 C260,680 560,800 840,740 C1120,680 1260,610 1440,650 L1440,900 L0,900 Z"
            fill="#DDEBFF"
            opacity="0.75"
          />
          <path
            d="M0,780 C260,720 560,840 840,780 C1120,720 1260,655 1440,690 L1440,900 L0,900 Z"
            fill="#CFE2FF"
            opacity="0.35"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 py-20">
        {/* ===== heading ===== */}
        <div className="text-center">
          <h2 className="text-[40px] font-extrabold tracking-tight text-[#2C69B7] md:text-[48px]">
            How It Works
          </h2>
          <p className="mt-3 text-lg text-slate-600 md:text-xl">
            Three simple steps to optimize your pet’s health.
          </p>
        </div>

        {/* ===== cards row ===== */}
        <div className="relative mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* arrows */}
          <CurvedArrow className="pointer-events-none absolute left-[33%] top-[150px] hidden h-[64px] w-[220px] -translate-x-1/2 lg:block" />
          <CurvedArrow className="pointer-events-none absolute left-[66%] top-[150px] hidden h-[64px] w-[220px] -translate-x-1/2 lg:block" />

          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-[24px] bg-white/70 px-10 pb-11 pt-10 shadow-[0_18px_55px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/60 backdrop-blur"
            >
              <div className="mx-auto flex w-full justify-center">
                <Image
                  src={s.iconSrc}
                  alt={s.title}
                  width={s.iconW}
                  height={s.iconH}
                  className="h-auto w-[250px] object-contain md:w-[285px]"
                  priority={false}
                />
              </div>

              {/* Title: SINGLE LINE */}
              <h3 className="mt-8 text-center text-[24px] font-extrabold leading-tight text-slate-800 md:text-[26px]">
                <span className="inline-block max-w-full whitespace-nowrap">
                  {s.title}
                </span>
              </h3>

              {/* Smaller description */}
              <p className="mt-4 whitespace-pre-line text-center text-[15px] leading-relaxed text-slate-600 md:text-[16px]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== CTA + footer line (smaller) ===== */}
        <div className="mt-14 flex flex-col items-center">
          <a
            href="#kits"
            className="inline-flex items-center justify-center rounded-2xl bg-[#E53935] px-14 py-4 text-lg font-semibold text-white shadow-[0_18px_40px_rgba(229,57,53,0.22)] transition hover:brightness-95"
          >
            Start With a Health Test
          </a>

          <p className="mt-8 text-center text-lg text-slate-600 md:text-xl">
            Build a proactive, science-backed care plan for your pet today.
          </p>
        </div>
      </div>
    </section>
  );
}