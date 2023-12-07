import { makeHeading } from "../functions/u3-makeHeading";

describe("makeHeading tests", () => {
  it("should return an HTML header h1 from input", () => {
    const actualResult = makeHeading("Hello", 1);
    const expectedResult = "<h1>Hello</h1>";
    expect(actualResult).toStrictEqual
    (expectedResult);
  });
  it("should return an HTML header h2 from input", () => {
    const actualResult = makeHeading("Next level", 2);
    const expectedResult = "<h2>Next level</h2>";
    expect(actualResult).toBe(expectedResult);
  });

})
