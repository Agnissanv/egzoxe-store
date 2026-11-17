// Panier gardé dans le navigateur (localStorage). Aucun serveur.
// Format fixé dans docs/03 : clé egzoxe_cart_v1, éléments { id, variantId, qty }.
// Pour un forfait, id = identifiant du forfait et variantId = null.

export const CART_KEY = 'egzoxe_cart_v1';
export const MAX_QTY = 99;

export interface CartItem {
  id: string;
  variantId: string | null;
  qty: number;
}

function isItem(value: unknown): value is CartItem {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    (typeof v.variantId === 'string' || v.variantId === null) &&
    typeof v.qty === 'number' &&
    v.qty > 0
  );
}

export function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter(isItem) : [];
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]): void {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch {
    // Stockage bloqué (navigation privée) : le panier reste en mémoire pour cette page.
  }
  window.dispatchEvent(new CustomEvent('cart:change', { detail: items }));
}

const same = (a: CartItem, id: string, variantId: string | null) => a.id === id && a.variantId === variantId;

export function addToCart(id: string, variantId: string | null, qty = 1): void {
  const items = readCart();
  const existing = items.find((i) => same(i, id, variantId));
  if (existing) existing.qty = Math.min(MAX_QTY, existing.qty + qty);
  else items.push({ id, variantId, qty: Math.min(MAX_QTY, qty) });
  writeCart(items);
}

export function setQty(id: string, variantId: string | null, qty: number): void {
  const items = readCart()
    .map((i) => (same(i, id, variantId) ? { ...i, qty: Math.min(MAX_QTY, Math.max(0, qty)) } : i))
    .filter((i) => i.qty > 0);
  writeCart(items);
}

export function removeFromCart(id: string, variantId: string | null): void {
  writeCart(readCart().filter((i) => !same(i, id, variantId)));
}

export function clearCart(): void {
  writeCart([]);
}

export function cartCount(items = readCart()): number {
  return items.reduce((sum, i) => sum + i.qty, 0);
}
