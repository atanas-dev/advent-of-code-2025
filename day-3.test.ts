import { assertEquals } from "@std/assert";
import { run } from "./day-3.ts";

function strToDigitArray(str: string): number[] {
  return str.split("").map((v) => parseInt(v));
}

Deno.test(function day3part1() {
  assertEquals(
    run([
      strToDigitArray(
        "3433224132322232224331231232231222332222224131333331131333222223422234232214231522223253221331123231",
      ),
    ]),
    55,
  );
  assertEquals(
    run([
      strToDigitArray(
        "1922212223234412221222222222122121232144128334222232222321211222322222224122212241432141222221224212",
      ),
    ]),
    98,
  );
});
