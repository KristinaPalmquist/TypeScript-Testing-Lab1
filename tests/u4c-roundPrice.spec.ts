import { roundPricePattern } from "../functions/u4-roundPrice";

describe("c. roundPrice tests", () => {
  it("c. should return 232.11 SEK for 232.10542 amount", () => {
    const actualResult = roundPricePattern(232.10542, "%PRICE% kr");
    const expectedResult = "232.11 kr";
    expect(actualResult).toBe(expectedResult);
  });
  it("c. should return 14.00 SEK for 14 amount", () => {
    const actualResult = roundPricePattern(14, "$%PRICE%");
    const expectedResult = "$14.00";
    expect(actualResult).toBe(expectedResult);
  });
  it("c. should return 1024.20 SEK for 1024.2048 amount", () => {
    const actualResult = roundPricePattern(1024.2048, "USD %PRICE%");
    const expectedResult = "USD 1024.20";
    expect(actualResult).toBe(expectedResult);
  });
});
