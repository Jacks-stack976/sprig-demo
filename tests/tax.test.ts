import { describe, it, expect } from "vitest";
import { applyTax } from "../src/tax";

describe("applyTax", () => {
  it("adds the tax rate", () => {
    expect(applyTax(100, 0.08)).toBe(108);
  });
  it("rejects negative rates", () => {
    expect(() => applyTax(100, -0.1)).toThrow();
  });
});
