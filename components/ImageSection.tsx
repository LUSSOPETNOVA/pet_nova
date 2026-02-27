// components/ImageSection.tsx
import Image from "next/image";
import clsx from "clsx";

export default function ImageSection({
  id,
  title,
  subtitle,
  imageSrc,
  flip = false,
  tint = false,
}: {
  id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  flip?: boolean;
  tint?: boolean;
}) {
  return (
    <section id={id} className={clsx("py-16 sm:py-20", tint && "bg-slate-50")}>
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={clsx(
            "grid items-center gap-8 lg:grid-cols-2",
            flip && "lg:[&>div:first-child]:order-2"
          )}
        >
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {subtitle}
              </p>
            ) : null}
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
              <Image
                src={imageSrc}
                alt={title}
                width={1400}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}