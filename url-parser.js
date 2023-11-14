const mapObject = (map) => {
  return Object.fromEntries(map.entries());
};

const parseUrl = (urlFormat, urlInstance, mapToObject = false) => {
  try {
    const urlSplitted = urlFormat.split("/"); //split string by separator "/"
    const urlInstanceSplitted = urlInstance.split("/"); //split string by separator "/"

    if (urlSplitted.length !== urlInstanceSplitted.length) {
      throw new Error("Strings length don't match");
    }

    const collection = new Map();

    urlSplitted.forEach((part, ix) => {
      if (part.startsWith(":")) {
        const name = part.slice(1);
        const value = urlInstanceSplitted[ix];
        const queryString = value.split("?")[0]; //check for params
        collection.set(name, queryString ?? value);
      }
    });

    // Parse URL parameters
    const queryString = urlInstance.split("?")[1];
    if (queryString) {
      const queryParams = queryString.split("&");
      queryParams.forEach((param) => {
        const [key, value] = param.split("=");
        collection.set(key, value);
      });
    }

    return mapToObject ? mapObject(collection) : collection;
  } catch (error) {
    throw error;
  }
};

// Example usage:
const urlFormat = "/:version/api/:collection/:id";
const urlInstance = "/6/api/listings/3?sort=desc&limit=10";

//Last param allows to return a Map class instance
const result = parseUrl(urlFormat, urlInstance, true);
console.log("result:", result);

module.exports = { parseUrl };
