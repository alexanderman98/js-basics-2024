function specialNumbers(input) {

    let num = Number(input[0]);
    let output = '';


    for(let row = 1111; row <= 9999; row++){

        let rowNumberAsAString = `${row} `;

        for (let col = 0; col < rowNumberAsAString.length - 1; col++) {

            let currentNum = Number(rowNumberAsAString[col]);

            if(num % currentNum !== 0) {

                rowNumberAsAString = '';
                break;
            }

        }

        output += rowNumberAsAString;
    }    

    console.log(output);

}

specialNumbers();