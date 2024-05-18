function greenYards(input){

    let oneSquareMeterPrice = 7.61;
    let yardSizeInSquare = input[0];
    let sumGreenAllYard = oneSquareMeterPrice * yardSizeInSquare;
    let discountFromAllSum = 0.18 * sumGreenAllYard;
    let totalSum = sumGreenAllYard - discountFromAllSum;

    console.log(`The final price is: ${totalSum} lv.`);
    console.log(`The discount is: ${discountFromAllSum} lv.`);

}

greenYards([150]);