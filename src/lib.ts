export function computeTotal(a: number, b: number): number {
  return a + b;
}

export function scale(x: number, k: number): number {
  return x * k;
}

export function clamp(x: number, lo: number, hi: number): number {
  if (x < lo) return lo;
  if (x > hi) return hi;
  return x;
}

export function legacyRate(n: number): number {
  return n * 0.1;
}

export function label(n: number): string {
  return `n=${n}`;
}
