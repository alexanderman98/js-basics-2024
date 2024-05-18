function depositCalc(input){

    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearlyInterestPercentage = Number(input[2]);

    let totalInterestSum = depositSum * yearlyInterestPercentage / 100;
    let oneMonthInterest = totalInterestSum / 12;
    let totalSum = depositSum + depositTerm * oneMonthInterest;

    console.log(totalSum);
}

depositCalc(['2350', '6', '7']);
