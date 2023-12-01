import { test, expect } from "bun:test";
import { findCalibrationSum } from "./solution";

test("works on test input", () => {
  const example = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
  const expected = 142;

  expect(findCalibrationSum(example)).toBe(expected);
});
