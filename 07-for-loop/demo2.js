function demo(input){

    // Get the maximum value of the exponent from user input
    var n = Number(input[0]);

    // Iterate over powers of 2
    for (var i = 0; Math.pow(2, i) <= Math.pow(2, n); i += 2) {
    console.log("2^" + i + " = " + Math.pow(2, i));

    }
}






function demo1(input){

    let i = 1;
    
    while(i <= 10){

        console.log(i++);

    }

}

demo1();