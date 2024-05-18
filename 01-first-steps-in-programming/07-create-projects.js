function createProject(input){
let architectName = input[0];
let numberOfProjects = input[1];
let hoursNeeded = 3 * numberOfProjects;

console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${numberOfProjects} project/s.`);

}

createProject(['Yordan', 9]);