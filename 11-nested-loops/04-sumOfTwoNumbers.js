function sumOfTwoNumbers(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let pairsChecked = 0;
    let magicPairIsFound = false;

    for(let num1 = startNum; num1 <= endNum; num1++) {

        for(let num2 = startNum; num2 <= endNum; num2++) {

            pairsChecked++;
            if(num1 + num2 === magicNum) {

                console.log(`Combination N:${pairsChecked} (${num1} + ${num2} = ${magicNum})`);
                magicPairIsFound = true;
                break;

            }

        }

        if(magicPairIsFound) {
            break;
        }

    }

    if(!magicPairIsFound) {

        console.log(`${pairsChecked} combinations - neither equals ${magicNum}`);
    }

}

sumOfTwoNumbers([1, 10, 5]);