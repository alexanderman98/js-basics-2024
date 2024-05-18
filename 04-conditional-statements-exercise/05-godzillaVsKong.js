function gong(input) {

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let priceOfOneCostume = Number(input[2]); 

    let decor = budget * 0.1;

    let sumCostume = statists * priceOfOneCostume;
    
    

    if (statists > 150) {

        sumCostume *= 0.9;
    }

    let totalSum = sumCostume + decor;


    if (totalSum > budget) {

        console.log("Not enough money!");

        let moneyLeft = Math.abs(budget - totalSum);

        console.log(`Wingard needs ${moneyLeft.toFixed(2)} leva more.`);

    } else {

    console.log("Action!");

    let moneyLeft = budget - totalSum;
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);


    }
    
}

gong(["9587.88",
"222",
"55.68"]);