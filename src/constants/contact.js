export const WHATSAPP_NUMBER = "5541997790123";
export const WHATSAPP_DISPLAY = "+55 (41) 99779-0123";

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
