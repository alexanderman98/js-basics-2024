function cinemaTickets(input) {

    let index = 0;
    let allStudentTickets = 0;
    let allStandartTickets = 0;
    let allKidTickets = 0;

    while (input[index] !== 'Finish') {

        let movieName = input[index];
        let availableSeats = input[index + 1];
        index += 2;

        let allTakenSeats = 0;

        while (

            input[index] === 'student' ||
            input[index] === 'standard' ||
            input[index] === 'kid' ||
            input[index] === 'End'

        ) {
            switch (input[index]) {

                case "student":
                    allTakenSeats++;
                    allStudentTickets++;
                    break;

                case "standard":
                    allTakenSeats++;
                    allStandartTickets++;
                    break;

                case "kid":
                    allTakenSeats++;
                    allKidTickets++;
                    break;
            }

            index++;

        }

        console.log(`${movieName} - ${((allTakenSeats / availableSeats) * 100).toFixed(2)}% full.`);

    }

    let allTickets = allKidTickets + allStandartTickets + allStudentTickets;

    console.log(`Total tickets: ${allTickets}`);
    console.log(`${((allStudentTickets / allTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((allStandartTickets / allTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((allKidTickets / allTickets) * 100).toFixed(2)}% kids tickets.`);
    
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);