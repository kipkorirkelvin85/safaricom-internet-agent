"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [["Home", "/", "#home"], ["Packages", "/packages", "#packages"], ["Internet Options", "/fibre-5g", "#fibre-5g"], ["Coverage", "/#coverage", "#coverage"], ["Contact", "/#contact", "#contact"]] as const;

export function NavigationLinks({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname();
  const routeActive = pathname === "/packages" ? "#packages" : pathname === "/fibre-5g" ? "#fibre-5g" : pathname === "/" ? "#home" : "#home";
  const [homeActive, setHomeActive] = useState(() => typeof window !== "undefined" && window.location.hash ? window.location.hash : "#home");
  const active = pathname === "/" ? homeActive : routeActive;

  useEffect(() => {
    const updateFromHash = () => { if (links.some(([, , section]) => section === window.location.hash)) setHomeActive(window.location.hash); };
    if (pathname !== "/") return undefined;
    const sections = links.map(([, , href]) => document.querySelector(href)).filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setHomeActive(`#${visible.target.id}`);
    }, { rootMargin: "-32% 0px -55%", threshold: [0.1, 0.35, 0.7] });
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", updateFromHash);
    return () => { observer.disconnect(); window.removeEventListener("hashchange", updateFromHash); };
  }, [pathname]);

  return <nav aria-label={mobile ? "Mobile navigation" : "Main navigation"} className={mobile ? "mx-auto flex max-w-7xl flex-col" : "hidden items-center gap-7 lg:flex"}>
    {links.map(([label, href, section]) => <a key={href} href={href} aria-current={active === section ? "page" : undefined} onClick={() => { if (pathname === "/") setHomeActive(section); onNavigate?.(); }} className={`relative bg-transparent text-[#087a38] transition-colors duration-200 hover:bg-transparent hover:text-[#00a651] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00a651]/25 ${mobile ? "border-b border-[#ccebd8] py-4 text-sm font-semibold last:border-0" : "py-2 text-sm font-semibold"} ${active === section ? "bg-transparent font-bold text-[#00a651] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-[#00a651] after:content-['']" : ""}`}>{label}</a>)}
  </nav>;
}
