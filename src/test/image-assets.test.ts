import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("Portable image assets", () => {
  const sources = ["src/routes/index.tsx", "src/routes/__root.tsx"].map((path) =>
    readFileSync(join(process.cwd(), path), "utf8"),
  );

  it("ships every referenced image in public/images", () => {
    const paths = sources.flatMap((source) =>
      Array.from(source.matchAll(/"(\/images\/[^"\s]+)"/g), (match) => match[1]).filter(
        (path): path is string => typeof path === "string",
      ),
    );
    expect(paths.length).toBeGreaterThan(0);
    for (const path of paths) {
      expect(existsSync(join(process.cwd(), "public", path)), path).toBe(true);
    }
  });

  it("does not depend on Lovable-hosted image pointers", () => {
    for (const source of sources) {
      expect(source).not.toContain(".asset.json");
      expect(source).not.toContain("/__l5e/assets-v1/");
    }
  });
});