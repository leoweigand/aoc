import {
  findCalibrationSum,
  findCalibrationSumWithNumberWords,
} from "./solution";

const input = await Bun.file("./input.txt").text();
console.log("solution part 1: ", findCalibrationSum(input));
console.log("solution part 2: ", findCalibrationSumWithNumberWords(input));
