function sumOfPrimeAndNone(input) {

    let index = 0;
    let allPrimesSum = 0;
    let allNonPrimesSum = 0;

    while (input[index] !== 'stop') {

        let currentNum = Number(input[index]);

        if (currentNum < 0) {

            console.log('Number is negative.');
        } else if (currentNum === 0 || currentNum === 1) {

            allNonPrimesSum += currentNum;
        } else {

            let isNonPrime = false;

            for(let col = 2; col < currentNum; col++) {

                if(currentNum % col === 0){

                    isNonPrime = true;
                    break;
                }
            }

            if(isNonPrime) {

                allNonPrimesSum += currentNum;
            } else {

                allPrimesSum += currentNum;
            }
        }

        index++;

    }


    console.log(`Sum of all prime numbers is: ${allPrimesSum}`);
    console.log(`Sum of all non prime numbers is: ${allNonPrimesSum}`);
}

sumOfPrimeAndNone();