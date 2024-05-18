function skiTrip(input) {

    let stayDays = (Number(input[0]) - 1);
    let typeApartment = String(input[1]);
    let grade = String(input[2]);

    let roomOnePerson = 18.00;
    let apartment = 25.00;
    let presidentApartment = 35.00;

    let costOfStay = 0;

    

    switch (typeApartment) {

        case 'room for one person':

        costOfStay = roomOnePerson * stayDays;

            if (grade == "positive") {

                costOfStay *= 1.25;
                console.log(costOfStay.toFixed(2));

            } else if (grade == "negative"){

                costOfStay *= 0.90;
                console.log(costOfStay.toFixed(2));

            }

        break;

        case 'apartment':

        costOfStay = apartment * stayDays;

        

            if (stayDays > 15) {

                costOfStay *= 0.50;


            } else if (stayDays >= 10) {

                costOfStay *= 0.65;


            } else {

                costOfStay *= 0.70;
            }

            if (grade == "positive") {

                costOfStay *= 1.25;
                console.log(costOfStay.toFixed(2));

            } else if (grade == "negative"){

                costOfStay *= 0.90;
                console.log(costOfStay.toFixed(2));

            } 

            break;

        
        case 'president apartment':

        costOfStay = presidentApartment * stayDays;

        if (stayDays > 15) {

            costOfStay *= 0.80;

        } else if (stayDays >= 10) {

            costOfStay *= 0.85;

        } else {

            costOfStay *= 0.90;

        }

        if (grade == "positive") {

            costOfStay *= 1.25;
            console.log(costOfStay.toFixed(2));

        } else if (grade == "negative"){

            costOfStay *= 0.90;
            console.log(costOfStay.toFixed(2));

        } 

        break;

        default:

        console.log("error");

        break;

    }

}

skiTrip(["2",
"apartment",
"positive"]);