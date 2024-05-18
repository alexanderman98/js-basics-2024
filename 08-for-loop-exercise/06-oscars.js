function oscars(input) {

    let index = 0;
    let actorName = String(input[index]);
    index++;
    let pointsAcademy = Number(input[index]);
    index++
    let numGraders = Number(input[index]);
    index++;

    for(let i = 1; i <= numGraders; i++) {

        let name = input[index];
        index++;
        let points = Number(input[index]);
        index++;
        let result = name.length * points / 2;

        pointsAcademy += result;

        if(pointsAcademy >= 1250.5){
            break;
        }

    }

    if(pointsAcademy >= 1250.5) {

        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsAcademy.toFixed(1)}!`);
    } else {

        let diff = 1250.5 - pointsAcademy;
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }

}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);