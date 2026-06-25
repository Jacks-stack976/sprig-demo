export interface LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
}

/** Throw if a line item is structurally invalid. */
export function validateLineItem(item: LineItem): void {
  if (!item.description.trim()) throw new Error("Line item needs a description");
  if (item.quantity <= 0) throw new Error("Quantity must be positive");
  if (item.unitPrice < 0) throw new Error("Unit price cannot be negative");
}
