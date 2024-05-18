function squareFigures(input){

    let figure = (input[0]);
    
    if (figure === "square") {

        let lenght = Number(input[1]);
        console.log((lenght * lenght).toFixed(3));
    } else if (figure === "rectangle") {

        let lenght1 = Number(input[1]);
        let lenght2 = Number(input[2]);
        console.log((lenght1 * lenght2).toFixed(3));
    } else if (figure === "circle") {
        
        let radius = Number(input[1]);
        console.log((3.14159265359 * radius * radius).toFixed(3));
    } else if (figure === "triangle") {

        let lenght = Number(input[1]);
        let height = Number(input[2]);
        console.log((lenght * height / 2).toFixed(3));
    } else {

        console.log("undefined");
    }
}

squareFigures(["rectangle", 2, 0]);