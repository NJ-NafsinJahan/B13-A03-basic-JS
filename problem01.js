// code for Problem-01

function newPrice(currentPrice, discount) {
    // Your code here
        if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount<0 || discount > 100) {
        console.log("Invalid");
        return 'Invalid';
    }
    // if (discount < 0 || discount > 100 ){
    //     console.log("Invalid");
    //     return 'Invalid';
    // }
    const discountMoney = currentPrice * discount/100;
    console.log("discount: ",discountMoney);
    const finalPayment = currentPrice -discountMoney;
    console.log("final Payment: " ,finalPayment.toFixed(3));
    return finalPayment;
}
console.log('-----------');
// newPrice(1500,20);
// newPrice(2000,15);
// newPrice(1200, 7);
// newPrice("1000", 10);
// newPrice(2000, 17.17);
// console.log("-----------");
newPrice(500, "5");
newPrice(500,100.1);
// newPrice([1,2,3]);
// newPrice(500, -3);
// newPrice(500,0);



// ----------------

// function newPrice(currentPrice, discount) {
//    if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount<0 || discount > 100){
//         // console.log("invalid");
//         return 'Invalid';
//     }
//     const discountMoney = currentPrice*discount/100;
//     // console.log("discount: ",discountMoney);
//     const finalPayment = currentPrice -discountMoney;
//     // console.log(finalPayment.toFixed(3));
//     return finalPayment.toFixed(3);

// }