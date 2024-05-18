function password(input) {

    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let passwordType = input[index];
    index++;

    while (password !== passwordType) {

        passwordType = input[index];
        index++;

    }

    console.log(`Welcome ${username}!`);

}

password(["Gosho",
"secret",
"secret"])
;