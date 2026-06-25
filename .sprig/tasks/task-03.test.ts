import { describe, it, expect } from "vitest";
import { formatEUR } from "../../src/currency";

describe("task-03 formatEUR", () => {
  it("formats euros", () => {
    // de-DE renders as "1.234,50 €"
    expect(formatEUR(1234.5)).toContain("1.234,50");
    expect(formatEUR(1234.5)).toContain("€");
  });
});
