export function run(steps: [string, string][]) {
  const invalidIds: number[] = [];
  let iterations = 0;

  for (let i = 0; i < steps.length; i++) {
    const end = parseInt(steps[i][1]);
    const start = parseInt(steps[i][0]);
    const length = steps[i][0].length;

    // A sequence cannot be longer than half the length as it needs to repeat at least twice.
    const maxSequenceLength = Math.max(Math.floor(length / 2), 1);
    const maxSequence = parseInt("9".repeat(maxSequenceLength));
    // A matching sequence can never have a digit lower than the digit in the same position in start.
    const sequenceFloors = steps[i][0].split("");
    // A matching sequence can never start with a digit lower than the first digit of start.
    let sequence = parseInt(sequenceFloors[0]);
    let sequenceString = sequence.toString();

    while (sequence <= maxSequence) {
      let guess = parseInt(
        sequenceString.repeat(sequenceString.length / length),
      );

      if (guess >= start && guess <= end) {
        invalidIds.push(guess);
      }

      let lastSequenceString = sequenceString;
      sequence++;
      sequenceString = sequence.toString();

      if (sequenceString.length > lastSequenceString.length) {
        console.log(
          sequence,
          sequenceString.length,
          sequenceFloors.slice(0, sequenceString.length).join("") +
            '0'.repeat(
                Math.max( 0, sequenceString.length - sequenceFloors.length ),
            ),
        );
        sequence = parseInt(
          sequenceFloors.slice(0, sequenceString.length).join("") +
            "0".repeat(
              Math.max(0, sequenceString.length - sequenceFloors.length),
            ),
        );

      }
      console.log(sequence);

      iterations++;
    }
  }

  console.log(invalidIds);
  console.log(iterations);
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
