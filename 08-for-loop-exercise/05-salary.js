function salary(input) {

    let numTabs = Number(input[0]);
    let salary = Number(input[1]);

    let fine = 0;

    for(let i = 1; i <= input.length; i++) {

        let n = String(input[i]);

        if(n === "Facebook") {

            fine += 150;
        } else if (n === "Instagram") {

            fine += 100;
        } else if(n === "Reddit") {

            fine += 50;
        } else {

            fine += 0;
        }

    }

   
    let diff = salary - fine;

    if(diff <= 0) {

        console.log("You have lost your salary.");
    } else {

        console.log(Math.ceil(diff));
    }


}

salary(["3",
"300", "Facebook", "Reddit", "Reddit"]);