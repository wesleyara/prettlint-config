import { describe, it, expect } from "vitest";

import { download, vsCodeSettings } from "../utils";

describe("package tests", () => {
  it("download files", async () => {
    expect(await download("commitlint.config.js")).toContain("module.exports");
  });

  it("vscode settings", async () => {
    expect(await vsCodeSettings()).toBe(true);
  });
});
