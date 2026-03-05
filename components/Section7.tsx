// components/SectionMonitorRetest.tsx
import Image from "next/image";
import React from "react";

function CheckItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-5">
      {/* circular check like reference */}
      <div className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/75 shadow-[0_14px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 backdrop-blur">
        <svg width="22" height="22" viewBox="0 0 24 24" className="text-[#2C69B7]">
          <path
            fill="currentColor"
            d="M9.55 17.6 4.9 12.95l1.4-1.4 3.25 3.25 8.15-8.15 1.4 1.4-9.55 9.55Z"
          />
        </svg>
      </div>

      <div>
        <div className="text-[22px] font-semibold text-slate-800">{title}</div>
        <div className="mt-1 text-[16px] leading-relaxed text-slate-600">{desc}</div>
      </div>
    </div>
  );
}

function Chip({
  label,
  tone = "green",
}: {
  label: string;
  tone?: "green" | "slate";
}) {
  const tones: Record<string, string> = {
    green: "bg-emerald-100 text-emerald-700 ring-emerald-200/70",
    slate: "bg-slate-100 text-slate-700 ring-slate-200/70",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[13px] font-semibold ring-1 ${tones[tone]}`}
    >
      {label}
    </span>
  );
}

function Chevron() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-400">
      <path
        fill="currentColor"
        d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41Z"
      />
    </svg>
  );
}

function RingScore({ score = 86 }: { score?: number }) {
    const size = 84;
    const stroke = 9; // clean thickness like reference
    const r = (size / 2) - stroke / 2;
    const c = 2 * Math.PI * r;
  
    // map score -> progress (keep it a bit under full so it looks like the reference)
    const pct = Math.min(98, Math.max(0, score)); // prevents “almost full” weirdness
    const dash = (pct / 100) * c;
  
    return (
      <div className="flex items-center gap-4 rounded-2xl bg-white/70 p-5 ring-1 ring-slate-200/70">
        {/* Ring */}
        <div className="relative grid place-items-center" style={{ width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
            {/* Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              stroke="rgba(16,185,129,0.18)"
              strokeWidth={stroke}
              fill="none"
            />
  
            {/* Progress */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              stroke="rgba(16,185,129,0.75)"
              strokeWidth={stroke}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${dash} ${c - dash}`}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </svg>
  
          {/* Center text (kept safely inside) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
  <div className="text-[26px] font-extrabold leading-none text-slate-900">
    {score}
  </div>
  <div className="text-[11px] font-semibold leading-none text-slate-500 -mt-[2px]">
    Good
  </div>
</div>
        </div>
  
        {/* Right content */}
        <div className="flex-1">
          <div className="text-[18px] font-semibold text-slate-800">Health Score</div>
          <div className="mt-2">
            <Chip label="Good" tone="green" />
          </div>
        </div>
  
        <Chevron />
      </div>
    );
  }

export default function Section7() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* background like reference */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F7FAFF] to-[#EAF2FF]" />
        <div className="absolute -left-64 -top-56 h-[620px] w-[620px] rounded-full bg-[#DCEBFF]/55 blur-3xl" />
        <div className="absolute -right-80 -top-48 h-[680px] w-[680px] rounded-full bg-[#E7F1FF]/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 240" className="h-[240px] w-full" preserveAspectRatio="none">
            <path
              d="M0,150 C240,120 420,200 720,155 C980,120 1140,60 1440,95 L1440,240 L0,240 Z"
              fill="#DDEBFF"
              opacity="0.78"
            />
            <path
              d="M0,175 C260,150 520,215 820,180 C1080,145 1200,100 1440,120 L1440,240 L0,240 Z"
              fill="#CFE2FF"
              opacity="0.52"
            />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div>
            <h2 className="text-[44px] font-extrabold leading-tight text-[#2C69B7]">
              Monitor Progress &amp; Retest Periodically
            </h2>

            <p className="mt-4 max-w-[560px] text-[18px] leading-relaxed text-slate-600">
              Stay on top of your pet’s health with regular checkups and retesting for accuracy.
            </p>

            <div className="mt-12 max-w-[640px] space-y-9">
              <CheckItem
                title="Continuously Track Health"
                desc="Get ongoing updates on your pet’s vital biomarkers."
              />
              <CheckItem title="Retest for Accuracy" desc="Verify and adjust based on new results." />
              <CheckItem
                title="Easily Manage Care"
                desc="Receive reminders, adjust plans, and keep your pet health on track."
              />
            </div>

            <div className="mt-12">
              <a
                href="#monitoring"
                className="inline-flex items-center justify-center rounded-2xl bg-[#E53935] px-12 py-4 text-[18px] font-semibold text-white shadow-[0_18px_45px_rgba(229,57,53,0.30)] transition hover:brightness-95"
              >
                Start Monitoring
              </a>

              <div className="mt-6 text-[16px] text-slate-500">
                Maintain optimal health for a longer, happier life.
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* dashboard frame */}
            <div className="rounded-[32px] bg-white/55 p-6 ring-1 ring-slate-200/70 shadow-[0_38px_100px_rgba(15,23,42,0.14)] backdrop-blur">
              <div className="rounded-[26px] bg-white/55 p-5 ring-1 ring-slate-200/70">
                {/* header */}
                <div className="flex items-center justify-between px-2 py-1">
                  <div className="text-[20px] font-bold text-slate-800">Max’s Health Dashboard</div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                  </div>
                </div>

                {/* cards */}
                <div className="mt-5 space-y-5">
                  <div className="rounded-[22px] bg-white/70 p-4 ring-1 ring-slate-200/70">
                    <RingScore score={86} />
                  </div>

                  <div className="rounded-[22px] bg-white/70 p-4 ring-1 ring-slate-200/70">
                    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-slate-200/70">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 ring-1 ring-blue-100">
                          <svg width="22" height="22" viewBox="0 0 24 24" className="text-blue-600">
                            <path
                              fill="currentColor"
                              d="M7 2h10v2h2v18H5V4h2V2Zm0 6h10V6H7v2Zm-1 4h12v8H6v-8Z"
                            />
                          </svg>
                        </div>
                        <div className="text-[16px] font-semibold text-slate-800">Upcoming Retest</div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Chip label="In 42 Days" tone="green" />
                        <Chevron />
                      </div>
                    </div>

                    {/* chart block */}
                    <div className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200/70">
                      <div className="flex items-center justify-between">
                        <div className="text-[13px] font-semibold text-slate-500">1 wk</div>
                        <div className="text-[13px] font-semibold text-slate-500">87 lbs</div>
                      </div>

                      <svg viewBox="0 0 360 90" className="mt-2 h-[70px] w-full">
                        <defs>
                          <linearGradient id="lineFade2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="rgba(37,99,235,0.25)" />
                            <stop offset="1" stopColor="rgba(37,99,235,0)" />
                          </linearGradient>
                        </defs>

                        <path d="M0 75H360" stroke="rgba(148,163,184,0.35)" strokeWidth="1" />
                        <path d="M0 50H360" stroke="rgba(148,163,184,0.22)" strokeWidth="1" />
                        <path d="M0 25H360" stroke="rgba(148,163,184,0.16)" strokeWidth="1" />

                        <path
                          d="M10 30 C70 26, 90 52, 140 48 C190 44, 220 55, 260 52 C300 49, 320 60, 350 56 L350 90 L10 90 Z"
                          fill="url(#lineFade2)"
                        />
                        <path
                          d="M10 30 C70 26, 90 52, 140 48 C190 44, 220 55, 260 52 C300 49, 320 60, 350 56"
                          fill="none"
                          stroke="rgba(37,99,235,0.95)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <circle cx="140" cy="48" r="5" fill="rgba(37,99,235,0.95)" />
                        <text x="148" y="45" fontSize="12" fill="rgba(37,99,235,0.95)" fontWeight="700">
                          92
                        </text>
                      </svg>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-slate-200/70">
                      <div className="flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
                          <span className="text-[14px] font-extrabold text-emerald-700">2</span>
                        </span>
                        <div className="text-[16px] font-semibold text-slate-800">Supplements Due</div>
                      </div>
                      <Chevron />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WATCH overlay — moved further left */}
<div className="pointer-events-none absolute -left-60 bottom-4 z-20 hidden lg:block">
  <Image
    src="/landing/test watch.png"
    alt="Watch"
    width={480}
    height={480}
    className="h-auto w-[420px] drop-shadow-[0_35px_80px_rgba(15,23,42,0.22)]"
    priority={false}
  />
</div>

            {/* PILL — single pill on the right edge like reference */}
            <div className="pointer-events-none absolute -right-10 bottom-16 z-10 hidden lg:block">
              <Image
                src="/landing/pill.png"
                alt="Pill"
                width={180}
                height={180}
                className="h-auto w-[140px] rotate-[8deg] drop-shadow-[0_18px_38px_rgba(15,23,42,0.18)]"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}