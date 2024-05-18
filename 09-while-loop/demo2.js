function demo(input) {

    let num = Number(input[0]);

    let index = 1;
    
    let sum = 0;
    while (num !== sum) {

        let num2 = Number(input[index]);
        index++;

        sum += num2;

        if(sum >= num) {

            console.log(sum);
            break;
        }
    }


}

demo([
    "100",
    "10",
    "20",
    "30",
    "40"
]);