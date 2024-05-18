function accountBalance(input) {

    
    let moneyIn = Number(input[0]);
    
    let index = 1;

    let wholeSum = 0;

    while (moneyIn !== "NoMoreMoney") {

        if(moneyIn < 0) {

            console.log("Invalid operation!");
            break;
        }

        

        wholeSum += Number(moneyIn);

        console.log(`Increase: ${Number(moneyIn).toFixed(2)}`);

        moneyIn = input[index];
        index++;
        
    }

    
    console.log(`Total: ${wholeSum.toFixed(2)}`);

}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);