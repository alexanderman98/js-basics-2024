function numPyramid(input) {

    let n = Number(input[0]);
    let currentNum = 0;

    for(let row = 0; row <= n; row++) {

        let printRow = '';

        for(let col = 0; col <= row; col++) {

            currentNum++;
            printRow += `${currentNum} `;

            if(currentNum >= n){

                break;
            }
        }

        console.log(printRow);

        if(currentNum >= n) {
            break
        }

    }

}

numPyramid([5]);