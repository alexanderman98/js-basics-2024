function maxNumbers(input) {

    let index = 0;

    let max = Number.MIN_SAFE_INTEGER;

    let command = input[index];

    

    while(command !== "Stop") {

        let num = Number(command);
        if(num > max){

            max = num;
        }

        command = input[index];
        index++;

    }

    console.log(max)

}

maxNumbers([-1, -2,
"Stop"]);