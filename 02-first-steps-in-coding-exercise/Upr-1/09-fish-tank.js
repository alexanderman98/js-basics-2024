function fishTank(input){

    let lenghtInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let occupiedSpace = Number(input[3]);

    let volumeOfAquarium = lenghtInCm * widthInCm * heightInCm;
    let volumeInLitres = volumeOfAquarium / 1000;
    let percentage = occupiedSpace / 100;
    let neededLitres = volumeInLitres * (1 - percentage);

    console.log(neededLitres);

}

fishTank([105, 77, 89, 18.5]);