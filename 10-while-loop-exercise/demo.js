function walking(input) {

    let stepsGoal = 10000;

    
    let dailySteps = Number(input[0]);
    

    let stepsSoFar = 0;
    let diff = 0;

    let stepsAfter = 0;

    let index = 1;

    while(dailySteps) {

        

        if(dailySteps === "Going home") {

            
            stepsAfter = Number(input[index]);
            index++;
            stepsSoFar += stepsAfter;

            break;

        }

        stepsSoFar += Number(dailySteps);

        dailySteps = input[index];
        index++;

    

    
        
    
    }

    

    if(stepsGoal > stepsSoFar) {
        
        
        diff = stepsGoal - stepsSoFar;

        console.log(`${diff} more steps to reach goal.`)

    } else {

        
        diff = stepsSoFar - stepsGoal;

        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);

    }
}


walking(["1000",
"1500",
"2000",
"6500"])
;