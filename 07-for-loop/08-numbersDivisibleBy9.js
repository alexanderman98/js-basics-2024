function numbersDivisibleBy9(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let allNum = "";
    let sum = 0;

    for(let i = num1; i <= num2; i++) {
        
        if(i % 9 == 0) {
        
            sum += i;

            allNum += i + "\n";
        
        }
        

        
    }

    console.log(`The sum: ${sum}`);
    console.log(allNum);

}

numbersDivisibleBy9([100, 200]);