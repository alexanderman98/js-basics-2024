function newHouse(input) {

    let flowerType = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let cost = 0;

    switch (flowerType){

        case 'Roses':
            let roses = 5;
            cost = numberOfFlowers * roses;

            if(numberOfFlowers > 80){

                cost *= 0.90;
                
            } 
        break;

        case 'Dahlias':

            let dahlias = 3.80;
            cost = numberOfFlowers * dahlias;

            if (numberOfFlowers > 90) {

                cost *= 0.85;
            }
            break;

        case 'Tulips':

            let tulips = 2.80;
            cost = numberOfFlowers * tulips;

            if(numberOfFlowers > 80){

            cost *= 0.85;

            }
            break;

        case 'Narcissus':

            let narcissus = 3;
            cost = numberOfFlowers * narcissus;

            if (numberOfFlowers < 120) {
 
                cost *= 1.15;
            
            }
            break;

        case'Gladiolus':

            let gladiolus = 2.50;
            cost = numberOfFlowers * gladiolus;

            if(numberOfFlowers < 80) {
            
            cost *= 1.20;

            }
        
        break;

        default:
            
                console.log("error");
        
            break;
            
        }
        
        

        if(cost <= budget) {
            
            let diff = Math.abs(budget - cost);
            console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowerType} and ${diff.toFixed(2)} leva left.`);

        } else {
            
            let diff = Math.abs(budget - cost);
            console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);

        }

    }

newHouse(["Narcissus",
"119",
"360"]);