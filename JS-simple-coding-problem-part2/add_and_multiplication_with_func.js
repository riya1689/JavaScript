function woodQuantity(chairQuantity, tableQuantity, BedQuantity){
    const perChairWood =3;
    const perTableWood =10;
    const perBedWood = 50;
    const chairTotalWood = chairQuantity*perChairWood;
    const tableTotalWood = tableQuantity* perTableWood;
    const BedTotalWood = BedQuantity * perBedWood;
    const totalWood = chairTotalWood + tableTotalWood+ BedTotalWood;
    return totalWood;
}
const wood = woodQuantity(0, 0, 1);
console.log('wood needed', wood);