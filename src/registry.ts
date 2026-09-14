import { label } from "./lib.js";

export type Handler = (n: number) => string;

export const handlers: Array<[string, Handler]> = [
  ["alpha", (n) => label(n)],
  ["beta", (n) => label(n * 2)],
];

export function dispatch(name: string, n: number): string {
  const found = handlers.find(([key]) => key === name);
  return found ? found[1](n) : "";
}
