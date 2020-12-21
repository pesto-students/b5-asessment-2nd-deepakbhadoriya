Array.prototype.forEachArray = function (callBackFunction) {
  try {
    //Validating array input and callbackFunction
    if (!Array.isArray(this)) {
      throw new TypeError("Array.prototype.forEach called on null or undefined");
    }
    if (typeof callBackFunction !== "function") {
      throw new TypeError(callBackFunction + " is not a function");
    }
    //Lopping thorough passed array and passing value to callback
    let i = 0;
    while (i < this.length) {
      callBackFunction(this[i], i, this);
      i++;
    }
  } catch (error) {
    throw new Error(error);
  }
};

Array.prototype.mapArray = function (callBackFunction) {
  try {
    //Validating array input and callbackFunction
    if (!Array.isArray(this)) {
      throw new TypeError("Array.prototype.forEach called on null or undefined");
    }
    if (typeof callBackFunction !== "function") {
      throw new TypeError(callBackFunction + " is not a function");
    }
    //Lopping thorough passed array and passing value to callback
    const tempArray = [];
    let i = 0;
    while (i < this.length) {
      tempArray.push(callBackFunction(this[i], i, this));
      i++;
    }
    return tempArray;
  } catch (error) {
    throw new Error(error);
  }
};

Array.prototype.filterArray = function (callBackFunction) {
  try {
    //Validating array input and callbackFunction
    if (!Array.isArray(this)) {
      throw new TypeError("Array.prototype.forEach called on null or undefined");
    }
    if (typeof callBackFunction !== "function") {
      throw new TypeError(callBackFunction + " is not a function");
    }
    //Lopping thorough passed array and passing value to callback
    const tempArray = [];
    let i = 0;
    while (i < this.length) {
      callBackFunction(this[i]) && tempArray.push(this[i]);
      i++;
    }
    return tempArray;
  } catch (error) {
    throw new Error(error);
  }
};

Array.prototype.reduceArray = function (callBackFunction, initialSum = 0) {
  try {
    //Validating array input and callbackFunction
    if (!Array.isArray(this)) {
      throw new TypeError("Array.prototype.forEach called on null or undefined");
    }
    if (typeof callBackFunction !== "function") {
      throw new TypeError(callBackFunction + " is not a function");
    }
    //Lopping thorough passed array and passing value to callback
    let sum = initialSum;
    let i = 0;
    while (i < this.length) {
      sum = callBackFunction(sum, this[i], i, this);
      i++;
    }
    return sum;
  } catch (error) {
    throw new Error(error);
  }
};
