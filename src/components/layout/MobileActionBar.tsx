import { MapPin, MessageCircle, Phone } from "lucide-react";
import { defaultWhatsAppLink, } from "@/lib/whatsapp";
import { phone } from "@/lib/site";

export function MobileActionBar() { return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-[#111122] px-2 py-2 shadow-[0_-8px_30px_rgba(17,17,34,0.18)] lg:hidden">
  <a href={`tel:${phone}`} className="flex flex-col items-center gap-1 rounded-lg py-2 text-[10px] font-bold text-white"><Phone size={18} className="text-[#8ce0af]" />Call</a>
  <a href={defaultWhatsAppLink} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 rounded-lg py-2 text-[10px] font-bold text-white"><MessageCircle size={18} className="text-[#8ce0af]" />WhatsApp</a>
  <a href="#coverage" className="flex flex-col items-center gap-1 rounded-lg py-2 text-[10px] font-bold text-white"><MapPin size={18} className="text-[#8ce0af]" />Coverage</a>
</div>; }

