function onTimeForTheExam(input) {

    let examHours = Number(input[0]); // 0-23
    let examMinutes = Number(input[1]); // 0-59
    let attendanceHours = Number(input[2]); // 0-23
    let attendanceMinutes = Number(input[3]); // 0-59

    let timeExam = examHours * 60 + examMinutes;
    let timeAttendance = attendanceHours * 60 + attendanceMinutes;

    if (timeExam < timeAttendance) {

        console.log("Late");

    } else if (timeExam - timeAttendance <= 30) {

        console.log("On time");

    } else {

        console.log("Early");

    }

    
}

onTimeForTheExam(["9",
"00",
"7",
"59"]);