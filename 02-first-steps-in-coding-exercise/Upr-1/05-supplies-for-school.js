function moneyNeeded(input){
    let pricePacketPens = 5.80;
    let pricePacketMarkers = 7.20;
    let priceCleaningDetergent = 1.20;

    let numberOfPacketPens = Number(input[0]);
    let numberOfPacketMarkers = Number(input[1]);
    let litresOfCleaningDetergent = Number(input[2]);
    let percentagePromo = Number(input[3]);

    let priceOfPens = numberOfPacketPens * pricePacketPens;
    let priceOfMarkers = numberOfPacketMarkers * pricePacketMarkers;
    let priceOfCleaningDetergent = litresOfCleaningDetergent * priceCleaningDetergent;
    let totalPrice = priceOfPens + priceOfMarkers + priceOfCleaningDetergent;
    let totalPricePromo = totalPrice - (totalPrice * percentagePromo / 100);

    console.log(totalPricePromo);
}

moneyNeeded(['2', '3', '4', '25']);