"use client";

import React from "react";
import Image from "next/image";
import DashboardMockup from "./DashboardMockup";

// ─── Trust Badge Icons ────────────────────────────────────────────────────────

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" stroke="#1E5EFF" strokeWidth="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" stroke="#1E5EFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function StethoscopeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.8 2.3A.3.3 0 014.5 2h-1a.3.3 0 00-.3.3v3.4C3.2 7 4 8 5 8s1.8-1 1.8-2.3V2.3zM15 11a4 4 0 100 8 4 4 0 000-8z"
        stroke="#1E5EFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 8c0 4 2.5 7 7 7"
        stroke="#1E5EFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 3v18h18"
        stroke="#1E5EFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 16l4-6 4 4 4-7"
        stroke="#1E5EFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Trust Indicator ─────────────────────────────────────────────────────────

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue-light flex-shrink-0">
        {icon}
      </span>
      <span className="text-[11px] font-semibold text-brand-gray-mid whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

// ─── CTA Buttons ─────────────────────────────────────────────────────────────

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="
        inline-flex items-center justify-center gap-2
        bg-brand-red hover:bg-brand-red-dark
        text-white font-semibold text-[15px]
        px-7 py-3.5 rounded-xl
        shadow-btn
        transition-all duration-200
        hover:shadow-lg hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2
        w-full sm:w-auto
      "
      aria-label="Start with a health test"
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="
        inline-flex items-center justify-center gap-2
        bg-white hover:bg-brand-blue-light
        text-brand-blue font-semibold text-[15px]
        px-7 py-3.5 rounded-xl
        border-2 border-brand-blue
        transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
        w-full sm:w-auto
      "
      aria-label="Shop supplements"
    >
      {children}
    </button>
  );
}

// ─── Dog Image with Overlap ───────────────────────────────────────────────────

function DogImage() {
  return (
    <div
      className="
        absolute -right-6 -bottom-8
        w-[140px] h-[140px]
        lg:w-[160px] lg:h-[160px]
        rounded-2xl overflow-hidden
        shadow-dog border-4 border-white
        z-10
      "
      aria-hidden="true"
    >
      {/* Using a placeholder golden retriever image from unsplash */}
      <Image
        src="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=320&h=320&fit=crop&crop=face"
        alt="Golden retriever dog named Max"
        fill
        className="object-cover"
        sizes="160px"
        priority
      />
      {/* Soft edge overlay */}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
    </div>
  );
}

// ─── Floating Stat Badge ──────────────────────────────────────────────────────

function FloatingBadge({
  emoji,
  label,
  value,
  className,
}: {
  emoji: string;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`
        absolute bg-white rounded-xl px-3 py-2 shadow-card border border-brand-gray-border
        flex items-center gap-2 z-20
        ${className}
      `}
    >
      <span className="text-base leading-none">{emoji}</span>
      <div>
        <p className="text-[10px] font-medium text-brand-gray-mid leading-none">{label}</p>
        <p className="text-xs font-bold text-brand-dark mt-0.5">{value}</p>
      </div>
    </div>
  );
}

// ─── Pill Badge (top of headline) ────────────────────────────────────────────

function PillBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-brand-blue-light text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full border border-brand-blue/20 mb-6 animate-fade-in-up">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
      Veterinary-Informed Platform
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-gradient-to-br from-[#EEF5FF] via-[#F4F8FF] to-[#F8FAFC]
      "
      aria-label="PetNova Health Hero"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-blue/5 -translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-blue/5 translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-brand-green/3 blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Main container */}
      <div className="relative max-w-container mx-auto px-6 md:px-8 py-24 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

          {/* ── LEFT COLUMN ───────────────────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left max-w-[600px] mx-auto lg:mx-0">

            {/* Pill badge */}
            <PillBadge />

            {/* Main headline */}
            <h1
              className="
                text-[2.6rem] md:text-[3.25rem] lg:text-[3.5rem]
                font-extrabold leading-[1.08] tracking-tight
                text-brand-dark
                mb-6
                animate-fade-in-up-d1
              "
            >
              The Operating System
              <br />
              <span className="text-brand-blue">for Preventive</span>
              <br />
              Pet Health.
            </h1>

            {/* Subheadline */}
            <p
              className="
                text-[1.05rem] md:text-lg text-brand-gray-mid
                leading-relaxed
                max-w-[520px] mx-auto lg:mx-0
                mb-9
                animate-fade-in-up-d2
              "
            >
              Centralized health records. Personalized diagnostics.
              Intelligent care plans. Ongoing monitoring — all in one
              secure platform.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                flex flex-col sm:flex-row gap-4 justify-center lg:justify-start
                mb-8
                animate-fade-in-up-d2
              "
            >
              <PrimaryButton>Start With a Health Test</PrimaryButton>
              <SecondaryButton>Shop Supplements</SecondaryButton>
            </div>

            {/* Trust indicators */}
            <div
              className="
                flex flex-wrap items-center gap-x-5 gap-y-2.5
                justify-center lg:justify-start
                animate-fade-in-up-d3
              "
            >
              <TrustBadge icon={<LockIcon />} text="Secure &amp; Encrypted" />
              {/* Dot separator */}
              <span className="hidden sm:block w-1 h-1 rounded-full bg-brand-gray-border" aria-hidden="true" />
              <TrustBadge icon={<StethoscopeIcon />} text="Veterinary-Informed" />
              <span className="hidden sm:block w-1 h-1 rounded-full bg-brand-gray-border" aria-hidden="true" />
              <TrustBadge icon={<ChartIcon />} text="Data-Driven Insights" />
            </div>

            {/* Social proof numbers */}
            <div className="hidden lg:flex items-center gap-8 mt-10 pt-8 border-t border-brand-gray-border animate-fade-in-up-d3">
              {[
                { val: "50K+", label: "Pets Monitored" },
                { val: "98%", label: "Owner Satisfaction" },
                { val: "200+", label: "Vet Partners" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <p className="text-2xl font-extrabold text-brand-dark">{val}</p>
                  <p className="text-xs text-brand-gray-mid font-medium mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ──────────────────────────────────────────── */}
          <div className="flex-1 w-full flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative w-full max-w-[420px]">

              {/* Floating badges */}
              <FloatingBadge
                emoji="✅"
                label="Latest Checkup"
                value="All Clear"
                className="-top-5 -left-4 lg:-left-10"
              />
              <FloatingBadge
                emoji="💊"
                label="Supplement Adherence"
                value="85%"
                className="-top-5 right-4"
              />

              {/* Dashboard mockup */}
              <div className="relative animate-scale-in">
                <DashboardMockup />
                {/* Dog image overlapping bottom-right */}
                <DogImage />
              </div>

              {/* Bottom floating badge */}
              <FloatingBadge
                emoji="🔔"
                label="Next Retest"
                value="In 3 Months"
                className="-bottom-4 left-4"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
