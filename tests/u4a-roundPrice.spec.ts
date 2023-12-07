import { roundPrice, roundPricePattern } from "../functions/u4-roundPrice";

describe("a. roundPrice tests", () => {
  it("a. should return 232.11 SEK for 232.10542 amount", () => {
    const actualResult = roundPrice(232.10542);
    const expectedResult = "232.11 SEK";
    expect(actualResult).toBe(expectedResult);
  });
  it("a. should return 14.00 SEK for 14 amount", () => {
    const actualResult = roundPrice(14);
    const expectedResult = "14.00 SEK";
    expect(actualResult).toBe(expectedResult);
  });
  it("a. should return 1024.20 SEK for 1024.2048 amount", () => {
    const actualResult = roundPrice(1024.2048);
    const expectedResult = "1024.20 SEK";
    expect(actualResult).toBe(expectedResult);
  });
});
