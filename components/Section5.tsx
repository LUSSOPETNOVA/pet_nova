// components/Section5.tsx
import Image from "next/image";
import React from "react";

function FeatureCard({
  iconSrc,
  alt,
  title,
  desc,
  className = "",
  iconSize = 86,
}: {
  iconSrc: string;
  alt: string;
  title: string;
  desc: string;
  className?: string;
  iconSize?: number;
}) {
  return (
    <div
      className={[
        "w-full rounded-[18px] bg-white/70 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/80 backdrop-blur",
        className,
      ].join(" ")}
    >
      <div className="flex items-start gap-5">
        <Image
          src={iconSrc}
          alt={alt}
          width={iconSize}
          height={iconSize}
          className="h-[64px] w-[64px] object-contain"
          priority={false}
        />

        <div className="min-w-0">
          <div className="text-[18px] font-semibold leading-snug text-slate-900">
            {title}
          </div>
          <div className="mt-2 text-[15px] leading-relaxed text-slate-600">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Section5() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ===== Background (soft, across whole section) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6FAFF] to-[#EEF5FF]" />
        <div className="absolute -left-48 -top-40 h-[520px] w-[520px] rounded-full bg-[#DCEBFF]/60 blur-3xl" />
        <div className="absolute -right-56 -top-40 h-[620px] w-[620px] rounded-full bg-[#E7F1FF]/75 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[260px] w-full bg-gradient-to-t from-[#EAF2FF] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 py-20">
        {/* IMPORTANT: fixed right column so left can expand, matching reference */}
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_640px]">
          {/* ================= LEFT SIDE ================= */}
          <div>
            <h2 className="text-[42px] font-extrabold leading-tight text-[#2C69B7]">
              Comprehensive Diagnostics, Delivered to Your Door
            </h2>

            <p className="mt-5 max-w-[640px] text-lg text-slate-600">
              Identify your pet’s health markers in the comfort of your home with
              our easy-to-use test kits.
            </p>

            {/* Feature Layout: make right stack wider like reference */}
            <div className="mt-10 grid gap-8 lg:grid-cols-[360px_520px]">
              {/* ===== LEFT: Small card + button below ===== */}
              <div>
                <FeatureCard
                  iconSrc="/icons/easy-sample.png"
                  alt="Easy Sample Collection"
                  title="Easy Sample Collection"
                  desc="Simple swab & blood tests you can do at home."
                  iconSize={96}
                />

                <div className="mt-6">
                  <a
                    href="#kits"
                    className="inline-flex items-center justify-center rounded-xl bg-[#E53935] px-10 py-3 text-[16px] font-semibold text-white shadow-[0_16px_35px_rgba(229,57,53,0.28)] transition hover:brightness-95"
                  >
                    Shop Health Tests
                  </a>
                </div>
              </div>

              {/* ===== RIGHT: Stacked cards (wider / not skinny) ===== */}
              <div className="grid w-full gap-6">
                <FeatureCard
                  iconSrc="/icons/lab_verified.png"
                  alt="Lab-Verified Results"
                  title="Lab-Verified Results"
                  desc="Accurate analysis by professional diagnostic labs."
                  iconSize={96}
                  className="min-h-[150px]"
                />

                <FeatureCard
                  iconSrc="/icons/vet-insights.png"
                  alt="Veterinary Insights"
                  title="Veterinary Insights"
                  desc="Clear action plans based on expert findings."
                  iconSize={96}
                  className="min-h-[150px]"
                />
              </div>
            </div>

            <p className="mt-10 text-lg text-slate-600">
              Test core biomarkers for a science-backed understanding of your
              pet’s health.
            </p>
          </div>

          {/* ================= RIGHT ILLUSTRATION ================= */}
          <div className="relative w-full">
            {/* shift slightly right to match reference spacing */}
            <div className="relative mx-auto w-full max-w-[640px] lg:translate-x-6">
              <div className="pointer-events-none absolute -inset-12 rounded-[44px] bg-[#DCEBFF]/30 blur-3xl" />
              <Image
                src="/landing/section5.png"
                alt="Pet health test kit illustration"
                width={1200}
                height={900}
                className="relative h-auto w-full object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}