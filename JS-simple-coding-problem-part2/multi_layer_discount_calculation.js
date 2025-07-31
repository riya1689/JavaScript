/**discountt
 * 1.if you purchase product >= 200tk we will get 20% discount all over the product
 * 2.type 2
 * if purchase product >=200 ,you will get discount 5% later on 10 product
 * first 100 --> 100
 * 101 to 200 --> 90
 * above 200 --> 70
 */
function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}
const total = discountedPrice(201);
console.log(total);

function layerDiscountTotal(quantity){
    const first100Price =100;
    const second100Price = 90;
    const above200Price =70;
    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <=200){
        const first100Total = 100* first100Price;
        const remainingQuantity = quantity -100;
        const remainingTotal = remainingQuantity**second100Price;
        const total = first100Total+remainingTotal;
        return total;
    }
    else{
        const first100Total =100*first100Price;
        const second100Total = 100* second100Price;
        const remainingQuantity = quantity -200;
        const remainingTotal = remainingQuantity * above200Price00Price;
        const total = first100Total + second100Total+remainingTotal;
        return total;
    }
}
const total2 = layerDiscountTotal(201);
console.log(total2);   