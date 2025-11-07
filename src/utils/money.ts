// src/utils/money.ts
export function isPerfectSplit(value: number, decimals = 2) {
  if (!Number.isFinite(value) || value <= 0) return false;
  const factor = Math.pow(10, decimals);
  // True se i centesimi sono 0 (tolleranza inclusa)
  return Math.round(value * factor) % factor === 0;
}