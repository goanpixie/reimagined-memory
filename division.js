// divide two numbers 
// handle if denominator is 0 properly
function division(x, y) {
 var result = 0

 if ( y === 0) {
  result = "Infinity"
 } else {
  result = x / y
 }
 //returns back the result 
 return result
}


function testDivision(x, y, expected) {
  (division(x, y) === expected) ? console.log('Passed') : console.log('Failed')
}

testDivision(20, 10, 3)
