function IsPalindrome(num) {
  if ((""+num) === ((""+num).split("").reverse().join(""))) {
    return true;
  }
  else {return false;}
}

function GetProducts() {
  var productArray = [];
  for (var i=100;i<1000;i++) {
    for (var j=100;j<1000;j++) {
      productArray.push (i*j);
    }
  }
  return productArray;
}

var products = GetProducts();
var palindromeProducts=[];
for (var i=0; i<products.length;i++) {
  if (IsPalindrome(products[i])) {
    palindromeProducts.push(products[i]);
  }
}

console.log(palindromeProducts);