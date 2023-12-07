import { isPrimeNumber } from "../functions/u6-isPrimeNumber";

describe("isPrimeNumber tests", () => {
  it("should return false for 0", () => {
    const actualResult = isPrimeNumber(0);
    expect(actualResult).toBe(false);
  });
  it("should return false for 1", () => {
    const actualResult = isPrimeNumber(1);
    expect(actualResult).toBe(false);
  });
  it("should return true for 2", () => {
    const actualResult = isPrimeNumber(2);
    expect(actualResult).toBe(true);
  });
  it("should return true for 3", () => {
    const actualResult = isPrimeNumber(3);
    expect(actualResult).toBe(true);
  });
  it("should return false for 4", () => {
    const actualResult = isPrimeNumber(4);
    expect(actualResult).toBe(false);
  });
  it("should return true for 5", () => {
    const actualResult = isPrimeNumber(5);
    expect(actualResult).toBe(true);
  });
});
