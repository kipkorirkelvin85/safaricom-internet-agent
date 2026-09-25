import { Check, MessageCircle } from "lucide-react";
import type { FibrePackage, FiveGPackage } from "@/lib/packages";
import { whatsappLink } from "@/lib/whatsapp";

export function FibrePlanCard({ fibrePackage }: { fibrePackage: FibrePackage }) {
  const message = `Hi Jackie, I'm interested in the ${fibrePackage.speed} ${fibrePackage.name[0] + fibrePackage.name.slice(1).toLowerCase()} Home Fibre package at KSh ${fibrePackage.price}. Please help me check coverage.`;
  return <article className={`package-fibre-card package-fibre-${fibrePackage.theme}`}><div className="package-plan-name">{fibrePackage.name}</div><div className="package-plan-speed">{fibrePackage.speed}</div><div className="package-plan-price"><span>KSh</span><strong>{fibrePackage.price}</strong><small>/ month</small></div><ul>{fibrePackage.benefits.map((benefit) => <li key={benefit}><Check size={15} aria-hidden="true" />{benefit}</li>)}</ul><a href={whatsappLink(message)} target="_blank" rel="noreferrer" className="package-plan-link"><MessageCircle size={16} />Choose {fibrePackage.name[0] + fibrePackage.name.slice(1).toLowerCase()}</a></article>;
}

export function FiveGPlanCard({ plan }: { plan: FiveGPackage }) {
  const message = `Hello Jackie, I am interested in the ${plan.speed} 5G Home Internet package at KSh ${plan.price} per month. Please help me check availability in my area.`;
  return <article className="package-5g-card"><div className="promo-speed">{plan.speed}</div><div className="promo-price"><span>KSh</span><strong>{plan.price}</strong></div><p>Availability depends on 5G coverage in your area.</p><a href={whatsappLink(message)} target="_blank" rel="noreferrer" className="package-5g-link"><MessageCircle size={16} />Check Availability</a></article>;
}

