import { describe, expect, test } from "@jest/globals";

import foo from "../app";

describe("Given a foo function", () => {
  describe("When something happen", () => {
    test("Then this happen", () => {
      const result = foo();

      expect(result).toBe(undefined);
    });
  });
});
