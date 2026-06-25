import { roundCurrency } from "./currency";
import { applyTax } from "./tax";
import { applyPercentDiscount } from "./discount";
import { validateLineItem, type LineItem } from "./validate";

export interface InvoiceInput {
  items: LineItem[];
  taxRate: number;
  discountPct: number;
}

/** Compute the subtotal of all line items (qty * unitPrice). */
export function subtotal(items: LineItem[]): number {
  return roundCurrency(
    items.reduce((sum, it) => {
      validateLineItem(it);
      return sum + it.quantity * it.unitPrice;
    }, 0),
  );
}

/** Build a final invoice total: subtotal -> discount -> tax. */
export function invoiceTotal(input: InvoiceInput): number {
  const base = subtotal(input.items);
  const discounted = applyPercentDiscount(base, input.discountPct);
  return applyTax(discounted, input.taxRate);
}
