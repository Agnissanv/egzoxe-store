const NBSP = ' ';

/** 16875 → « 16 875 F » (espaces insécables, jamais « CFA16875 »). */
export function formatPrice(amount: number): string {
  const digits = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
  return `${digits}${NBSP}F`;
}

/** Lien WhatsApp avec message pré-rempli. */
export function waLink(number: string, text?: string): string {
  return text ? `https://wa.me/${number}?text=${encodeURIComponent(text)}` : `https://wa.me/${number}`;
}

/** Un texte entièrement entre crochets est une information manquante. */
export function isTodo(text: string): boolean {
  return /^\[.*\]$/.test(text.trim());
}
