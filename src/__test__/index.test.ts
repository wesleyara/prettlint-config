import { describe, it, expect } from "vitest";

import { download } from "../utils/download";

describe("package tests", () => {
  it("download files", async () => {
    expect(await download("commitlint.config.js")).toContain("module.exports");
  });
});
