// code for Problem-01

function newPrice(currentPrice, discount) {
    // Your code here
    const discountMoney = currentPrice*discount/100;
    console.log("discount: ",discountMoney);
    const finalPayment = currentPrice -discountMoney;
    console.log("final Payment: " ,finalPayment);
}
newPrice(1500,20);