import assert from "node:assert/strict";
import { test } from "node:test";
import { handlers } from "../src/registry.js";

test("the registry holds the two seed handlers", () => {
  assert.equal(handlers.length, 2);
});
