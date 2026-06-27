import config from "./config";

export function add(a: number, b: number): number {
  if (config.debug) {
    console.log(`Adding ${a} and ${b} equals ${a + b}`);
  }

  return a + b;
}
