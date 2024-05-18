function building(input) {

    let floorsCount = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    for(let currentFloor = floorsCount; currentFloor >= 1; currentFloor--) {

        let currentFloorRooms = '';

        for(let currentRoom = 0; currentRoom < roomsPerFloor; currentRoom++) {

            if(currentFloor === floorsCount) {

                currentFloorRooms += `L${currentFloor}${currentRoom} `;

            } else if (currentFloor % 2 === 0) {

                currentFloorRooms += `O${currentFloor}${currentRoom} `;

            } else {

                currentFloorRooms += `A${currentFloor}${currentRoom} `;

            }

        }


        console.log(currentFloorRooms);
    }


}

building();