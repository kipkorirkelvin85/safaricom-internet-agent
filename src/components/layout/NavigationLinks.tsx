"use client";

import { useEffect, useState } from "react";

const links = [["Home", "#home"], ["Packages", "#packages"], ["Fibre & 5G", "#fibre-5g"], ["Coverage", "#coverage"], ["Contact", "#contact"]] as const;

export function NavigationLinks({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const [active, setActive] = useState(() => typeof window !== "undefined" && window.location.hash ? window.location.hash : "#home");

  useEffect(() => {
    const updateFromHash = () => { if (links.some(([, href]) => href === window.location.hash)) setActive(window.location.hash); };
    const sections = links.map(([, href]) => document.querySelector(href)).filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-32% 0px -55%", threshold: [0.1, 0.35, 0.7] });
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", updateFromHash);
    return () => { observer.disconnect(); window.removeEventListener("hashchange", updateFromHash); };
  }, []);

  return <nav aria-label={mobile ? "Mobile navigation" : "Main navigation"} className={mobile ? "mx-auto flex max-w-7xl flex-col" : "hidden items-center gap-7 lg:flex"}>
    {links.map(([label, href]) => <a key={href} href={href} aria-current={active === href ? "page" : undefined} onClick={() => { setActive(href); onNavigate?.(); }} className={`relative bg-transparent text-[#087a38] transition-colors duration-200 hover:bg-transparent hover:text-[#00a651] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00a651]/25 ${mobile ? "border-b border-[#ccebd8] py-4 text-sm font-semibold last:border-0" : "py-2 text-sm font-semibold"} ${active === href ? "bg-transparent font-bold text-[#00a651] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-[#00a651] after:content-['']" : ""}`}>{label}</a>)}
  </nav>;
}
