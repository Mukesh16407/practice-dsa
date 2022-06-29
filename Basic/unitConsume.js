function unitsConsumed(n) {
    //write code here
    const fixedCharge = 80;
    
    let price = n - fixedCharge;
    
    if(price <= 150){
        console.log(price/3)
    }else if(price > 150 && price <=650){
        console.log(50 +(price-150)/5)
    }else if(price >650){
        console.log(150 + (price-650)/10)
    }
    
    
}
unitsConsumed(700)