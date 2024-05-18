function vacationBook(input){

    let bookNumberOfPages = Number(input[0]);
    let pagesReadOneHour = Number(input[1]);
    let numberOfDays = Number(input[2]);
    
    let sumHours = bookNumberOfPages / pagesReadOneHour;
    let hoursForDay = sumHours / numberOfDays;

    console.log(hoursForDay);
}

vacationBook([432, 15, 4]);