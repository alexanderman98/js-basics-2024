function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let number = Number(input[2]);

    let rentPrice = 0;

    switch (season){

        case 'Spring':

            rentPrice = 3000;
            if(number % 2 == 0){

                rentPrice *= 0.95;
        
            }
                        break;

        case 'Summer':
            rentPrice = 4200;
        if(number % 2 == 0){

            rentPrice *= 0.95;
    
        }
        break;
        case 'Autumn':
            
            rentPrice = 4200;
            break;

        case 'Winter':

            rentPrice = 2600;

            if(number % 2 == 0){

                rentPrice *= 0.95;
        
            }
            break;
            
        default: 
            console.log("error");
            break;

    }

    

    if(number <= 6) {

        rentPrice *= 0.90;    

    } else if (number <= 11) {

        rentPrice *= 0.85;

    } else if (number >= 12) {

        rentPrice *= 0.75;

    }


    let diff = Math.abs(budget - rentPrice);

    if (budget >= rentPrice) {

        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);

    } else if (budget < rentPrice){

        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);

    }

}

fishingBoat(["2000",
"Winter",
"13"])
;