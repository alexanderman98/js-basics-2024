function evenOddSum(input) {

    let smallNumberInput = Number(input[0]);
    let bigNumberInput = Number(input[1]);
    let output = '';
    
    for (let row = smallNumberInput; row <= bigNumberInput; row += 1) {
       
        let currentNumberAsString = `${row}`;
        let evenNumbersSum = 0;
        let oddNumbersSum = 0;
       
        for (let col = 0; col < currentNumberAsString.length; col += 1) {
            
            let currentNumber = Number(currentNumberAsString[col]);
            
            if (col % 2 === 0) {
                
                evenNumbersSum += currentNumber;

            } else {
                
                oddNumbersSum += currentNumber;

            }
        }

        if (evenNumbersSum === oddNumbersSum) {

            output += `${currentNumberAsString} `;

        }
    }
    if (output !== '') {

        console.log(output);

    }
}
evenOddSum(["100000",
    "100050"])
    ;