function moving(input) {

    let width = Number(input[0]);
    let height = Number(input[1]);
    let length = Number(input[2]);

    let index = 3;

    let fullRoomSize = width * height * length;
    let usedSize = 0;

    while (usedSize < fullRoomSize) {

        if(input[index] === "Done"){
            break;
        }

        usedSize += Number(input[index]);
        index++;

    }

    if(usedSize < fullRoomSize) {

        console.log(`${fullRoomSize - usedSize} Cubic meters left.`);

    } else {

        console.log(`No more free space! You need ${usedSize - fullRoomSize} Cubic meters more.`);

    }


}

moving();