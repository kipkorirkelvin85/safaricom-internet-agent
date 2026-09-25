import { Check } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const fibrePackages = [
  {
    name: "BRONZE",
    speed: "40 Mbps",
    price: "2,999",
    theme: "bronze",
    benefits: ["Ideal for Small Households with Moderate Usage", "Smooth SD Streaming", "Reliable Browsing & Social Media", "Light Online Gaming"],
  },
  {
    name: "SILVER",
    speed: "60 Mbps",
    price: "4,100",
    theme: "silver",
    benefits: ["Ideal for Medium Families / Multiple Devices", "HD/Full HD Streaming", "Faster Downloads", "Better WiFi Stability"],
  },
  {
    name: "GOLD",
    speed: "150 Mbps",
    price: "6,299",
    theme: "gold",
    benefits: ["Ideal for Small Households with Basic Smart Home Capabilities", "Supports Multiple Smart Devices", "Clear HD/4K Streaming", "Fast Uploads for Remote Work"],
  },
  {
    name: "DIAMOND",
    speed: "500 Mbps",
    price: "12,499",
    theme: "diamond",
    benefits: ["Ideal for Power Users & Content Creators", "Zero-Lag Gaming", "Multiple 4K Streams", "Fast Content Uploads"],
  },
] as const;

function FibreCard({ fibrePackage }: { fibrePackage: (typeof fibrePackages)[number] }) {
  const message = `Hi Jackie, I'm interested in the ${fibrePackage.speed} ${fibrePackage.name[0] + fibrePackage.name.slice(1).toLowerCase()} Home Fibre package at KSh ${fibrePackage.price}. Please help me check coverage.`;

  return <a href={whatsappLink(message)} target="_blank" rel="noreferrer" className={`fibre-marquee-card fibre-marquee-${fibrePackage.theme}`}>
    <div className="fibre-card-label">{fibrePackage.name}</div>
    <div className="fibre-card-speed">{fibrePackage.speed}</div>
    <div className="fibre-card-price"><span>KSh</span><strong>{fibrePackage.price}</strong></div>
    <ul className="fibre-card-benefits">{fibrePackage.benefits.map((benefit) => <li key={benefit}><Check size={14} aria-hidden="true" />{benefit}</li>)}</ul>
  </a>;
}

function FibreCardSet() {
  return <div className="fibre-marquee-set">{fibrePackages.map((fibrePackage) => <FibreCard key={fibrePackage.name} fibrePackage={fibrePackage} />)}</div>;
}

export function FibreMarquee() {
  return <section id="packages" className="fibre-marquee" aria-label="Home Fibre packages"><div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10"><div className="mb-5"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#c4f4d2]">Home Fibre packages</p><p className="mt-1 text-sm text-white/75">Choose the speed that works for your home.</p></div><div className="fibre-marquee-viewport"><div className="fibre-marquee-track"><FibreCardSet /><div aria-hidden="true" className="shrink-0"><FibreCardSet /></div></div></div></div></section>;
}
