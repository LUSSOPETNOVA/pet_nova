"use client";

import React from "react";
import Image from "next/image";
import DashboardMockup from "./DashboardMockup";

// ─── Trust Icons ──────────────────────────────────────────────────────────────

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartTrustIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      aria-label="PetNova Health Hero"
    >
      {/* ── Background: large blue blob on right ───────────────────────── */}
      <div
        className="absolute top-0 right-0 h-full w-[60%] -z-10 pointer-events-none"
        style={{
          background: "linear-gradient(160deg, #DBEAFE 0%, #EFF6FF 45%, #F0F9FF 100%)",
          borderRadius: "80px 0 0 80px",
        }}
        aria-hidden="true"
      />
      {/* ── Red accent blob lower-right ───────────────────────────────── */}
      <div
        className="absolute bottom-0 right-0 w-[320px] h-[320px] -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FECACA 0%, #FCA5A5 30%, transparent 70%)",
          transform: "translate(35%, 45%)",
        }}
        aria-hidden="true"
      />

      {/* ── Main container ───────────────────────────────────────────── */}
      <div className="relative max-w-container mx-auto px-6 md:px-10 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* ── LEFT COLUMN ──────────────────────────────────────────── */}
          <div className="w-full lg:w-[44%] text-center lg:text-left flex-shrink-0">

            {/* Headline */}
            <h1
              className="
                text-[2.5rem] md:text-[3.1rem] lg:text-[3.5rem]
                font-extrabold leading-[1.1] tracking-tight
                text-brand-dark mb-5
                animate-fade-in-up-d1
              "
            >
              The Operating System
              <br />
              <span className="text-brand-blue">for Preventive Pet Health.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="
                text-[1rem] md:text-[1.05rem] text-brand-gray-mid
                leading-relaxed max-w-[460px] mx-auto lg:mx-0
                mb-8 animate-fade-in-up-d2
              "
            >
              Centralized health records. Personalized diagnostics,
              <br className="hidden sm:block" />
              Intelligent care plans. Ongoing monitoring —
              <br className="hidden sm:block" />
              all in one platform.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                flex flex-col sm:flex-row gap-3 justify-center lg:justify-start
                mb-8 animate-fade-in-up-d2
              "
            >
              {/* Primary – Red */}
              <button
                type="button"
                className="
                  inline-flex items-center justify-center
                  bg-brand-red hover:bg-brand-red-dark
                  text-white font-bold text-[15px]
                  px-7 py-3.5 rounded-xl shadow-btn
                  transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5
                  focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2
                "
                aria-label="Start with a health test"
              >
                Start With a Health Test
              </button>

              {/* Secondary – Filled Blue */}
              <button
                type="button"
                className="
                  inline-flex items-center justify-center
                  bg-brand-blue hover:bg-blue-700
                  text-white font-bold text-[15px]
                  px-7 py-3.5 rounded-xl
                  transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
                  focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
                "
                aria-label="Shop supplements"
              >
                Shop Supplements
              </button>
            </div>

            {/* Trust indicators */}
            <div
              className="
                flex flex-wrap items-center gap-x-3 gap-y-2
                justify-center lg:justify-start
                text-brand-gray-mid text-[12.5px]
                animate-fade-in-up-d3
              "
            >
              <span className="flex items-center gap-1.5">
                <ShieldIcon />
                Secure &amp; Encrypted
              </span>
              <span className="text-brand-gray-border select-none">|</span>
              <span className="flex items-center gap-1.5">
                <HeartTrustIcon />
                Veterinary-Informed
              </span>
              <span className="text-brand-gray-border select-none">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon />
                Data-Driven Insights
              </span>
            </div>
          </div>

          {/* ── RIGHT COLUMN ─────────────────────────────────────────── */}
          <div className="flex-1 flex items-center justify-center lg:justify-end animate-fade-in-right">
            <div className="flex items-center">

              {/* Dashboard card */}
              <div className="relative z-10 flex-shrink-0 animate-scale-in">
                <DashboardMockup />
              </div>

              {/* Dog image – placed beside dashboard, overlapping right */}
              <div
                className="relative flex-shrink-0 -ml-10 z-0 rounded-2xl overflow-hidden shadow-dog"
                style={{ width: "260px", height: "460px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=520&h=920&fit=crop&crop=face"
                  alt="Happy golden retriever"
                  fill
                  className="object-cover object-top"
                  sizes="260px"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
