// components/DashboardMockup.tsx
import React from "react";

function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-500">
      <path
        fill="currentColor"
        d="M12 22a2.5 2.5 0 0 0 2.45-2H9.55A2.5 2.5 0 0 0 12 22Zm7-6V11a7 7 0 1 0-14 0v5l-2 2v1h18v-1l-2-2Z"
        opacity="0.9"
      />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-500">
      <path
        fill="currentColor"
        d="M10 18a8 8 0 1 1 5.293-14.01A8 8 0 0 1 10 18Zm11 3-5.2-5.2 1.4-1.4L22.4 19.6 21 21Z"
        opacity="0.9"
      />
    </svg>
  );
}

function IconUser() {
  return (
    <div className="h-7 w-7 overflow-hidden rounded-full bg-slate-200 ring-2 ring-white">
      <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-300" />
    </div>
  );
}

function Badge({
  color,
  children,
}: {
  color: "yellow" | "green" | "blue";
  children: React.ReactNode;
}) {
  const map =
    color === "yellow"
      ? "bg-amber-50 text-amber-700 border-amber-100"
      : color === "green"
      ? "bg-emerald-50 text-emerald-700 border-emerald-100"
      : "bg-blue-50 text-blue-700 border-blue-100";

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${map}`}>
      {children}
    </span>
  );
}

export default function DashboardMockup() {
  return (
    <div className="relative rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-5">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50">
            <div className="h-4 w-4 rounded-full bg-blue-600 shadow-[0_6px_16px_rgba(30,94,255,0.35)]" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-slate-500">PetNova</p>
            <h3 className="text-sm font-extrabold text-slate-900">Max’s Health Overview</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <IconBell />
          <IconSearch />
          <IconUser />
        </div>
      </div>

      <div className="mt-4 border-t border-slate-100" />

      {/* Top cards */}
      <div className="grid gap-4 px-6 py-5 md:grid-cols-2">
        {/* Health Score */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
          <p className="text-xs font-semibold text-slate-500">Health Score</p>

          <div className="mt-4 flex items-center gap-5">
            {/* ring */}
            <div className="relative grid h-24 w-24 place-items-center rounded-full bg-white shadow-sm">
              <div className="absolute inset-0 rounded-full border-[8px] border-blue-100" />
              <div className="absolute inset-0 rounded-full border-[8px] border-transparent border-t-blue-600 border-r-blue-600 rotate-45" />
              <div className="absolute inset-0 rounded-full border-[8px] border-transparent border-l-red-500 rotate-[230deg]" />

              <div className="text-center">
                <div className="text-3xl font-extrabold text-slate-900">86</div>
                <div className="text-[11px] font-semibold text-slate-500">Good</div>
              </div>
            </div>

            {/* info */}
            <div className="flex-1 space-y-3">
              <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                <p className="text-[11px] font-semibold text-slate-500">Last Test</p>
                <p className="text-sm font-extrabold text-slate-900">08/12/2025</p>
              </div>
              <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                <p className="text-[11px] font-semibold text-slate-500">Next Retest</p>
                <p className="text-sm font-extrabold text-slate-900">In 3 Months</p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Care Plan */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-500">Active Care Plan</p>
            <Badge color="blue">On track</Badge>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-slate-500">Supplements</p>
                <p className="text-sm font-extrabold text-slate-900">3 Active</p>
              </div>
            </div>

            <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-slate-500">Adherence</p>
                <p className="text-xs font-extrabold text-slate-900">85%</p>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                <div className="h-2 w-[85%] rounded-full bg-blue-600" />
              </div>
            </div>

            <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
              <p className="text-[11px] font-semibold text-slate-500">Next Action</p>
              <p className="text-sm font-extrabold text-slate-900">Refill Omega-3 in 7 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="px-6 pb-6">
        <p className="text-xs font-semibold text-slate-500">Key Insights</p>

        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <p className="text-sm font-semibold text-slate-900">Elevated Liver Enzymes</p>
            </div>
            <Badge color="yellow">Moderate</Badge>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <p className="text-sm font-semibold text-slate-900">Healthy Kidney Function</p>
            </div>
            <Badge color="green">Normal</Badge>
          </div>
        </div>

        {/* Bottom mini cards */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-500">Supplements Due</p>
              <span className="text-xs font-semibold text-red-600">Today</span>
            </div>
            <p className="mt-1 text-sm font-extrabold text-slate-900">Omega-3: 2 softgels</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-500">Retest Reminder</p>
              <span className="text-xs font-semibold text-blue-600">Soon</span>
            </div>
            <p className="mt-1 text-sm font-extrabold text-slate-900">Retest recommended</p>
          </div>
        </div>
      </div>
    </div>
  );
}