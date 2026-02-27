// components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="mt-6 flex items-center justify-between rounded-3xl border border-slate-200/70 bg-white/80 px-8 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur">
          
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src="/landing/logo.png"
                alt="PetNova"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              Pet<span className="text-red-600">Nova</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            <a href="#kits" className="text-base font-semibold text-slate-600 hover:text-slate-900">
              Test Kits
            </a>
            <a href="#careplans" className="text-base font-semibold text-slate-600 hover:text-slate-900">
              Care Plans
            </a>
            <a href="#supplements" className="text-base font-semibold text-slate-600 hover:text-slate-900">
              Supplements
            </a>
            <a href="#faq" className="text-base font-semibold text-slate-600 hover:text-slate-900">
              FAQ
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#kits"
              className="hidden rounded-2xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-[0_18px_40px_rgba(30,94,255,0.22)] transition hover:brightness-95 sm:inline-flex"
            >
              Get Started
            </a>
            <a
              href="#kits"
              className="inline-flex rounded-2xl bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-[0_18px_40px_rgba(229,57,53,0.22)] transition hover:brightness-95"
            >
              Start Test
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}