function clock() {

    let hours = 0;
    let minutes = 0;

    while(hours !== 24) {

        
        for(let i = minutes; i < 60; i++){
    
            
            console.log(`${hours}:${i}`);
        
        }
        hours++;

    }

}

clock();