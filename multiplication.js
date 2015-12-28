function  multiply(a, b) {
  return a * b
}

function testMultiply(a, b, expected) {
  console.log (multiply(a,b) === expected ? "Passed" : "Failed");
}

testMultiply(2, 2, 4)
testMultiply(4, 5, 20)