function numbersNTo1(input) {

    let n = Number(input[0]);
    
    for(let i = n; i > 0; i--) {
    
         console.log(i);
      
    }
  
  }

  numbersNTo1(["5"]);

      // Define the maximum power of 2
var maxPower = 10;

// Loop through even powers of 2
for (var i = 0; i <= maxPower; i += 2) {
    var result = Math.pow(2, i);
    console.log("2^" + i + " = " + result);
}

// Define the maximum value of the exponent
var n = 10;

// Iterate over powers of 2
for (var i = 0; Math.pow(2, i) <= Math.pow(2, n); i += 2) {
    console.log("2^" + i + " = " + Math.pow(2, i));
}
