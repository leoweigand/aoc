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

export const numberToDigitWord = (searchWord: string | number) =>
  Number.isNaN(Number(searchWord))
    ? [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ].findIndex((digitWord) => digitWord === searchWord) + 1
    : Number(searchWord);

export function findCalibrationSumWithNumberWords(input: string) {
  const digitRegex = /one|two|three|four|five|six|seven|eight|nine|[0-9]/;
  const reverseDigitRegex =
    /enin|thgie|neves|xis|evif|ruof|eerht|owt|eno|[0-9]/;
  const lines = input.split("\n");

  return lines.reduce((acc, line) => {
    const firstDigit = numberToDigitWord(line.match(digitRegex)?.[0]!);
    // no way in JS to search right to left using a regex..
    const lastDigit = numberToDigitWord(
      (line.split("").reverse().join("").match(reverseDigitRegex)?.[0])!
        .split("")
        .reverse()
        .join(""),
    );
    const calibrationValue = `${firstDigit}${lastDigit}`;

    return acc + Number(calibrationValue);
  }, 0);
}
