// components/UnifiedSection.tsx
import Image from "next/image";

const features = [
  {
    title: "Centralized Records\n& Results",
    desc: "All your pet’s health data\nin one secure place.",
    iconSrc: "/icons/centralized.png",
    alt: "Centralized Records & Results",
  },
  {
    title: "Personalized Diagnostics",
    desc: "Veterinary-guided\nscreenings & lab tests\ntailored to your pet.",
    iconSrc: "/icons/personalized_diagnostics.png",
    alt: "Personalized Diagnostics",
  },
  {
    title: "Custom Care Plans",
    desc: "Individualized supplement\n& treatment plans.",
    iconSrc: "/icons/custom_care.png",
    alt: "Custom Care Plans",
  },
  {
    title: "Ongoing Monitoring",
    desc: "Track progress & retest\nperiodically to optimize health",
    iconSrc: "/icons/ongoing_monitor.png",
    alt: "Ongoing Monitoring",
  },
];

export default function UnifiedSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      {/* ===== Full background like reference (layered) ===== */}
      <div className="absolute inset-0 bg-[#EEF4FF]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
      <div className="pointer-events-none absolute -top-32 -left-40 h-[520px] w-[720px] rounded-full bg-[#D7E6FF]/70 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 -right-56 h-[520px] w-[760px] rounded-full bg-[#D7E6FF]/60 blur-3xl" />

      {/* subtle bottom wave like your other sections */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full opacity-90">
        <svg viewBox="0 0 1440 260" className="h-[260px] w-full" preserveAspectRatio="none">
          <path
            d="M0,160 C240,120 460,210 760,170 C1040,130 1180,70 1440,95 L1440,260 L0,260 Z"
            fill="#DCEBFF"
            opacity="0.9"
          />
          <path
            d="M0,185 C260,150 520,235 820,195 C1080,155 1200,95 1440,120 L1440,260 L0,260 Z"
            fill="#CFE2FF"
            opacity="0.55"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 text-center">
        {/* ===== Heading ===== */}
        <h2 className="text-[34px] leading-tight md:text-[44px] font-extrabold tracking-tight text-blue-600">
          A Unified Solution for Better Pet Health.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-[16px] md:text-[18px] leading-relaxed text-slate-600">
          PetNova Health brings together all aspects of proactive pet care into one centralized platform.
        </p>

        {/* ===== Cards ===== */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.alt}
              className="
                rounded-[26px]
                bg-white/70
                backdrop-blur
                border border-white/60
                shadow-[0_24px_70px_rgba(15,23,42,0.10)]
                px-8
                pt-12
                pb-10
                min-h-[420px]
              "
            >
              {/* icon area (BIGGER like reference) */}
              <div className="mx-auto grid place-items-center">
                <Image
                  src={f.iconSrc}
                  alt={f.alt}
                  width={260}
                  height={260}
                  priority={false}
                  className="h-[150px] w-auto object-contain"
                />
              </div>

              {/* title (smaller + lighter than your current so icon dominates) */}
              <h3 className="mt-8 whitespace-pre-line text-[22px] leading-snug font-semibold text-slate-800">
                {f.title}
              </h3>

              {/* desc (lighter + slightly smaller) */}
              <p className="mt-5 whitespace-pre-line text-[16px] leading-relaxed text-slate-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-14">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-10 py-4 text-[16px] font-semibold text-white shadow-[0_18px_40px_rgba(229,57,53,0.22)] hover:brightness-95"
          >
            Get Started Now
          </a>

          <p className="mt-7 text-[16px] md:text-[18px] text-slate-600">
            Build a proactive, science-backed care plan for your pet today.
          </p>
        </div>
      </div>
    </section>
  );
}