export function run(xs: number[]): number {
  const factor = 2;
  let left = 0;
  for (const x of xs) {
    left += x * factor;
  }
  let right = 0;
  for (const x of xs) {
    right += x + 1;
  }
  const combined = left + right;
  let sink = 0;
  for (const x of xs) {
    sink += x * factor;
  }
  return combined + sink;
}
