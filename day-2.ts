export function run(steps: [string, string][]) {
  const invalidIds: number[] = [];

  for (let i = 0; i < steps.length; i++) {
    const end = parseInt(steps[i][1]);
    let start = parseInt(steps[i][0]);
    let length = steps[i][0].length;

    // IDs with odd number of digits can never fulfill our requirements, so we cak skip these until the next order of magnitude.
    if (length % 2 !== 0) {
      start = Math.pow(10, length);
      length++;
    }

    let half = Math.floor(start / Math.pow(10, length / 2));
    let guess = parseInt(`${half}${half}`);

    while (guess <= end) {
      if (guess >= start) {
        invalidIds.push(parseInt(`${half}${half}`));
      }

      half++;
      guess = parseInt(`${half}${half}`);
    }
  }

  return invalidIds.reduce((sum, id) => sum + id, 0);
}

if (import.meta.main) {
  const input = await Deno.readTextFile("./day-2.input.txt");
  const steps = input.trim()
    .split(",")
    .map((v) => v.split("-"))
    .map((v) => [v[0] ?? "0", v[1] ?? "0"] as [string, string]);

  console.log(run(steps));
}
