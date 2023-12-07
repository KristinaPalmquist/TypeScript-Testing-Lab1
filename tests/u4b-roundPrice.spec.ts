import { roundPrice, roundPricePattern } from "../functions/u4-roundPrice";

describe("b. roundPrice tests", () => {
  it("b. should return 232.11 NOK for 232.10542 amount & NOK currency", () => {
    const actualResult = roundPrice(232.10542, "NOK");
    const expectedResult = "232.11 NOK";
    expect(actualResult).toBe(expectedResult);
  });
  it("b. should return 14.00 USD for 14 amount & USD currency", () => {
    const actualResult = roundPrice(14, "USD");
    const expectedResult = "14.00 USD";
    expect(actualResult).toBe(expectedResult);
  });
  it("b. should return 1024.20 SEK for 1024.2048 amount & SEK currency", () => {
    const actualResult = roundPrice(1024.2048, "SEK");
    const expectedResult = "1024.20 SEK";
    expect(actualResult).toBe(expectedResult);
  });
});
