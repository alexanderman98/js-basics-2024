function sequence(input) {

    let index = 0;

    let n = Number(input[index]);
    index++;

    let number = 0;

    while (number <= n) {

        number *= 2;
        number += 1;

        if(number <= n) {
        console.log(number);
        } 
    }

}

sequence(["31"]);