const arrayCubeRootToJson = (arr) => {
  try {
    let rootJson = {};
    arr.map((number) => {
      let cubeRoot = Math.cbrt(number);
      if (cubeRoot === 0 || isNaN(number)) throw new Error();
      rootJson[number] = cubeRoot;
    });
    return rootJson;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = arrayCubeRootToJson;
