function trekking(input) {

    let index = 0;
    let numGroups = Number(input[index]);
    index++;
    

    let totalMusala = 0;
    let totalMonblan = 0;
    let totalKilimanjaro = 0;
    let totalK2 = 0;
    let totalEverest = 0;

    for(let i = 0; i < numGroups; i++) {

        let numPeople = Number(input[index]);
        index++;

        if(numPeople <= 5) {

            totalMusala += numPeople;
            
        } else if (numPeople <= 12) {

            totalMonblan += numPeople;

        } else if (numPeople <= 25) {

            totalKilimanjaro += numPeople;

        } else if (numPeople <= 40) {

            totalK2 += numPeople;

        } else {

            totalEverest += numPeople;
        }
        
    }
    
    let totalPeople = totalMusala + totalMonblan + totalKilimanjaro + totalK2 + totalEverest;
    let pMusala = totalMusala / totalPeople * 100;
    let pMonblan = totalMonblan / totalPeople * 100;
    let pKilimanjaro = totalKilimanjaro / totalPeople * 100;
    let pK2 = totalK2 / totalPeople * 100;
    let pEverest = totalEverest / totalPeople * 100;

    console.log(`${pMusala.toFixed(2)}%`);
    console.log(`${pMonblan.toFixed(2)}%`);
    console.log(`${pKilimanjaro.toFixed(2)}%`);
    console.log(`${pK2.toFixed(2)}%`);
    console.log(`${pEverest.toFixed(2)}%`);
}

trekking(["5",
"25",
"41",
"31",
"250",
"6"]);