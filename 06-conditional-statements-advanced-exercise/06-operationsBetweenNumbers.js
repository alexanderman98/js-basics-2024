function demo(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = String(input[2]);

    let result = 0;
    let evenOrOdd = 0;

    switch (operator) {

        case '+':

            result = n1 + n2;

            if (result % 2 == 0){

                evenOrOdd = "even";
        
            } else {
        
                evenOrOdd = "odd"
        
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);

        break;

        case '-':

            result = n1 - n2;

            if (result % 2 == 0){

                evenOrOdd = "even";
        
            } else {
        
                evenOrOdd = "odd"
        
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);

        break;

        case '*':

            result = n1 * n2;

                if (result % 2 == 0){

                    evenOrOdd = "even";
        
                } else {
        
                    evenOrOdd = "odd"
        
                }
            
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);

        break;

        case '/':

            result = n1 / n2;

            if (n2 === 0){

                console.log(`Cannot divide ${n1} by zero`);

            } else if (n1 == 0){

                console.log(`Cannot divide ${n2} by zero`);
    
            } else {

        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);

            }

        break;

        case '%':

            result = n1 % n2;

                if (n2 == 0){

                    console.log(`Cannot divide ${n1} by zero`);
    
                } else if (n1 === 0){
    
                    console.log(`Cannot divide ${n2} by zero`);
    
                } else {
    
                console.log(`${n1} % ${n2} = ${result}`)
    
                }

        break;

        default:

        console.log("error");

        break;
        
        
        
    }
    
        
}

demo(["112",
"0",
"/"]);