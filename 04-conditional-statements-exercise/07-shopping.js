function shopping(input) {

    let budget = Number(input[0]);
    let nVideocards = Number(input[1]);
    let mProcessors = Number(input[2]);
    let pRAM = Number(input[3]);

    let priceVideocards = nVideocards * 250;

    let totalSum = priceVideocards + (mProcessors * priceVideocards * 0.35) + (pRAM * priceVideocards * 0.10);

    if (nVideocards > mProcessors) {

        totalSum *= 0.85;

    }

    if (budget >= totalSum) {

        let moneyLeft = budget - totalSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {

        let moneyNeeded = totalSum - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }

}

shopping(["920.45",
"3",
"1",
"1"]);