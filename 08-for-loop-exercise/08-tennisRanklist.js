function tennisRanklist(input) {

    let index = 0;
    let tournaments = Number(input[index]);
    index++
    let startPoints = Number(input[index]);
    index++;

    let momentum = 0;
    let countWins = 0;
    let countGames = 0;

    for(let i = 0; i <= tournaments; i++) {

        let standings = String(input[index]);
        index++;

        if(standings === "W") {

            momentum += 2000;
            countWins++;
            countGames++;
            
        } else if(standings === "F") {

            momentum += 1200;
            countGames++;
            
        } else if (standings === "SF") {

            momentum += 720;
            countGames++;

        }

    }

    let finalPoints = startPoints + momentum;

    let averagePoints = momentum / tournaments; // for the momentum

    let averageWinPercentage = countWins / countGames * 100; 


    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${averageWinPercentage.toFixed(2)}%`);

}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);