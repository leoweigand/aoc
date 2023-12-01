export function findCalibrationSum(input: string) {
  const lines = input.split("\n");

  return lines.reduce((acc, line) => {
    const chars = line.split("");
    const firstDigit = chars.find((char) => !Number.isNaN(Number(char)));
    const lastDigit = chars.findLast((char) => !Number.isNaN(Number(char)));
    const calibrationValue = `${firstDigit}${lastDigit}`;

    return acc + Number(calibrationValue);
  }, 0);
}
