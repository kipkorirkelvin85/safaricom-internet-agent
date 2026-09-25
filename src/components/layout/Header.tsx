import { ArrowUpRight, Phone } from "lucide-react";
import { phone } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { NavigationLinks } from "./NavigationLinks";

export function Header() {
  return <header className="sticky top-0 z-40 border-b border-[#e5e7eb]/80 bg-white/90 backdrop-blur-xl">
    <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
      <a href="#home" className="flex items-center gap-3" aria-label="ConnectKenya home">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00a651] text-lg font-black text-white">C</span>
        <span><span className="block text-base font-black tracking-tight text-[#111122]">Connect<span className="text-[#00a651]">Kenya</span></span><span className="hidden text-[10px] font-semibold text-[#667085] sm:block">Home internet connection assistance</span></span>
      </a>
      <NavigationLinks />
      <div className="hidden items-center gap-4 lg:flex"><a href={`tel:${phone}`} className="flex items-center gap-2 text-sm font-bold text-[#111122]"><Phone size={17} className="text-[#00a651]" />{phone}</a><a href="#coverage" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#111122] px-4 text-sm font-bold text-white transition hover:bg-[#00a651]">Check Coverage <ArrowUpRight size={16} /></a></div>
      <MobileMenu />
    </div>
  </header>;
}
