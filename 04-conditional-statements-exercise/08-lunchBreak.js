function lunchBreak(input) {

    let seriesName = input[0];
    let episodeTime = Number(input[1]);
    let restTime = Number(input[2]);

    let timeForLunch = restTime / 8;
    let timeForRest = restTime / 4;

    restTime = restTime - (timeForLunch + timeForRest);

    if (restTime >= episodeTime) {
        let timeLeft = Math.ceil(restTime - episodeTime);
        console.log(`You have enough time to watch ${seriesName} and left with ${timeLeft} minutes free time.`);

    } else {

        let timeLeft = Math.ceil(episodeTime - restTime);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeLeft} more minutes.`);
    }


}

lunchBreak(["Teen Wolf",
"48",
"60"]);