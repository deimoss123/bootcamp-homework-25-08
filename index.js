function funcOne(a, b) {
  return a + b;
}

function funcTwo(str) {
  return str.slice(-3);
}

function funcThree(a) {
  const digits = a.toString().split("");
  return digits.map((d) => +d);
}

function funcFour(a, n) {
  return a.splice(-n);
}

function funcOne(arr1, arr2) {
  // filters the 2nd array to remove duplicate values from arr1
  const filteredArr2 = arr2.filter((val) => arr1.indexOf(val) === -1);

  // merges the arrays
  const mergedArr = arr1.concat(filteredArr2);

  // sorts in ascending order and returns the array
  return mergedArr.sort();
}

function funcTwo(a, b) {
  return b in a;
}
