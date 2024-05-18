function hotelRoom(input) {

    let month = input[0];
    let numOfNights = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;
    

    switch (month) {

        case 'May':
        case 'October':

        priceStudio = numOfNights * 50.00;
        priceApartment = numOfNights * 65.00;

            if(numOfNights > 7 && numOfNights <= 14) {

                priceStudio *= 0.95;
                

            } else if (numOfNights > 14) {

                priceStudio *= 0.70;
                priceApartment *= 0.90;

            }
        
            break;

        case 'June':
        case 'September':

        priceStudio = numOfNights * 75.20;
        priceApartment = numOfNights * 68.70;

        if (numOfNights > 14) {

            priceStudio *= 0.80;
            priceApartment *= 0.90;

        } else {}

            break;

        case 'July':
        case 'August':

        priceStudio = numOfNights * 76.00;
        priceApartment = numOfNights * 77.00;

        if (numOfNights > 14) {

            priceApartment *= 0.90;

        }

        break;

        default:

            console.log("error");

            break;

    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}

hotelRoom(["May",
"15"]);