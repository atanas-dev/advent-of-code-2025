// We're using an object for readability - using a [number, number] tuple instead would be more efficient.
type Battery = { position: number; joltage: number };

// This also solves Day 3 Part 2
export function run(steps: number[][]) {
  const batteriesToPick = 12;
  // Prefill our battery picks for easier access later.
  const picked: Battery[][] = steps.map((_) =>
    [...Array(batteriesToPick)].map((_) => ({ position: -1, joltage: -1 }))
  );

  for (let i = 0; i < steps.length; i++) {
    const batteries = steps[i];

    let batteryNumber = 0;
    let position = 0;

    while (batteryNumber < batteriesToPick && position < batteries.length) {
      // For simplicity's sake, we are going to assume there are always enough batteries to pick.
      // Make sure we have enough batteries left for the rest of our digits.
      const maxPosition = batteries.length - batteriesToPick + batteryNumber;

      if (batteries[position] > picked[i][batteryNumber].joltage) {
        picked[i][batteryNumber].position = position;
        picked[i][batteryNumber].joltage = batteries[position];
      }

      // We've reached the maximum position for the current battery, so we need to move to picking the next battery
      // starting from the position of our last highest battery.
      const reachedLastAvailableBattery = position + 1 > maxPosition;
      // We can move on to the next battery the first time we find our highest single digit which is 9.
      const reachedHighestPossibleJoltage =
        picked[i][batteryNumber].joltage === 9;

      if (reachedLastAvailableBattery || reachedHighestPossibleJoltage) {
        position = picked[i][batteryNumber].position;
        batteryNumber++;
      }

      position++;
    }
  }

  return picked.reduce(
    (sum, row, index) =>
      sum +
      parseInt(row.map((battery) => battery.joltage.toString()).join("")),
    0,
  );
}

if (import.meta.main) {
  const input = await Deno.readTextFile("./day-3.input.txt");
  const steps = input.trim()
    .split("\n")
    .map((v) => v.split(""))
    .map((v) => v.map((v) => parseInt(v)));

  console.log(run(steps));
}
