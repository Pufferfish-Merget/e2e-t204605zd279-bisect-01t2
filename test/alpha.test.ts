import assert from "node:assert/strict";
import { test } from "node:test";
import { alpha } from "../src/util.js";

test("alpha returns 1", () => {
  assert.equal(alpha(), 1);
});
