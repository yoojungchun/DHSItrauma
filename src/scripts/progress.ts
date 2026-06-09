/**
 * Reading progress tracker.
 *
 * Each reading checkbox carries `data-reading="<id>"`. Checked ids are persisted
 * to localStorage so progress survives reloads. The sticky-nav progress bar and
 * the textual "n / total" counter update live as boxes are toggled.
 *
 * Pure DOM — no framework. Progressive enhancement: without JS the checkboxes
 * still render and toggle, they just don't persist.
 */

const STORAGE_KEY = 'trauma-plot:progress:v1';

type Store = Record<string, true>;

function read(): Store {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Store;
  } catch {
    return {};
  }
}

function write(store: Store): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    /* storage unavailable (private mode / quota) — fail silently */
  }
}

function init(): void {
  const boxes = Array.from(
    document.querySelectorAll<HTMLInputElement>('input[data-reading]'),
  );
  if (boxes.length === 0) return;

  const store = read();
  const total = boxes.length;

  const bar = document.querySelector<HTMLElement>('[data-progress-bar]');
  const countDone = document.querySelector<HTMLElement>('[data-progress-done]');
  const countTotal = document.querySelector<HTMLElement>('[data-progress-total]');
  const pct = document.querySelector<HTMLElement>('[data-progress-pct]');

  if (countTotal) countTotal.textContent = String(total);

  function refresh(): void {
    const done = boxes.filter((b) => b.checked).length;
    const ratio = total === 0 ? 0 : done / total;
    if (bar) bar.style.transform = `scaleX(${ratio})`;
    if (countDone) countDone.textContent = String(done);
    if (pct) pct.textContent = `${Math.round(ratio * 100)}%`;
  }

  for (const box of boxes) {
    const id = box.dataset.reading!;
    box.checked = store[id] === true;
    box.addEventListener('change', () => {
      const current = read();
      if (box.checked) current[id] = true;
      else delete current[id];
      write(current);
      refresh();
    });
  }

  refresh();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
