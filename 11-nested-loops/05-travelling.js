function travelling(input) {

    let command = input[0];
    let index = 1;

    while(command !== "End") {

        let destination = command;
        let budget = Number(input[index]);
        index++;

        let moneySaved = 0;

        while (moneySaved < budget){

            let currentMoneySaved = Number(input[index]);
            index++;

            moneySaved += currentMoneySaved;

        }

        console.log(`Going to ${destination}!`);

        command = input[index];
        index++;

    }

}

travelling();