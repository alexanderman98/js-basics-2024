function graduation(input) {
    
    

        let index = 0;
        let studentName = input[index];
        index++;
        
        let grade = Number(input[index]);
        index++;
        
        let gradeSum = 0;
        let countFail = 0;
        let year = 1

        while (year <= 12) {

            gradeSum += grade;

            if(grade < 4) {
                
                
                countFail++;
                

                if(countFail > 1){

                    console.log(`${studentName} has been excluded at ${year} grade`);
                    return;
                }


            } else {

                
                year++

            }

            grade = Number(input[index]);
            index++;

        }
        
        
        let averageGrade = gradeSum / 12;

        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`)
        
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
;