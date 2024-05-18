function toyShop(input) {

    let priceVacation = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    
    let totalPricePuzzles = puzzles * 2.6;
    let totalPriceDolls = dolls * 3;
    let totalPriceTeddyBears = bears * 4.1;
    let totalPriceMinions = minions * 8.2;
    let totalPriceTrucks = trucks * 2;
    
    let totalPrice = totalPricePuzzles + totalPriceDolls + totalPriceTeddyBears + totalPriceMinions + totalPriceTrucks;

    let toysCount = puzzles + dolls + bears + minions + trucks;


     
    if(toysCount >= 50) {
        
        totalPrice = totalPrice * 0.75;
        
    }
    
    let priceAfterRent = totalPrice * 0.90;

    if (priceAfterRent >= priceVacation) {
        
        let moneyLeft = priceAfterRent - priceVacation;

        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);

        
    } else {
       
        let moneyLeft = Math.abs(priceAfterRent - priceVacation);
    
        console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`);
    }

}

toyShop(["320", "8", "2", "5", "5", "1"]);