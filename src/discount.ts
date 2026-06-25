import { roundCurrency } from "./currency";

/**
 * Apply a percentage discount (e.g. 0.1 for 10%) to an amount.
 * Returns the discounted amount, rounded to cents.
 */
export function applyPercentDiscount(amount: number, pct: number): number {
  if (pct < 0 || pct > 1) throw new Error("Discount pct must be between 0 and 1");
  return roundCurrency(amount * (1 - pct));
}
