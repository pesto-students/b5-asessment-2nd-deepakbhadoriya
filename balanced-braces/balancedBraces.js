function balancedBraces(string) {
  let bracesArray = [];
  var i = 0;
  while (i < string.length) {
    let currentChar = string.charAt(i);
    if (currentChar === "(" || currentChar === "[" || currentChar === "{") bracesArray.push(currentChar);
    if (currentChar === ")" || currentChar === "]" || currentChar === "}") {
      let lastElement = bracesArray[bracesArray.length - 1];
      (lastElement === "(" && currentChar === ")") || (lastElement === "[" && currentChar === "]") || (lastElement === "{" && currentChar === "}")
        ? bracesArray.pop()
        : bracesArray.push(currentChar);
    }
    i++;
  }
  return bracesArray.length === 0 ? true : false;
}

module.exports = balancedBraces;
