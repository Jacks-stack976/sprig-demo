import { describe, it, expect } from "vitest";
import { subtotal, invoiceTotal } from "../src/invoice";

describe("invoice", () => {
  it("sums line items", () => {
    expect(
      subtotal([
        { description: "a", quantity: 2, unitPrice: 10 },
        { description: "b", quantity: 1, unitPrice: 5 },
      ]),
    ).toBe(25);
  });
  it("applies discount then tax", () => {
    // 25 -> -10% = 22.5 -> +8% = 24.3
    expect(
      invoiceTotal({
        items: [{ description: "a", quantity: 5, unitPrice: 5 }],
        taxRate: 0.08,
        discountPct: 0.1,
      }),
    ).toBe(24.3);
  });
});
