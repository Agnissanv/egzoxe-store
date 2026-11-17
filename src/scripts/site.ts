// Chargé sur toutes les pages : compteur du panier, boutons « Ajouter au panier », message de confirmation.
import { addToCart, cartCount, CART_KEY } from './cart-store';

function updateBadges(): void {
  const count = cartCount();
  document.querySelectorAll<HTMLElement>('[data-cart-count]').forEach((el) => {
    el.textContent = String(count);
    el.hidden = count === 0;
  });
  document.querySelectorAll<HTMLElement>('[data-cart-link]').forEach((link) => {
    const sr = link.querySelector<HTMLElement>('[data-cart-sr]');
    if (sr) sr.textContent = count ? `${link.dataset.label}, ${count} ${link.dataset.items}` : link.dataset.label ?? '';
  });
}

let toastTimer: number | undefined;

function showToast(name: string): void {
  const toast = document.querySelector<HTMLElement>('[data-toast]');
  const text = toast?.querySelector<HTMLElement>('[data-toast-text]');
  if (!toast || !text) return;
  text.textContent = `${toast.dataset.added}${toast.dataset.sep}${name}`;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add('is-visible'));
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
    window.setTimeout(() => (toast.hidden = true), 250);
  }, 3500);
}

document.addEventListener('click', (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-add-to-cart]');
  if (!button) return;
  const { id, variant, name, qtySource } = button.dataset;
  if (!id) return;
  let qty = 1;
  if (qtySource) {
    const input = document.querySelector<HTMLInputElement>(qtySource);
    qty = Math.max(1, Math.min(99, Number(input?.value) || 1));
  }
  addToCart(id, variant || null, qty);
  showToast(name ?? '');
});

// Le bouton WhatsApp flottant ne doit jamais cacher un bouton d'action (docs/03) :
// s'il en recouvre un, il glisse sur le bord de l'écran (seule une languette reste visible).
const fab = document.querySelector<HTMLElement>('.wa-float');
const INTERACTIVE = 'button, a, input, select, textarea, summary, label';
let fabFrame = 0;

function checkFab(): void {
  fabFrame = 0;
  if (!fab) return;
  // Position « normale » du bouton (sans le décalage éventuel) : bas droite, 16 px des bords.
  const size = fab.offsetWidth;
  const right = document.documentElement.clientWidth - 16;
  const bottom = document.documentElement.clientHeight - 16;
  const r = { left: right - size, right, top: bottom - size, bottom, width: size, height: size };
  const points: [number, number][] = [
    [r.left + 4, r.top + 4],
    [r.right - 4, r.top + 4],
    [r.left + 4, r.bottom - 4],
    [r.right - 4, r.bottom - 4],
    [r.left + r.width / 2, r.top + r.height / 2],
  ];
  const covers = points.some(([x, y]) =>
    document.elementsFromPoint(x, y).some((el) => !fab.contains(el) && el.closest(INTERACTIVE) && !el.closest('.toast')),
  );
  fab.classList.toggle('is-tucked', covers);
}

// Vérification au plus toutes les 100 ms pendant le défilement (léger pour les petits téléphones).
function scheduleFab(): void {
  if (!fabFrame) fabFrame = window.setTimeout(checkFab, 100);
}

if (fab) {
  window.addEventListener('scroll', scheduleFab, { passive: true });
  window.addEventListener('resize', scheduleFab);
  fab.addEventListener('focus', () => fab.classList.remove('is-tucked'));
  scheduleFab();
}

window.addEventListener('cart:change', updateBadges);
window.addEventListener('storage', (event) => {
  if (event.key === CART_KEY) {
    updateBadges();
    window.dispatchEvent(new CustomEvent('cart:external'));
  }
});

updateBadges();
