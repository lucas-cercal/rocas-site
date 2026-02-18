export const WHATSAPP_NUMBER = "5541985318314";
export const WHATSAPP_DISPLAY = "+55 (41) 98531-8314";

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
