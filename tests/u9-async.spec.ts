import { getUsers, getGroups } from "../functions/u9-async";
import { getGroupsResponse, getUsersResponse } from "../responses/getResponses";

describe("getUsers tests", () => {
  it("should return array with 6 users", async () => {
    const actualResult = await getUsers();
    const expectedResult = getUsersResponse;
    expect(actualResult).toStrictEqual(expectedResult);
  });
});

describe("getGroups tests", () => {
  it("should return array with 3 groups", async () => {
    const actualResult = await getGroups();
    const expectedResult = getGroupsResponse;
    expect(actualResult).toStrictEqual(expectedResult);
  });
});
