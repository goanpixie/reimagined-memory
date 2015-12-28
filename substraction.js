//Substraction of two numbers
function substraction(number_1,number_2) {
  return number_1 - number_2;
}

function testSubstraction(number_x, number_y,expected) {
  (substraction(number_x, number_y) === expected) ? console.log('Passed') : console.log('Failed')
}
testSubstraction(9,2,7)
testSubstraction(9,1,8)
testSubstraction(9,2,3)
