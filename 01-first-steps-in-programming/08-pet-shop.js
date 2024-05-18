function petShop(input){

    let numberOfPacketsForDogs = input[0];
    let numberOfPacketsForCats = input[1];
    let sumPacketsForDogs = 2.50 * numberOfPacketsForDogs;
    let sumPacketsForCats = 4 * numberOfPacketsForCats;
    let totalSum = sumPacketsForDogs + sumPacketsForCats;

    console.log(`${totalSum} lv.`);

}

petShop([13, 9]);