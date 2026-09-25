import { MessageCircle } from "lucide-react";
import { defaultWhatsAppLink } from "@/lib/whatsapp";
export function FloatingWhatsApp() { return <a href={defaultWhatsAppLink} target="_blank" rel="noreferrer" aria-label="Chat with Jackie on WhatsApp" className="fixed bottom-7 right-5 z-40 hidden items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-sm font-extrabold text-white shadow-xl shadow-[#25d366]/25 transition hover:-translate-y-1 hover:bg-[#1fbd5a] lg:flex"><MessageCircle size={19} />Chat with Jackie</a>; }

