function coins(input) {

    let index = 0;

    let restoInLv = Number(input[index]);

    let resto = Math.trunc(restoInLv * 100);

    let count = 0;

    let lev2 = Number(200);
    let lev1 = Number(100);
    let cent50 = Number(50);
    let cent20 = Number(20);
    let cent10 = Number(10);
    let cent5 = Number(5);
    let cent2 = Number(2);
    let cent1 = Number(1);

    let sum = 0;

    while (resto !== sum) {



        if (resto >= lev2) {

            resto = resto - lev2;
            count++;
        } else if (resto >= lev1) {

            resto = resto - lev1;
            count++;
        } else if (resto >= cent50) {

            resto = resto - cent50;
            count++;
        } else if (resto >= cent20) {

            resto = resto - cent20;
            count++;
        } else if (resto >= cent10) {

            resto = resto - cent10;
            count++;
        } else if (resto >= cent5) {

            resto = resto - cent5;
            count++;
        } else if (resto >= cent2) {

            resto = resto - cent2;
            count++;
        } else if (resto >= cent1) {

            resto = resto - cent1;
            count++;
        }

    }

    console.log(count);

}

coins(["1.23"]);