function calculateElectronicsBudget(laptopCount, tabletCount, mobileCount) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const total = (laptopCount * laptopPrice) +(tabletCount * tabletPrice) +(mobileCount * mobilePrice);
    return total;
}

const totalBudget = calculateElectronicsBudget(1, 2, 3);
console.log("Total budget required:", totalBudget + " tk");
