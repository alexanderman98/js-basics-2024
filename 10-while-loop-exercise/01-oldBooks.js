function oldBooks(input) {

    

    let command = String(input[0]);

    let index = 1;
    let titles = String(input[index]);
    index++

    let books = 0;

    while(command !== titles) {

        

        if(titles === "No More Books") {

            console.log("The book you search is not here!");
            console.log(`You checked ${books} books.`);
            return;
        } else if (input.length <= books) {

            console.log("The book you search is not here!");
            console.log(`You checked ${books} books.`);

            return;
        } 

        books++;
        titles = String(input[index]);
        index++;

    }

    console.log(`You checked ${books} books and found it.`)

}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);