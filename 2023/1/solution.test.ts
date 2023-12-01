import { test, expect } from "bun:test";
import {
  findCalibrationSum,
  findCalibrationSumWithNumberWords,
  numberToDigitWord,
} from "./solution";

test("part 1", () => {
  const example = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
  const expected = 142;

  expect(findCalibrationSum(example)).toBe(expected);
});

test("digit word conversion", () => {
  expect(numberToDigitWord("three")).toEqual(3);
  expect(numberToDigitWord("nine")).toEqual(9);
  expect(numberToDigitWord(45)).toEqual(45);
});

test("part 2", () => {
  const example = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
  const expected = 281;

  expect(findCalibrationSumWithNumberWords(example)).toBe(expected);
  expect(findCalibrationSumWithNumberWords("8oneightgp")).toBe(88);
});
