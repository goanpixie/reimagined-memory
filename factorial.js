
var factorial = function (number) {
  var factorial_result = 1;


  while(number>0){
   factorial_result=number*factorial_result;
   number=number-1;
  }

  console.log('factorial is', factorial_result);
}

factorial(4);



