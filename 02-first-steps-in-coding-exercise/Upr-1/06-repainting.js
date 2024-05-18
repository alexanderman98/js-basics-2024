function repaint(input){

    let nylonPriceForSquare = 1.50;
    let paintPriceForLitre = 14.50;
    let thinnerPriceForLitre = 5;

    let nylonInSquare = Number(input[0]);
    let paintInLitres = Number(input[1]);
    let thinnerInLitres = Number(input[2]);
    let hoursWork = Number(input[3]);

    let addedPercentagePaint = paintInLitres * 10/100;
    let addedNylonInSquare = 2;
    let bagPrice = 0.40;

    let sumNylon = (nylonInSquare + addedNylonInSquare) * nylonPriceForSquare;
    let sumPaint = (paintInLitres + addedPercentagePaint) * paintPriceForLitre;
    let sumThinner = thinnerInLitres * thinnerPriceForLitre;
    let sumMaterials = sumNylon + sumPaint + sumThinner + bagPrice;
    let sumForWorkers = (sumMaterials * 30 / 100) * hoursWork;

    let totalSumEverything = sumMaterials + sumForWorkers;
    
    console.log(totalSumEverything);
}

repaint(['5', '10', '10', '1']);