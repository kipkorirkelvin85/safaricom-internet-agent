import { ArrowRight, RadioTower, Wifi } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function Fibre5G() {
  return <section id="fibre-5g" className="bg-[#111122] py-16 lg:py-20"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between lg:px-8"><div><SectionHeading eyebrow="Internet options" title="Fibre or 5G?" description="Learn how the two home internet options work before checking what is available in your area." light /><div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-white/70"><span className="inline-flex items-center gap-2"><Wifi size={16} className="text-[#8ce0af]" />Fixed Fibre connection</span><span className="inline-flex items-center gap-2"><RadioTower size={16} className="text-[#8ce0af]" />Wireless 5G option</span></div></div><a href="/fibre-5g" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#00a651] px-5 text-sm font-extrabold text-white transition hover:bg-[#087a38]">Compare Internet Options <ArrowRight size={17} /></a></div></section>;
}

