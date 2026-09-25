import { whatsappNumber } from "./site";

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppLink = whatsappLink(
  "Hello Jackie, I would like help with home internet.",
);

