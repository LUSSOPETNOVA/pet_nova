// components/Section3.tsx
import Image from "next/image";

type Card = {
  title: string;
  desc: string;
  iconSrc: string;
  alt: string;
};

const cards: Card[] = [
  {
    title: "Centralized Records\n& Results",
    desc: "All your pet’s health data\nin one secure place.",
    iconSrc: "/landing/section3/records.png",
    alt: "Centralized Records & Results",
  },
  {
    title: "Personalized Diagnostics",
    desc: "Veterinary-guided\nscreenings & lab tests\ntailored to your pet.",
    iconSrc: "/landing/section3/diagnostics.png",
    alt: "Personalized Diagnostics",
  },
  {
    title: "Custom Care Plans",
    desc: "Individualized supplement\n& treatment plans.",
    iconSrc: "/landing/section3/careplans.png",
    alt: "Custom Care Plans",
  },
  {
    title: "Ongoing Monitoring",
    desc: "Track progress & retest\nperiodically to optimize health",
    iconSrc: "/landing/section3/monitoring.png",
    alt: "Ongoing Monitoring",
  },
];

function TitleBlock() {
  return (
    <div className="text-center">
      <h2 className="text-[44px] font-extrabold tracking-tight text-blue-600 md:text-[52px]">
        A Unified Solution for Better Pet Health.
      </h2>
      <p className="mx-auto mt-4 max-w-4xl text-[20px] leading-relaxed text-slate-600 md:text-[22px]">
        PetNova Health brings together all aspects of proactive pet care into one centralized
        platform.
      </p>
    </div>
  );
}

function CardItem({ c }: { c: Card }) {
  return (
    <div className="relative rounded-[22px] border border-slate-200/70 bg-white/70 px-10 py-10 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
      {/* soft top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 rounded-[22px] bg-gradient-to-b from-blue-100/40 to-transparent" />

      <div className="mx-auto flex flex-col items-center">
        <Image
          src={c.iconSrc}
          alt={c.alt}
          width={210}
          height={160}
          className="h-[120px] w-auto object-contain"
          priority={false}
        />

        <h3 className="mt-6 whitespace-pre-line text-[26px] font-extrabold leading-tight text-slate-800">
          {c.title}
        </h3>

        <p className="mt-5 whitespace-pre-line text-[18px] leading-relaxed text-slate-600">
          {c.desc}
        </p>
      </div>
    </div>
  );
}

export default function Section3() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ===== Background (soft, like screenshot) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7FAFF] via-[#EEF5FF] to-[#EAF2FF]" />
        <div className="absolute -top-44 left-1/2 h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[#DCEBFF]/45 blur-3xl" />
        <div className="absolute top-20 right-[-260px] h-[720px] w-[720px] rounded-full bg-[#CFE2FF]/35 blur-3xl" />
      </div>

      {/* subtle waves */}
      <div className="pointer-events-none absolute left-0 top-0 w-full opacity-80">
        <svg viewBox="0 0 1440 240" className="h-[180px] w-full" preserveAspectRatio="none">
          <path
            d="M0,130 C250,70 520,170 800,120 C1060,70 1220,70 1440,110 L1440,0 L0,0 Z"
            fill="#E8F1FF"
            opacity="0.95"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full opacity-90">
        <svg viewBox="0 0 1440 240" className="h-[200px] w-full" preserveAspectRatio="none">
          <path
            d="M0,120 C260,90 520,160 820,130 C1080,105 1200,70 1440,90 L1440,240 L0,240 Z"
            fill="#DDEBFF"
            opacity="0.85"
          />
          <path
            d="M0,150 C260,120 520,190 820,160 C1080,130 1200,95 1440,110 L1440,240 L0,240 Z"
            fill="#CFE2FF"
            opacity="0.55"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-8 py-16 md:py-20">
        <TitleBlock />

        {/* cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <CardItem key={c.alt} c={c} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-6">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-14 py-4 text-[18px] font-semibold text-white shadow-[0_16px_40px_rgba(229,57,53,0.22)] transition hover:brightness-95"
          >
            Get Started Now
          </a>

          <p className="text-center text-[20px] text-slate-600">
            Build a proactive, science-backed care plan for your pet today.
          </p>
        </div>
      </div>
    </section>
  );
}