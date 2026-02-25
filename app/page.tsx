import HeroSection from "@/components/HeroSection";

// ─── Navbar ───────────────────────────────────────────────────────────────────

function PawIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {/* Toes */}
      <ellipse cx="16" cy="14" rx="7" ry="9" fill="#1E5EFF" />
      <ellipse cx="32" cy="9" rx="7" ry="9" fill="#1E5EFF" />
      <ellipse cx="48" cy="14" rx="7" ry="9" fill="#1E5EFF" />
      {/* Main pad */}
      <ellipse cx="32" cy="38" rx="16" ry="18" fill="#1E5EFF" />
      {/* Left side pad */}
      <ellipse cx="14" cy="32" rx="8" ry="10" fill="#1E5EFF" />
      {/* Right side pad */}
      <ellipse cx="50" cy="32" rx="8" ry="10" fill="#1E5EFF" />
    </svg>
  );
}

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 md:px-10 py-4">
      <div className="max-w-container mx-auto flex items-center">
        <div className="flex items-center gap-2">
          <PawIcon />
          <span className="text-[1.25rem] font-extrabold tracking-tight">
            <span className="text-brand-dark">Pet</span>
            <span className="text-brand-red">Nova</span>
          </span>
        </div>
      </div>
    </nav>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
}
