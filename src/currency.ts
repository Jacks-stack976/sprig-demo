// Money helpers for the invoicing toolkit.
// Amounts are handled in whole cents internally to avoid float drift,
// then formatted for display at the edges.

/** Round a decimal amount to 2 places using half-up rounding. */
export function roundCurrency(amount: number): number {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

/** Format an amount as a USD string, e.g. 1234.5 -> "$1,234.50". */
export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(roundCurrency(amount));
}
