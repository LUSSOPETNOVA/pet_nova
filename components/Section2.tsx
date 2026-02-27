// components/Section2.tsx
import Image from "next/image";

const items = [
  { src: "/icons/secure.svg", label: "Secure & Encrypted" },
  { src: "/icons/lab.svg", label: "Lab-Verified Testing" },
  { src: "/icons/vet.svg", label: "Veterinary-Informed" },
  { src: "/icons/personalized.svg", label: "Personalized Recommendations" },
  { src: "/icons/tracking.svg", label: "Longitudinal Health Tracking" },
];

export default function Section2() {
  return (
    <section className="relative overflow-hidden bg-white">
      
{/* ===== FULL SECTION BACKGROUND ===== */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">

  {/* Base smooth gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#F8FBFF] via-[#EEF5FF] to-[#E2EEFF]" />

  {/* Large soft radial glow top-left */}
  <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-[#DCEBFF] opacity-50 blur-3xl" />

  {/* Large soft radial glow right side */}
  <div className="absolute top-20 right-[-200px] h-[800px] w-[800px] rounded-full bg-[#CFE2FF] opacity-40 blur-3xl" />

  {/* Center floating softness */}
  <div className="absolute top-[30%] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#E6F0FF] opacity-50 blur-3xl" />

</div>
      {/* Top wave (subtle, behind icon row like reference) */}
      <div className="pointer-events-none absolute left-0 top-0 w-full opacity-90">
        <svg viewBox="0 0 1440 260" className="h-[220px] w-full" preserveAspectRatio="none">
          <path
            d="M0,140 C240,80 520,180 780,125 C1040,70 1210,70 1440,110 L1440,0 L0,0 Z"
            fill="#E8F1FF"
            opacity="0.95"
          />
          <path
            d="M0,175 C280,115 520,220 820,160 C1080,110 1240,105 1440,140 L1440,0 L0,0 Z"
            fill="#DCEBFF"
            opacity="0.55"
          />
        </svg>
      </div>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 220" className="h-[240px] w-full" preserveAspectRatio="none">
          <path
            d="M0,140 C240,110 420,170 720,140 C980,110 1140,70 1440,90 L1440,220 L0,220 Z"
            fill="#DDEBFF"
            opacity="0.85"
          />
          <path
            d="M0,160 C260,135 520,195 820,165 C1080,135 1200,95 1440,110 L1440,220 L0,220 Z"
            fill="#CFE2FF"
            opacity="0.55"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-8 pb-16 pt-10 lg:pt-14">
        {/* ===== 5 ICONS ROW (NO big card background) ===== */}
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-5 items-start gap-0">
            {items.map((it, idx) => (
              <div key={it.label} className="relative flex flex-col items-center px-6 text-center">
                {/* divider between items */}
                {idx !== 0 && (
                  <div className="pointer-events-none absolute left-0 top-[26px] h-[120px] w-px bg-slate-200/90" />
                )}

                <Image
                  src={it.src}
                  alt={it.label}
                  width={180}
                  height={180}
                  className="h-[92px] w-auto object-contain"
                  priority={false}
                />

<div className="mt-4 max-w-[200px] text-[18px] font-normal leading-snug text-slate-500">
                  {it.label === "Personalized Recommendations" ? (
                    <>
                      Personalized <br />
                      Recommendations
                    </>
                  ) : it.label === "Longitudinal Health Tracking" ? (
                    <>
                      Longitudinal Health <br />
                      Tracking
                    </>
                  ) : (
                    it.label
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* thin divider line like reference */}
          <div className="mt-10 h-px w-full bg-slate-200/70" />

          {/* centered text ONLY (no box) */}
          <div className="py-8 text-center text-[24px] font-normal tracking-tight text-slate-500">
            Your pet’s health data belongs to you.
          </div>

          {/* subtle divider to separate from main content */}
          <div className="h-px w-full bg-slate-200/45" />
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <div className="max-w-[680px]">
            <h2 className="text-5xl font-extrabold tracking-tight text-blue-600 md:text-6xl">
              Pet Health Is Fragmented.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              Pet owners today manage health across multiple places — vet visits, scattered PDF
              reports, supplement purchases, symptom notes, and personal memory.
            </p>

            <ul className="mt-10 space-y-7 text-xl text-slate-600">
              <li className="flex items-start gap-4">
                <span className="mt-1 text-blue-600">›</span>
                <span>Important insights get lost.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 text-blue-600">›</span>
                <span>Trends go unnoticed.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 text-blue-600">›</span>
                <span>Preventive care becomes reactive care.</span>
              </li>
            </ul>

            <p className="mt-12 text-2xl font-semibold text-slate-800">
              <span className="text-blue-600">PetNova Health</span> solves this.
            </p>
          </div>

          {/* Right illustration */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-blue-200/15 blur-3xl" />
            <div className="relative mx-auto max-w-[780px]">
              <Image
                src="/landing/section2.png"
                alt="Fragmented pet health illustration"
                width={1600}
                height={1200}
                className="h-auto w-full"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}