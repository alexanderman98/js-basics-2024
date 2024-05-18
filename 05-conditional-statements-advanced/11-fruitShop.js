function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    switch (day) {

        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if(fruit == "banana") {

                price = 2.50 * quantity;
                console.log(price.toFixed(2));
            } else if (fruit == "apple") {

                price = 1.20 * quantity;
                console.log(price.toFixed(2));

            } else if (fruit == "orange") {

                price = 0.85 * quantity;
                console.log(price.toFixed(2));

            } else if (fruit == "grapefruit") {

                price = 1.45 * quantity;
                console.log(price.toFixed(2));

            } else if (fruit == "kiwi") {

                price = 2.70 * quantity;
                console.log(price.toFixed(2));

            } else if (fruit == "pineapple") {

                price = 5.50 * quantity;
                console.log(price.toFixed(2));

            } else if (fruit == "grapes") {

                price = 3.85 * quantity;
                console.log(price.toFixed(2));

            } else {
                
                console.log("error");
            }
        break;

            case 'Saturday':
            case 'Sunday':
                if(fruit == "banana") {

                    price = 2.70 * quantity;
                    console.log(price.toFixed(2));

                } else if (fruit == "apple") {

                    price = 1.25 * quantity;
                    console.log(price.toFixed(2));

                } else if (fruit == "orange") {

                    price = 0.90 * quantity;
                    console.log(price.toFixed(2));

                } else if (fruit == "grapefruit") {

                    price = 1.60 * quantity;
                    console.log(price.toFixed(2));

                } else if (fruit == "kiwi") {

                    price = 3.00 * quantity;
                    console.log(price.toFixed(2));

                } else if (fruit == "pineapple") {

                    price = 5.60 * quantity;
                    console.log(price.toFixed(2));

                } else if (fruit == "grapes") {

                    price = 4.20 * quantity;
                    console.log(price.toFixed(2));

                } else {
                    
                    console.log("error");
                }
            break;

                default:

                    console.log("error");
                    
                    break;
    }
    

}

fruitShop(["kiwi",
"Monday",
"2.5"]);