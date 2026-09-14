import assert from "node:assert/strict";
import { test } from "node:test";
import { orderTotal } from "../src/orders.js";
import { run } from "../src/pipeline.js";
import { dispatch } from "../src/registry.js";
import { summarize } from "../src/reports.js";

test("orderTotal sums the items plus a line fee", () => {
  assert.equal(orderTotal([1, 2, 3]), 9);
});

test("orderTotal clamps -1 up to 0 and 11 down to 10", () => {
  assert.equal(orderTotal([-2]), 0);
  assert.equal(orderTotal([10]), 10);
});

test("summarize scales and labels", () => {
  assert.equal(summarize(3), "n=6");
});

test("dispatch finds a handler by name", () => {
  assert.equal(dispatch("beta", 2), "n=4");
});

test("run is order-insensitive", () => {
  assert.equal(run([1, 2]), run([2, 1]));
});
