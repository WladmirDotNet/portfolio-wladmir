import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("theme color tokens", () => {
  const globals = readFileSync("app/globals.css", "utf8");

  it("uses green primary and ring tokens in light and dark themes", () => {
    expect(globals).toContain("--primary: 142.1 76.2% 36.3%;");
    expect(globals).toContain("--ring: 142.1 70.6% 45.3%;");
    expect(globals).toContain("--primary: 142.1 70.6% 45.3%;");
    expect(globals).toContain("--ring: 142.1 76.2% 36.3%;");
  });

  it("uses green glow utilities", () => {
    expect(globals).toContain("box-shadow: 0 0 20px rgba(34, 197, 94, 0.45);");
    expect(globals).toContain("box-shadow: 0 0 30px rgba(74, 222, 128, 0.55);");
    expect(globals).toContain("box-shadow: 0 0 40px rgba(34, 197, 94, 0.75);");
  });

  it("does not keep old blue glow values", () => {
    expect(globals).not.toContain("rgba(59, 130, 246");
    expect(globals).not.toContain("rgba(96, 165, 250");
  });
});
