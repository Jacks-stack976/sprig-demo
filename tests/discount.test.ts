import { describe, it, expect } from "vitest";
import { applyPercentDiscount } from "../src/discount";

describe("applyPercentDiscount", () => {
  it("applies a percentage off", () => {
    expect(applyPercentDiscount(200, 0.1)).toBe(180);
  });
  it("rejects out-of-range pct", () => {
    expect(() => applyPercentDiscount(200, 1.5)).toThrow();
  });
});
