function basket(input){
    
    let yearTax = Number(input[0]);

    let shoesBasketPrice = yearTax - (yearTax * 40 / 100);
    let outfitPrice = shoesBasketPrice - (shoesBasketPrice * 20 / 100);
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let totalPrice = yearTax + shoesBasketPrice + outfitPrice + ballPrice + accessoriesPrice;
    console.log(totalPrice);

}

basket([550]);