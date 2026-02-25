"use client";

import React from "react";
import Image from "next/image";

// ─── Header Icons ─────────────────────────────────────────────────────────────

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E5EFF" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BellNotifIcon() {
  return (
    <div className="relative">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" aria-hidden="true">
        <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
    </div>
  );
}

function InboxIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" aria-hidden="true">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchHeaderIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1E5EFF" strokeWidth="2.5" aria-hidden="true">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" aria-hidden="true">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Health Score Circle ──────────────────────────────────────────────────────

function HealthScoreCircle({ score }: { score: number }) {
  const r = 40;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0">
      {/* Circle */}
      <div className="relative w-[118px] h-[118px]">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Gray track */}
          <circle cx="50" cy="50" r={r} fill="none" stroke="#E5E7EB" strokeWidth="8" />
          {/* Solid blue inner fill */}
          <circle cx="50" cy="50" r="35" fill="#1E5EFF" />
          {/* Blue progress arc */}
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#1E5EFF"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        {/* Score label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[26px] font-extrabold text-white leading-none">{score}</span>
          <span className="text-[11px] font-semibold text-sky-300 mt-0.5">Good</span>
        </div>
      </div>
      {/* Health Score button */}
      <span className="px-4 py-1.5 bg-white border border-brand-gray-border rounded-full text-[12px] font-semibold text-brand-dark shadow-sm">
        Health Score
      </span>
    </div>
  );
}

// ─── Info Rows ────────────────────────────────────────────────────────────────

function InfoRow1() {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-brand-gray-border">
      <p className="text-[13px] text-brand-dark">
        <span className="text-brand-gray-mid">Last Test: </span>
        <span className="font-semibold">08/12/2025</span>
      </p>
      <ChevronRightIcon />
    </div>
  );
}

function InfoRow2() {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-brand-gray-border">
      <div>
        <p className="text-[13px] font-semibold text-brand-dark">Active Care Plan</p>
        <p className="text-[11px] text-brand-gray-mid mt-0.5">
          3 Supplements{" "}
          <span className="text-brand-gray-border mx-0.5">|</span>{" "}
          <span className="text-brand-blue font-semibold">85%</span> Adherence
        </p>
      </div>
      <ChevronRightIcon />
    </div>
  );
}

function InfoRow3() {
  return (
    <div className="flex items-center justify-between py-3.5">
      <p className="text-[13px] text-brand-dark">
        <span className="text-brand-gray-mid">Next Retest: </span>
        <span className="font-semibold text-brand-blue">In 3 Months</span>
      </p>
      <ChevronRightIcon />
    </div>
  );
}

// ─── Insight Row ──────────────────────────────────────────────────────────────

function InsightRow({
  label,
  status,
  statusLabel,
}: {
  label: string;
  status: "moderate" | "normal";
  statusLabel: string;
}) {
  const tagStyles = {
    moderate: "bg-amber-50 text-amber-700 border border-amber-200",
    normal: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };
  const dotStyles = {
    moderate: "bg-amber-400",
    normal: "bg-emerald-500",
  };

  return (
    <div className="flex items-center justify-between py-3.5 border-b border-brand-gray-border last:border-0">
      <div className="flex items-center gap-2.5">
        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${dotStyles[status]}`} />
        <span className="text-[13px] font-semibold text-brand-dark">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${tagStyles[status]}`}>
          {statusLabel}
        </span>
        <ChevronDownIcon />
      </div>
    </div>
  );
}

// ─── Bottom Cards ─────────────────────────────────────────────────────────────

function RedPillIcon({ size = 16 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full bg-red-100 flex-shrink-0"
      style={{ width: size + 4, height: size + 4 }}
    >
      <svg width={size - 2} height={size - 2} viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2.5">
        <path d="M10.5 20H7a5 5 0 010-10h3.5m3 0H17a5 5 0 010 10h-3.5m-4-5h8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CalendarBlueIcon({ size = 16 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-md bg-blue-100 flex-shrink-0"
      style={{ width: size + 4, height: size + 4 }}
    >
      <svg width={size - 2} height={size - 2} viewBox="0 0 24 24" fill="none" stroke="#1E5EFF" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CalendarGrayIcon({ size = 16 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-md bg-gray-100 flex-shrink-0"
      style={{ width: size + 4, height: size + 4 }}
    >
      <svg width={size - 2} height={size - 2} viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function BottomCard({
  icon,
  title,
  sub,
  subIcon,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  subIcon: React.ReactNode;
}) {
  return (
    <div className="flex-1 bg-white border border-brand-gray-border rounded-xl p-3 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[13px] font-bold text-brand-dark">{title}</span>
        </div>
        <ChevronRightIcon />
      </div>
      <div className="flex items-center gap-1.5">
        {subIcon}
        <span className="text-[11px] text-brand-gray-mid">{sub}</span>
      </div>
    </div>
  );
}

// ─── Main Dashboard Component ─────────────────────────────────────────────────

export default function DashboardMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-brand-gray-border/60 w-full max-w-[460px]">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-brand-gray-border">
        <div className="flex items-center gap-2">
          <HeartIcon />
          <p className="text-[13.5px]">
            <strong className="font-bold text-brand-dark">Max&apos;s Health </strong>
            <span className="font-normal text-brand-gray-mid">Overview</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <BellNotifIcon />
          <InboxIcon />
          <SearchHeaderIcon />
          {/* User avatar */}
          <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-brand-gray-border flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=56&h=56&fit=crop&crop=face"
              alt="User avatar"
              width={28}
              height={28}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Score + Info ────────────────────────────────────────────────── */}
      <div className="flex items-start gap-5 px-5 py-5">
        <HealthScoreCircle score={86} />
        <div className="flex-1 border-l border-brand-gray-border pl-5 self-stretch flex flex-col justify-center">
          <InfoRow1 />
          <InfoRow2 />
          <InfoRow3 />
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────────────────── */}
      <div className="border-t border-brand-gray-border mx-5" />

      {/* ── Key Insights ────────────────────────────────────────────────── */}
      <div className="px-5 pt-4 pb-3">
        <h4 className="text-[12px] font-bold text-brand-dark uppercase tracking-wider mb-1">
          Key Insights
        </h4>
        <InsightRow label="Elevated Liver Enzymes" status="moderate" statusLabel="Moderate" />
        <InsightRow label="Healthy Kidney Function" status="normal" statusLabel="Normal" />
      </div>

      {/* ── Bottom Cards ────────────────────────────────────────────────── */}
      <div className="flex gap-3 px-5 pb-5">
        <BottomCard
          icon={<RedPillIcon size={16} />}
          title="Supplements Due"
          sub="Omega-3: 2 Softgels Today"
          subIcon={<RedPillIcon size={14} />}
        />
        <BottomCard
          icon={<CalendarBlueIcon size={16} />}
          title="Retest Reminder"
          sub="Retest Recommended Soon"
          subIcon={<CalendarGrayIcon size={14} />}
        />
      </div>
    </div>
  );
}
