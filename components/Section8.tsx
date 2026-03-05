// components/Section8.tsx
import Image from "next/image";
import React from "react";

function CheckFeature({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
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
        <div className="mt-2 text-[16px] leading-relaxed text-slate-600">{desc}</div>
      </div>
    </div>
  );
}

function ProductCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaHref = "#supplements",
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  ctaHref?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] bg-white/70 p-5 shadow-[0_22px_55px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/70 backdrop-blur transition hover:shadow-[0_28px_75px_rgba(15,23,42,0.14)]">
      <div className="flex items-stretch gap-6">
        {/* left: product */}
        <div className="relative h-[140px] w-[140px] shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain drop-shadow-[0_16px_35px_rgba(15,23,42,0.14)]"
            sizes="140px"
            priority={false}
          />
        </div>

        {/* right: text + CTA */}
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            <div className="text-[26px] font-extrabold leading-tight text-slate-800">
              {title}
            </div>
            <div className="mt-2 text-[16px] text-slate-600">{subtitle}</div>
          </div>

          <div className="mt-5">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-2xl bg-[#E53935] px-8 py-3 text-[16px] font-semibold text-white shadow-[0_18px_45px_rgba(229,57,53,0.25)] transition group-hover:brightness-95"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* soft top sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/55 to-transparent" />
    </div>
  );
}

export default function Section8() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* background wash like your other sections */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F7FAFF] to-[#EAF2FF]" />
        <div className="absolute -left-56 -top-44 h-[520px] w-[520px] rounded-full bg-[#DCEBFF]/55 blur-3xl" />
        <div className="absolute -right-72 -top-36 h-[560px] w-[560px] rounded-full bg-[#E7F1FF]/70 blur-3xl" />

        {/* subtle wave */}
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
        {/* Heading (centered like reference) */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[44px] font-extrabold leading-tight text-[#2C69B7]">
            Shop Clinically-Proven Supplements
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[18px] leading-relaxed text-slate-600">
            Support your pet’s health with targeted supplements tailored to their needs.
          </p>
        </div>

        {/* Big frosted panel */}
        <div className="mt-12 rounded-[30px] bg-white/55 p-7 shadow-[0_30px_80px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/70 backdrop-blur">
          {/* Top features row */}
          <div className="grid gap-10 lg:grid-cols-3">
            <CheckFeature
              title="Veterinarian-Approved"
              desc="Expert-vetted for safety and efficacy."
            />
            <CheckFeature
              title="Science-Backed"
              desc="Clinically tested and proven."
            />
            <CheckFeature
              title="Tailored to Your Pet"
              desc="Custom recommendations for unique needs."
            />
          </div>

          {/* Product cards */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <ProductCard
              imageSrc="/landing/supp-omega.png"
              imageAlt="Omega-3 Fish Oil"
              title="Omega-3 Fish Oil"
              subtitle="For heart, joints & coat"
              ctaHref="#omega"
            />
            <ProductCard
              imageSrc="/landing/supp-joint.png"
              imageAlt="Joint Support Formula"
              title="Joint Support Formula"
              subtitle="Promotes mobility & joint health."
              ctaHref="#joint"
            />
            <ProductCard
              imageSrc="/landing/supp-detox.png"
              imageAlt="Core Detox Blend"
              title="Core Detox Blend"
              subtitle="For healthy liver function"
              ctaHref="#detox"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#all-supplements"
            className="inline-flex items-center justify-center rounded-2xl bg-[#E53935] px-14 py-4 text-[18px] font-semibold text-white shadow-[0_20px_55px_rgba(229,57,53,0.28)] transition hover:brightness-95"
          >
            Browse All Supplements
          </a>
        </div>
      </div>
    </section>
  );
}