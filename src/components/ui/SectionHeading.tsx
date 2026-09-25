type Props = { eyebrow?: string; title: string; description?: string; light?: boolean };

export function SectionHeading({ eyebrow, title, description, light = false }: Props) {
  return <div className="max-w-2xl">
    {eyebrow && <p className={`mb-3 text-xs font-extrabold uppercase tracking-[0.18em] ${light ? "text-[#8ce0af]" : "text-[#00a651]"}`}>{eyebrow}</p>}
    <h2 className={`text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl ${light ? "text-white" : "text-[#111122]"}`}>{title}</h2>
    {description && <p className={`mt-4 text-base leading-7 ${light ? "text-white/70" : "text-[#667085]"}`}>{description}</p>}
  </div>;
}

