import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { BenefitStrip } from "@/components/home/BenefitStrip";
import { CoverageForm } from "@/components/home/CoverageForm";
import { Fibre5G } from "@/components/home/Fibre5G";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FibreMarquee } from "@/components/home/FibreMarquee";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PromoMarquee } from "@/components/home/PromoMarquee";

export default function Home() {
  return <><Header /><PromoMarquee /><main><Hero /><FibreMarquee /><BenefitStrip /><Fibre5G /><CoverageForm /><HowItWorks /><FinalCTA /></main><Footer /><FloatingWhatsApp /><MobileActionBar /></>;
}
