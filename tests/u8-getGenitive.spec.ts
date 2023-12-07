import { getGenitive } from "../functions/u8-getGenitive";

describe("getGenitive tests", () => {
  it("should return name with 's' attached for genitive", () => {
    const actualResult = getGenitive("Jonatan");
    const expectedResult = "Jonatans";
    expect(actualResult).toStrictEqual(expectedResult);
  });
  it("should return name with 's' attached for genitive", () => {
    const actualResult = getGenitive("Anna");
    const expectedResult = "Annas";
    expect(actualResult).toStrictEqual(expectedResult);
  });
  it("should return name with 's' attached for genitive", () => {
    const actualResult = getGenitive("Claes");
    const expectedResult = "Claes";
    expect(actualResult).toStrictEqual(expectedResult);
  });
  it("should return name with 's' attached for genitive", () => {
    const actualResult = getGenitive("Hampus");
    const expectedResult = "Hampus";
    expect(actualResult).toStrictEqual(expectedResult);
  });
  it("should return name with 's' attached for genitive", () => {
    const actualResult = getGenitive("Johanna");
    const expectedResult = "Johannas";
    expect(actualResult).toStrictEqual(expectedResult);
  });
});
