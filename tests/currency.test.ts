import { describe, it, expect } from "vitest";
import { roundCurrency, formatUSD } from "../src/currency";

describe("currency", () => {
  it("rounds half-up to two places", () => {
    expect(roundCurrency(1.005)).toBe(1.01);
    expect(roundCurrency(2.344)).toBe(2.34);
  });
  it("formats USD", () => {
    expect(formatUSD(1234.5)).toBe("$1,234.50");
  });
});
