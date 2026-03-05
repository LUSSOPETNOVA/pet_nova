// components/Section6.tsx
import Image from "next/image";

function FeatureRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/70 shadow-[0_14px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 backdrop-blur">
        {icon}
      </div>
      <div>
        <div className="text-[20px] font-semibold text-slate-800">{title}</div>
        <div className="mt-1 text-[16px] leading-relaxed text-slate-600">{desc}</div>
      </div>
    </div>
  );
}

function Chip({
  label,
  tone = "slate",
}: {
  label: string;
  tone?: "green" | "red" | "amber" | "slate";
}) {
  const tones: Record<string, string> = {
    green: "bg-emerald-100 text-emerald-700 ring-emerald-200/70",
    red: "bg-rose-100 text-rose-700 ring-rose-200/70",
    amber: "bg-amber-100 text-amber-800 ring-amber-200/70",
    slate: "bg-slate-100 text-slate-700 ring-slate-200/70",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[13px] font-medium ring-1 ${tones[tone]}`}
    >
      {label}
    </span>
  );
}

function CareRow({
  icon,
  label,
  chip,
  chipTone,
}: {
  icon: React.ReactNode;
  label: string;
  chip: string;
  chipTone?: "green" | "red" | "amber" | "slate";
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-slate-200/70">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 ring-1 ring-blue-100">
          {icon}
        </div>
        <div className="text-[16px] font-semibold text-slate-800">{label}</div>
      </div>

      <div className="flex items-center gap-3">
        <Chip label={chip} tone={chipTone ?? "slate"} />
        <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-400">
          <path
            fill="currentColor"
            d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Section6() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* background wash like reference */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F7FAFF] to-[#EAF2FF]" />
        <div className="absolute -left-56 -top-44 h-[520px] w-[520px] rounded-full bg-[#DCEBFF]/55 blur-3xl" />
        <div className="absolute -right-72 -top-36 h-[560px] w-[560px] rounded-full bg-[#E7F1FF]/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 220" className="h-[220px] w-full" preserveAspectRatio="none">
            <path
              d="M0,150 C240,120 420,190 720,150 C980,120 1140,70 1440,95 L1440,220 L0,220 Z"
              fill="#DDEBFF"
              opacity="0.75"
            />
            <path
              d="M0,170 C260,145 520,205 820,175 C1080,145 1200,100 1440,118 L1440,220 L0,220 Z"
              fill="#CFE2FF"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 py-20">
        {/* Heading */}
        <div className="max-w-[980px]">
          <h2 className="text-[44px] font-extrabold leading-tight text-[#2C69B7]">
            Personalized Recommendations &amp; Care Plans
          </h2>
          <p className="mt-4 text-[18px] text-slate-600">
            Expert advice and guidance tailored to your pet’s unique health profile.
          </p>
        </div>

        {/* Main card */}
        <div className="mt-10 rounded-[28px] bg-white/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/70 backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            {/* LEFT: mock care plan UI */}
            <div className="relative rounded-[24px] bg-white/70 p-6 ring-1 ring-slate-200/70">
              {/* small avatar + title */}
              <div className="flex items-center gap-4">
                {/* Replace this with your dog avatar if you have one */}
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-slate-200/70">
                  <Image
                    src="/icons/pet-avatar.png"
                    alt="Pet avatar"
                    fill
                    className="object-cover"
                    sizes="64px"
                    priority={false}
                  />
                </div>
                <div className="text-[28px] font-extrabold text-slate-700">Max’s Care Plan</div>
              </div>

              <div className="mt-5 h-px w-full bg-slate-200/80" />

              {/* supplements rows */}
              <div className="mt-5 space-y-3">
                <CareRow
                  icon={
                    <svg width="22" height="22" viewBox="0 0 24 24" className="text-blue-600">
                      <path
                        fill="currentColor"
                        d="M12 1 3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4Zm0 20c-4-1.2-7-5.3-7-9.6V6.3l7-3.1 7 3.1v5.1C19 15.7 16 19.8 12 21Z"
                      />
                    </svg>
                  }
                  label="Blu Novum Omega-3"
                  chip="Daily"
                  chipTone="green"
                />
                <CareRow
                  icon={
                    <svg width="22" height="22" viewBox="0 0 24 24" className="text-blue-600">
                      <path
                        fill="currentColor"
                        d="M12 2a7 7 0 0 0-7 7v5a4 4 0 0 0 4 4h1v-2H9a2 2 0 0 1-2-2V9a5 5 0 0 1 10 0v5a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V9a7 7 0 0 0-7-7Z"
                      />
                    </svg>
                  }
                  label="Joint Support Formula"
                  chip="Daily"
                  chipTone="red"
                />
              </div>

              {/* issues card */}
              <div className="mt-6 rounded-[22px] bg-white/70 p-5 ring-1 ring-slate-200/70">
                <div className="text-[16px] font-semibold text-slate-800">Blar Issue:</div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-amber-400" />
                      <span className="text-[16px] font-semibold text-slate-700">
                        Elevated Liver Enzymes
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Chip label="Moderate" tone="amber" />
                      <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-400">
                        <path
                          fill="currentColor"
                          d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41Z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                      <span className="text-[16px] font-semibold text-slate-700">
                        Healthy Kidney Function
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Chip label="Normal" tone="green" />
                      <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-400">
                        <path
                          fill="currentColor"
                          d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* meds illustration (optional) */}
              <div className="pointer-events-none absolute -left-6 bottom-6 hidden lg:block">
                <Image
                  src="/landing/section6-meds.png"
                  alt="Medication illustration"
                  width={210}
                  height={260}
                  className="h-auto w-[210px] object-contain drop-shadow-[0_26px_50px_rgba(15,23,42,0.18)]"
                />
              </div>
            </div>

            {/* RIGHT: feature list + CTA */}
            <div className="rounded-[24px] bg-white/45 p-6 ring-1 ring-slate-200/60">
              <div className="space-y-8">
                <FeatureRow
                  title="Actionable Insights"
                  desc="Understand and address critical health markers."
                  icon={
                    <svg width="26" height="26" viewBox="0 0 24 24" className="text-blue-600">
                      <path
                        fill="currentColor"
                        d="M9 21h6v-1H9v1Zm3-20a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.3A7 7 0 0 0 12 1Zm3 11.6-.6.4V16h-4.8v-3l-.6-.4A5 5 0 1 1 15 12.6Z"
                      />
                    </svg>
                  }
                />

                <FeatureRow
                  title="Custom Supplement Plan"
                  desc="Receive the right nutrients based on your pet’s needs."
                  icon={
                    <svg width="26" height="26" viewBox="0 0 24 24" className="text-blue-600">
                      <path
                        fill="currentColor"
                        d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 6h10V6H7v2Zm0 4h10v-2H7v2Zm0 4h7v-2H7v2Z"
                      />
                    </svg>
                  }
                />

                <FeatureRow
                  title="Routine Retesting"
                  desc="Adjust the plan based on regular retesting."
                  icon={
                    <svg width="26" height="26" viewBox="0 0 24 24" className="text-blue-600">
                      <path
                        fill="currentColor"
                        d="M7 2h10v2h2v18H5V4h2V2Zm0 6h10V6H7v2Zm2 5h2v2H9v-2Zm4 0h2v2h-2v-2Z"
                      />
                    </svg>
                  }
                />
              </div>

              <div className="mt-10 flex justify-center lg:justify-start">
                <a
                  href="#plan"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#E53935] px-10 py-4 text-[18px] font-semibold text-white shadow-[0_18px_45px_rgba(229,57,53,0.30)] transition hover:brightness-95"
                >
                  Get a Personalized Plan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* small bottom spacing like reference */}
        <div className="h-2" />
      </div>
    </section>
  );
}