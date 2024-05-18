function trainTheTrainers(input) {

    let juryCount = Number(input[0]);
    let index = 1;
    let allCoursesCount = 0;
    let allCoursesEstimate = 0;

    while (input[index] !== 'Finish') {

        let courseName;
        let courseEstimatesSum = 0;

        for (let col = 0; col <= juryCount; col++) {

            if(col === 0) {

                courseName = input[index];
            } else {

                courseEstimatesSum += Number(input[index]);
            }

            index++;

        }

        allCoursesEstimate += courseEstimatesSum;
        allCoursesCount++;

        console.log(`${courseName} - ${(courseEstimatesSum / juryCount).toFixed(2)}.`);

    }

    console.log(`Student's final assessment is ${(allCoursesEstimate / juryCount / allCoursesCount).toFixed(2)}.`);

}

trainTheTrainers();