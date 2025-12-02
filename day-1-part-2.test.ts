import { assertEquals } from "@std/assert";
import { run } from "./day-1-part-2.ts";

Deno.test(function day1part2() {
  assertEquals(run(50, [40]), [90, 0]);
  assertEquals(run(50, [50]), [0, 1]);
  assertEquals(run(50, [60]), [10, 1]);
  assertEquals(run(50, [-40]), [10, 0]);
  assertEquals(run(50, [-50]), [0, 1]);
  assertEquals(run(50, [-60]), [90, 1]);

  assertEquals(run(1, [1]), [2, 0]);
  assertEquals(run(1, [2]), [3, 0]);
  assertEquals(run(1, [98]), [99, 0]);
  assertEquals(run(1, [99]), [0, 1]);

  assertEquals(run(1, [-1]), [0, 1]);
  assertEquals(run(1, [-2]), [99, 1]);
  assertEquals(run(1, [-98]), [3, 1]);
  assertEquals(run(1, [-99]), [2, 1]);

  assertEquals(run(99, [1]), [0, 1]);
  assertEquals(run(99, [10]), [9, 1]);
  assertEquals(run(99, [99]), [98, 1]);
  assertEquals(run(99, [101]), [0, 2]);
  assertEquals(run(99, [201]), [0, 3]);

  assertEquals(run(99, [-1]), [98, 0]);
  assertEquals(run(99, [-10]), [89, 0]);
  assertEquals(run(99, [-99]), [0, 1]);
  assertEquals(run(99, [-101]), [98, 1]);
  assertEquals(run(99, [-201]), [98, 2]);

  assertEquals(run(0, [0]), [0, 0]);
  assertEquals(run(0, [100]), [0, 1]);
  assertEquals(run(0, [200]), [0, 2]);

  assertEquals(run(0, [1]), [1, 0]);
  assertEquals(run(0, [10]), [10, 0]);
  assertEquals(run(0, [100]), [0, 1]);
  assertEquals(run(0, [101]), [1, 1]);
  assertEquals(run(0, [-1]), [99, 0]);
  assertEquals(run(0, [-10]), [90, 0]);
  assertEquals(run(0, [-100]), [0, 1]);
  assertEquals(run(0, [-101]), [99, 1]);

  assertEquals(run(0, [1, -1]), [0, 1]);
});
