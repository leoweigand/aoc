import { findCalibrationSum } from "./solution";

const input = await Bun.file("./input.txt").text();
console.log(findCalibrationSum(input));
