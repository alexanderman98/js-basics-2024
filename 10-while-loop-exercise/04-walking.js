function walking(input) {

    let stepsGoal = 10000;


    let dailySteps = input[0];


    let stepsSoFar = 0;

    let index = 1;




    while (dailySteps !== "Going home") {

        let steps = Number(dailySteps);

        stepsSoFar += steps;

        if (stepsGoal <= stepsSoFar) {
            
            break;
        
        }

        dailySteps = input[index];
        index++;

    }

    if (dailySteps === "Going home") {

        
        let stepsAfter = Number(input[index]);
        index++;
        stepsSoFar += stepsAfter;

    }

    let diff = Math.abs(stepsGoal - stepsSoFar);

    if (stepsSoFar >= stepsGoal) {

        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);

    } else {

        console.log(`${diff} more steps to reach goal.`)

    }
}

walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])