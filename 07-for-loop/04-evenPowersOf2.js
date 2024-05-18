function evenPowersOf2(input) {

    let n = Number(input[0]);
    let result = 0;
   
    for(let i = 0; Math.pow(2, i) <= Math.pow(2, n); i += 2){
        
            result = Math.pow(2, i);
        
            console.log(result);

    }

}

evenPowersOf2(["5"]);