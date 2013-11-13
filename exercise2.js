function GenerateFibonaccisUpTo(num) {
  var fibArray=[1,2];
  for (i=2;i<=num;i++) {
    var fibNum = (fibArray[i-2]+fibArray[i-1]);
    if (fibNum > num) {
      break;
    }
    fibArray.push(fibNum);
  }
  return fibArray;

}


function SumEvens(array){
  var sum = 0;
  for (var i=0; i<array.length; i++){
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

var fibArray = GenerateFibonaccisUpTo(4000000);
console.log(SumEvens(fibArray));