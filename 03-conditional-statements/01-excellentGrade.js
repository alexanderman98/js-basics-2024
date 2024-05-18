function excellentGrade(input){
    let grade = Number(input[0]);

    if (grade >= 5.50) {
        console.log('Excellent!');
    }
    else {
        console.log('You have to work harder!');
    }
}

excellentGrade([5]);