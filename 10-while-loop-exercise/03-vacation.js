function vacation(input) {



    let moneyNeeded = Number(input[0]);

    let totalSum = Number(input[1]);


    let spendDays = 0;

    let saveDays = 0;

    let index = 2;
    let action = String(input[index]);
    index++;

    let sumSaved = 0;
    let sumSpent = 0;
    let daysCount = 0;

    while (moneyNeeded > totalSum) {

        

        if (totalSum < 0) {

            totalSum = 0;
        }

        if (action === "spend") {

            daysCount++;
            spendDays++;


            sumSpent = Number(input[index]);
            index++;

            totalSum -= sumSpent;

            if (spendDays == 5 && totalSum < moneyNeeded) {

                console.log("You can't save the money.");
                console.log(`${daysCount}`);
                return;
            }

        } else if (action === "save") {


            daysCount++;
            saveDays++;
            spendDays = 0;


            sumSaved = Number(input[index]);
            index++;

            totalSum += sumSaved;

            if (totalSum >= moneyNeeded) {

                console.log(`You saved the money for ${daysCount} days.`);
    
                return;
            }
        }

        
        

        action = String(input[index]);
        index++;
    }

}

vacation
(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
 ;


