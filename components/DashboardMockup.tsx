import React from "react";

// ─── Tiny icon helpers (inline SVG to avoid external dependencies) ────────────

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
      <path
        d="M10.5 20H7a5 5 0 010-10h3.5m3 0H17a5 5 0 010 10h-3.5m-4-5h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
      <path
        d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Circular Health Score ───────────────────────────────────────────────────

function HealthScoreCircle({ score }: { score: number }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-[110px] h-[110px]">
        {/* Background track */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#E8F2FF"
            strokeWidth="8"
          />
          {/* Progress arc */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E5EFF" />
              <stop offset="100%" stopColor="#2ECC71" />
            </linearGradient>
          </defs>
        </svg>
        {/* Score label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-brand-dark leading-none">{score}</span>
          <span className="text-[10px] font-semibold text-brand-green uppercase tracking-wide mt-0.5">
            Good
          </span>
        </div>
      </div>
      <p className="text-xs text-brand-gray-mid font-medium">Health Score</p>
    </div>
  );
}

// ─── Info Card ───────────────────────────────────────────────────────────────

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}

function InfoCard({ icon, label, value, sub }: InfoCardProps) {
  return (
    <div className="bg-brand-gray rounded-xl px-3 py-2.5 flex flex-col gap-0.5 border border-brand-gray-border">
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-brand-blue-light">
          {icon}
        </span>
        <span className="text-[10px] font-semibold text-brand-gray-mid uppercase tracking-wide">
          {label}
        </span>
      </div>
      <span className="text-xs font-bold text-brand-dark leading-tight">{value}</span>
      {sub && <span className="text-[10px] text-brand-gray-mid">{sub}</span>}
    </div>
  );
}

// ─── Insight Row ─────────────────────────────────────────────────────────────

interface InsightRowProps {
  label: string;
  status: "moderate" | "normal" | "warning";
  statusLabel: string;
}

function InsightRow({ label, status, statusLabel }: InsightRowProps) {
  const tagStyles = {
    moderate: "bg-amber-50 text-amber-700 border border-amber-200",
    normal: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warning: "bg-red-50 text-red-600 border border-red-200",
  };

  const dotStyles = {
    moderate: "bg-amber-400",
    normal: "bg-brand-green",
    warning: "bg-red-500",
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-brand-gray-border last:border-0">
      <div className="flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[status]}`} />
        <span className="text-xs font-medium text-brand-dark">{label}</span>
      </div>
      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagStyles[status]}`}>
        {statusLabel}
      </span>
    </div>
  );
}

// ─── Mini Bottom Cards ────────────────────────────────────────────────────────

function MiniCard({
  icon,
  title,
  subtitle,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <div className="flex-1 bg-white border border-brand-gray-border rounded-xl p-2.5 flex items-center gap-2 shadow-sm">
      <span
        className={`w-8 h-8 rounded-lg ${accent} flex items-center justify-center flex-shrink-0`}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-bold text-brand-dark leading-tight truncate">{title}</p>
        <p className="text-[10px] text-brand-gray-mid leading-tight">{subtitle}</p>
      </div>
    </div>
  );
}

// ─── Main Dashboard Component ─────────────────────────────────────────────────

export default function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-card border border-brand-gray-border/60 p-5 w-full max-w-[400px] mx-auto">
        {/* Card header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-sm font-bold text-brand-dark">Max&apos;s Health Overview</h3>
            <p className="text-[11px] text-brand-gray-mid mt-0.5">Last updated: Aug 12, 2025</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-[10px] font-semibold text-brand-green">Active</span>
          </div>
        </div>

        {/* Score + Info cards row */}
        <div className="flex items-start gap-4 mb-5">
          <HealthScoreCircle score={86} />
          <div className="flex-1 grid grid-cols-1 gap-2">
            <InfoCard
              icon={<CalendarIcon />}
              label="Last Test"
              value="08/12/2025"
            />
            <InfoCard
              icon={<PillIcon />}
              label="Active Care Plan"
              value="3 Supplements"
              sub="85% Adherence"
            />
            <InfoCard
              icon={<ClockIcon />}
              label="Next Retest"
              value="In 3 Months"
            />
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-brand-gray-border mb-4" />

        {/* Key insights */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[11px] font-bold text-brand-dark uppercase tracking-wider">
              Key Insights
            </h4>
            <span className="text-[10px] text-brand-blue font-semibold cursor-pointer hover:underline">
              View All
            </span>
          </div>
          <div className="bg-brand-gray rounded-xl px-3 py-1 border border-brand-gray-border">
            <InsightRow
              label="Elevated Liver Enzymes"
              status="moderate"
              statusLabel="Moderate"
            />
            <InsightRow
              label="Healthy Kidney Function"
              status="normal"
              statusLabel="Normal"
            />
          </div>
        </div>

        {/* Mini cards row */}
        <div className="flex gap-2">
          <MiniCard
            icon={<PillIcon />}
            title="Supplements Due"
            subtitle="Today · 3 items"
            accent="bg-brand-blue-light"
          />
          <MiniCard
            icon={<BellIcon />}
            title="Retest Reminder"
            subtitle="In 3 months"
            accent="bg-amber-50"
          />
        </div>
      </div>

      {/* Decorative glow behind card */}
      <div className="absolute -inset-4 rounded-3xl bg-brand-blue/5 blur-2xl -z-10 pointer-events-none" />
    </div>
  );
}
