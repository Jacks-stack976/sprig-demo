import { describe, it, expect } from "vitest";
import { lineTotal } from "../../src/invoice";

describe("task-01 lineTotal", () => {
  it("multiplies and rounds", () => {
    expect(lineTotal(3, 9.999)).toBe(30);
    expect(lineTotal(2, 10.005)).toBe(20.01);
  });
});
