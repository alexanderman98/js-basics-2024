function examPrep(input) {

    let numNotLikableGrades = Number(input[0]);
    let sumNotLikableGrades = 0;
    
    let index = 1;
    let nameTask = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let gradeSum = 0;
    let gradeNum = 0;
    let lastTask = 0;

    while(nameTask !== "Enough"){

        
        gradeSum += grade;
        gradeNum++
        
        if(grade <= 4) {

            sumNotLikableGrades++;

            if(numNotLikableGrades == sumNotLikableGrades) {

                console.log(`You need a break, ${sumNotLikableGrades} poor grades.`)
                return;
            }

        }

        nameTask = input[index];
        index++;

        lastTask == nameTask;
        
            grade = Number(input[index]);
            index++;


            
        
        
        

    }
    lastTask = input[index - 4];
    let averageGrade = gradeSum / gradeNum;

    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradeNum}`);
    console.log(`Last problem: ${lastTask}`);

}

examPrep(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);
            //Вход
    //•	На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
    //•	След това многократно се четат по два реда:
    //o	Име на задача - текст (низ)
    //o	Оценка - цяло число в интервала [2…6]

            //Изход
    //•	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда: 
    //o	"Average score: {средна оценка}"
    //o	"Number of problems: {броя на всички задачи}"
    //o	"Last problem: {името на последната задача}"
    
    //•	Ако получи определеният брой незадоволителни оценки:
    //o	"You need a break, {брой незадоволителни оценки} poor grades."
    //Средната оценка да бъде форматирана до втория знак след десетичната запетая. 
