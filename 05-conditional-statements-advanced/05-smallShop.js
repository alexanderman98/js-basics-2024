function smallShop(input) {

     let product = input[0];
     let city = input[1];
     let quantity = Number(input[2]);

     if (product == "coffee") {

        if (city == "Sofia") {
            console.log((quantity * 0.5).toFixed(2));
        } else if (city == "Plovdiv") {

            console.log((quantity * 0.4).toFixed(2));
        } else if (city == "Varna") {

            console.log((quantity * 0.45).toFixed(2));
        } else { console.log("No such city.");}
     }

     if (product == "water") {

        if (city == "Sofia"){

            console.log((quantity * 0.8).toFixed(2));

        } else if (city == "Plovdiv") {

            console.log((quantity * 0.7).toFixed(2));
        } else if (city == "Varna") {

            console.log((quantity * 0.7).toFixed(2));
        } else {console.log("No such city.")}
     }

     
     if (product == "beer") {

        if (city == "Sofia"){

            console.log((quantity * 1.2).toFixed(2));

        } else if (city == "Plovdiv") {

            console.log((quantity * 1.15).toFixed(2));
        } else if (city == "Varna") {

            console.log((quantity * 1.1).toFixed(2));
        } else {console.log("No such city.")}
    }
    
    
    if (product == "sweets") {

        if (city == "Sofia"){

            console.log((quantity * 1.45).toFixed(2));

        } else if (city == "Plovdiv") {

            console.log((quantity * 1.3).toFixed(2));
        } else if (city == "Varna") {

            console.log((quantity * 1.35).toFixed(2));
        } else {console.log("No such city.")}
    }

    if (product == "peanuts") {

        if (city == "Sofia"){

            console.log((quantity * 1.6).toFixed(2));

        } else if (city == "Plovdiv") {

            console.log((quantity * 1.5).toFixed(2));
        } else if (city == "Varna") {

            console.log((quantity * 1.55).toFixed(2));
        } else {console.log("No such city.")}
    }
}

smallShop(["beer",
"Sofia",
"6"]);