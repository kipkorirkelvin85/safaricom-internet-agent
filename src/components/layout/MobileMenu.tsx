"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteName } from "@/lib/site";
import { NavigationLinks } from "./NavigationLinks";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <div className="lg:hidden">
    <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg px-2 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#00a651] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00a651]/25">{open ? <X size={24} /> : "MENU"}</button>
    <div className={`absolute inset-x-0 top-full border-t border-[#e5e7eb] bg-white px-5 py-4 shadow-xl transition-all duration-200 ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
      <NavigationLinks mobile onNavigate={() => setOpen(false)} />
      <nav aria-label="Mobile navigation details" className="mx-auto flex max-w-7xl flex-col">
        <p className="pt-3 text-xs text-[#667085]">{siteName} · Home Internet Connection Assistance</p>
      </nav>
    </div>
  </div>;
}
