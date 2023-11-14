const { parseUrl } = require("./url-parser");

describe("parseUrl", () => {
  it("should parse variable parts and query parameters correctly", () => {
    const urlFormat = "/:version/api/:collection/:id";
    const urlInstance = "/6/api/listings/3?sort=desc&limit=10";

    const result = parseUrl(urlFormat, urlInstance, true);

    expect(result).toEqual({
      version: "6",
      collection: "listings",
      id: "3",
      sort: "desc",
      limit: "10",
    });
  });

  it("should parse variable parts with no query parameters", () => {
    const urlFormat = "/:version/api/:collection/:id";
    const urlInstance = "/6/api/listings/3";

    const result = parseUrl(urlFormat, urlInstance, true);

    expect(result).toEqual({
      version: "6",
      collection: "listings",
      id: "3",
    });
  });

  it("should return null as urlFormat and instance length are not equal", () => {
    expect(() => {
      const urlFormat = "/:version/api";
      const urlInstance = "/6/api/listings/3";

      parseUrl(urlFormat, urlInstance, true);
    }).toThrow("Strings length don't match");
  });

  it("should throw error if input is undefined", () => {
    expect(() => {
      const urlFormat = undefined;
      const urlInstance = "/6/api/listings/3?sort=desc&limit=10";
      parseUrl(urlFormat, urlInstance, true);
    }).toThrow();
  });
});
