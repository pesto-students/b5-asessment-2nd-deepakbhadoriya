require("./arrayUtils.js");

const validArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tempArray = [];

describe("User defined arrayUtils", () => {
  it("expected to be function", () => {
    expect(typeof validArray.forEachArray).toBe("function");
    expect(typeof validArray.mapArray).toBe("function");
    expect(typeof validArray.filterArray).toBe("function");
    expect(typeof validArray.reduceArray).toBe("function");
  });

  it("validated output of each arrayUtils", () => {
    validArray.forEachArray((num) => tempArray.push(num * 2));
    expect(tempArray).toStrictEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
    expect(validArray.mapArray((num) => num * 2)).toStrictEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
    expect(validArray.filterArray((num) => num % 2)).toStrictEqual([1, 3, 5, 7, 9]);
    expect(validArray.reduceArray((sum, num) => sum + num, 100)).toStrictEqual(145);
  });

  it("throw error", () => {
    expect(() => {
      validArray.forEachArray(null);
    }).toThrow();
    expect(() => {
      validArray.mapArray(null);
    }).toThrow();
    expect(() => {
      validArray.filterArray(null);
    }).toThrow();
    expect(() => {
      validArray.reduceArray(null);
    }).toThrow();
  });
});
