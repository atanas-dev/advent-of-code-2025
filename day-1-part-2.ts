const numbers = 100;

export function run(start: number, steps: number[]) {
  let position = start;
  let zeroClicks = 0;

  for (let i = 0; i < steps.length; i++) {
    const leftover = steps[i] % numbers;

    zeroClicks += Math.floor(Math.abs(steps[i]) / numbers);

    if (position + leftover >= numbers) {
      zeroClicks++;
    }

    if (position + leftover <= 0 && position !== 0) {
      zeroClicks++;
    }

    position = (numbers + position + leftover) % numbers;
  }

  /*
  // This works too but I think it's uglier:
  for (let i = 0; i < steps.length; i++) {
    const move = position + steps[i];

    zeroClicks += Math.floor(Math.abs(move) / numbers) + (steps[i] !== 0 && position !== 0 && move <= 0 ? 1 : 0);

    position = (numbers + position + steps[i] % numbers) % numbers;
  }
  */

  return [position, zeroClicks];
}

if (import.meta.main) {
  const input = await Deno.readTextFile("./day-1.input.txt");
  const steps = input.trim().split("\n").map(
    (v) => parseInt(v.substring(1)) * (v.charAt(0) === "L" ? -1 : 1),
  );

  console.log(run(50, steps)[1]);
}
