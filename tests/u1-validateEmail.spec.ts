import { validateEmail } from "../functions/u1-validateEmail";

describe("validateEmail tests", () => {
  it("should return true for valid email", () => {
    expect(validateEmail("nisse@telia.se")).toBe(true);
  });
  it("should return false for invalid email, missing nisse", () => {
    expect(validateEmail("@telia.se")).toBe(false);
  });

  it("should return false for invalid email, missing telia", () => {
    expect(validateEmail("nisse@.se")).toBe(false);

  });
  it("should return false for invalid email, missing telia.", () => {
    expect(validateEmail("nisse@se")).toBe(false);

  });
  it("should return false for invalid email, missing @ & .se", () => {
    expect(validateEmail("nissetelia")).toBe(false);
  });
  it("should return false for invalid emai, missing @", () => {
    expect(validateEmail("nissetelia.se")).toBe(false);
  });
  it("should return false for invalid email, missing se", () => {
    expect(validateEmail("nisse@telia.")).toBe(false);
  });

  it("should return false for invalid email, missing .se", () => {
    expect(validateEmail("nisse@telia")).toBe(false);
  });
});
