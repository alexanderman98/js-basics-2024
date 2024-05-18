function swimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let rangeInMetres = Number(input[1]);
    let timeInSecondsForMetre = Number(input[2]); // for 1 metre

    let resistance = Math.floor(rangeInMetres / 15) * 12.5; // every 15 metres

    let totalSeconds = rangeInMetres * timeInSecondsForMetre;
    let totalTime = totalSeconds + resistance;
    let timeAfterResistance = recordInSeconds - totalTime;


    if (recordInSeconds <= totalTime) {
        
       let timeNeeded = Math.abs(timeAfterResistance);
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
       
    } else {

        
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }

}

swimmingRecord(["10464",
"1500",
"20"]);

