function demo(input) {
 
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOrOdd = 0;

    switch(operator) {

        case '+':
        case '-':
        case '*':

            if (operator == "+") {

                result = n1 + n2;

            } else if (operator == "-") {

                result = n1 - n2;

            } else if (operator == "*") {

                result = n1 * n2;

            }

            if (result % 2 == 0) {

                evenOrOdd = "even";

            } else if (result % 2 == 1) {

                evenOrOdd = "odd";

            }

            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);

        break;

        case '/':

            if(n2 == 0) {

                console.log(`Cannot divide ${n1} by zero`);
    
            } else {

            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);

            }

        break;

        case '%':

            if(n2 == 0) {

                console.log(`Cannot divide ${n1} by zero`);
    
            } else {

            let diff = n1 % n2;
            console.log(`${n1} % ${n2} = ${diff}`);

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