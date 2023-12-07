
import { validateZip } from "../functions/u2-validateZip";

describe("validateZip tests", () => {
  it("should return true for valid zip", () => {
    expect(validateZip("12345")).toBe(true);
  });
  it("should return false for zip with too few digits", () => {
    expect(validateZip("1234")).toBe(false);
  });

  it("should return false for zip with to many digits", () => {
    expect(validateZip("123456")).toBe(false);
  });
  it("should return false for zip including letters.", () => {
    expect(validateZip("abcde")).toBe(false);
  });
});
