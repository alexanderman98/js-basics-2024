function tradeCommissions(input) {

    let city = input[0];
    let volumeSells = Number(input[1]);
    let commission = 0;

    switch (city) {

        case 'Sofia':
            if (volumeSells >= 0 && volumeSells <= 500) { 

                commission = volumeSells * 0.05;
                console.log(commission.toFixed(2));

            } else if (volumeSells > 500 && volumeSells <= 1000) {

                commission = volumeSells * 0.07;
                console.log(commission.toFixed(2));

            } else if (volumeSells > 1000 && volumeSells <= 10000) {

                commission = volumeSells * 0.08;
                console.log(commission.toFixed(2));

            } else if (volumeSells > 10000) {

                commission = volumeSells * 0.12;
                console.log(commission.toFixed(2));

            } else {

                console.log("error");

            }
            break;

        case 'Varna':
            if (volumeSells >= 0 && volumeSells <= 500) {

                commission = volumeSells * 0.045;
                console.log(commission.toFixed(2));

            } else if (volumeSells > 500 && volumeSells <= 1000) {

                commission = volumeSells * 0.075;
                console.log(commission.toFixed(2));

            } else if (volumeSells > 1000 && volumeSells <= 10000) {

                commission = volumeSells * 0.10;
                console.log(commission.toFixed(2));

            } else if (volumeSells > 10000) {

                commission = volumeSells * 0.13;
                console.log(commission.toFixed(2));

            } else {

                console.log("error");

            }
            break;

        case 'Plovdiv':
            if (volumeSells >= 0 && volumeSells <= 500) {

                commission = volumeSells * 0.055;
                console.log(commission.toFixed(2));

            } else if (volumeSells > 500 && volumeSells <= 1000) {

                commission = volumeSells * 0.08;
                console.log(commission.toFixed(2));

            } else if (volumeSells > 1000 && volumeSells <= 10000) {

                commission = volumeSells * 0.12;
                console.log(commission.toFixed(2));

            } else if (volumeSells > 10000) {

                commission = volumeSells * 0.145;
                console.log(commission.toFixed(2));

            } else {

                console.log("error");

            }
            break;

            default:
                console.log("error");
                break;


    }

}

tradeCommissions(["Varna",
"3874.50"]);