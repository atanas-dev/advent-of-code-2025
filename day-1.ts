const numbers = 100;
const input = await Deno.readTextFile("./day-1.input.txt");
const steps = input.trim().split("\n").map(
  (v) => parseInt(v.substring(1)) * (v.charAt(0) === "L" ? -1 : 1),
);

let position = 50;
let zeroed = 0;

for (let i = 0; i < steps.length; i++) {
  position = (position + steps[i]) % numbers;

  if (position === 0) {
    zeroed++;
  }
}

console.log(zeroed);
