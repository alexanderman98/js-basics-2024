function cleverLily(input) {

    let age = Number(input[0]);
    let priceMachine = Number(input[1]);
    let priceToy = Number(input[2]);

    let moneySaved = 0;
    let moneyGiven = 10;
   
    

    for(let i = 1; i <= age; i++) {

        if(i % 2 === 0) {

            moneySaved += moneyGiven - 1;
            moneyGiven += 10;
            
        } else {

            moneySaved += priceToy;
        }
        
    }

    

    let moneyLeft = moneySaved - priceMachine;
    let moneyNeeded = Math.abs(moneySaved - priceMachine);

    if(moneySaved >= priceMachine) {

        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {

        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"]);