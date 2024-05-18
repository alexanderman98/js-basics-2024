function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let type = 0;

    switch (season) {

        case 'summer':
            if(budget <= 100) {

                price = budget * 0.30;

            } else if (budget <= 1000) {

                price = budget * 0.40;

            } else if (budget > 1000) {

                price = budget * 0.90;

            } else {console.log("error");}
            
            type = "Camp";

        break;

        case 'winter':

            if(budget <= 100) {

                price = budget * 0.70;

            } else if (budget <= 1000) {

                price = budget * 0.80;

            } else if (budget > 1000) {

                price = budget * 0.90;

            } else {console.log("error");}

            type = "Hotel";

        break;

        default:

            console.log("error");
        
        break;
    }

    let destination = 0;

    if(budget <= 100) {

        destination = "Bulgaria";

    } else if (budget <= 1000) {

        destination = "Balkans";

    } else if (budget > 1000) {

        destination = "Europe";
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);

}

journey(["1500", "summer"]);