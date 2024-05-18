function onTimeForTheExam(input) {

    let hoursExam = Number(input[0]); // 0-23
    let minutesExam = Number(input[1]); // 0-59
    let hoursArrive = Number(input[2]);
    let minutesArrive = Number(input[3]);

    let timeArrive = hoursArrive * 60 + minutesArrive;
    let timeExam = hoursExam * 60 + minutesExam;

    let diff = Math.abs(timeArrive - timeExam);
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;

    if(timeExam < timeArrive) {

        console.log("Late");
            if (hours > 0){

                if(minutes < 10) {

                    console.log(`${hours}:0${minutes} hours after the start`);
                } else {

                    console.log(`${hours}:${minutes} hours after the start`);
                }
            } else {

                console.log(`${minutes} minutes after the start`);
            }

    } else if (timeExam - timeArrive <= 30) {

        console.log("On time");

            if(minutes > 0) {

                console.log(`${minutes} minutes before the start`);
            }
    } else {

        console.log("Early");

            if(hours > 0) {

                if(minutes < 10){

                    console.log(`${hours}:0${minutes} hours before the start`);
                } else {

                    console.log(`${hours}:${minutes} hours before the start`);
                }
            } else {

                console.log(`${minutes} minutes before the start`)
            }
    }

}

onTimeForTheExam(["9",
"00",
"8",
"30"]);