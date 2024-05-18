function foodDelivery(input){

    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let veganMenuPrice = 8.15;

    
    let deliveryPrice = 2.50;

    let numberChickenMenu = Number(input[0]);
    let numberFishMenu = Number(input[1]);
    let numberVeganMenu = Number(input[2]);

    let chickenMenuTotalPrice = numberChickenMenu * chickenMenuPrice;
    let fishMenuTotalPrice = numberFishMenu * fishMenuPrice;
    let veganMenuTotalPrice = numberVeganMenu * veganMenuPrice;

    let totalPriceMenus = chickenMenuTotalPrice + fishMenuTotalPrice + veganMenuTotalPrice;
    let desertPrice = 20 / 100 * totalPriceMenus;
    let totalOrderPrice = totalPriceMenus + desertPrice + deliveryPrice;

    console.log(totalOrderPrice);
}

foodDelivery([9, 2, 6]);