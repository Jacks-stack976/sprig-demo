import { roundCurrency } from "./currency";

/**
 * Apply a tax rate (e.g. 0.08 for 8%) to a pre-tax amount.
 * Returns the tax-inclusive total, rounded to cents.
 */
export function applyTax(amount: number, rate: number): number {
  if (rate < 0) throw new Error("Tax rate cannot be negative");
  return roundCurrency(amount * (1 + rate));
}
