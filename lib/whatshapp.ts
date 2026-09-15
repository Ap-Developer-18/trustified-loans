// lib/whatsapp.ts
export function getWhatsAppLink(message?: string) {
  const phone = "919990533555"; // country code + number
  const defaultMessage =
    "Hi, I'm interested in learning more about loan options at Trustified Loans.";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${phone}?text=${text}`;
}
