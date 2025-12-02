import { assertEquals } from "@std/assert";
import { run } from "./day-2.ts";

Deno.test(function day2part1() {
  assertEquals(run([["1", "1"]]), 0);
  assertEquals(run([["1", "9"]]), 0);
  assertEquals(run([["1", "10"]]), 0);
  assertEquals(run([["10", "22"]]), 11 + 22);
  assertEquals(run([["1", "1111"]]), 11 + 22 + 33 + 44 + 55 + 66 + 77 + 88 + 99 + 1010 + 1111);
  assertEquals(run([["12", "22"]]), 22);
  assertEquals(run([["101", "1111"]]), 1010 + 1111);
  assertEquals(run([["49", "86"]]), 55 + 66 + 77);
  assertEquals(run([["757", "1242"]]), 1010 + 1111 + 1212);
});
