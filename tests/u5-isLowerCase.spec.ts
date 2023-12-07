import { isLowerCase } from "../functions/u5-isLowerCase";

describe("isLowerCase test", () => {
  it("should return true for 'abc'", () => {
    expect(isLowerCase("abc")).toBe(true);
  });
  it("should return false for 'aBc'", () => {
    expect(isLowerCase("aBc")).toBe(false);
  });
  it("should return false for 'ABC'", () => {
    expect(isLowerCase("ABC")).toBe(false);
  });
  it("should return false for '123'", () => {
    expect(isLowerCase("123")).toBe(false);
  });
})

