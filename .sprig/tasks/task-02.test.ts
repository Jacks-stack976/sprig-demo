import { describe, it, expect } from "vitest";
import { applyFlatDiscount } from "../../src/discount";

describe("task-02 applyFlatDiscount", () => {
  it("subtracts and floors at zero", () => {
    expect(applyFlatDiscount(50, 10)).toBe(40);
    expect(applyFlatDiscount(5, 10)).toBe(0);
  });
  it("rejects negative flat", () => {
    expect(() => applyFlatDiscount(50, -1)).toThrow();
  });
});
