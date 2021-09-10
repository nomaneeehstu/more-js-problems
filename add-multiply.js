/*
chairWood = 3 cft/chair
tableWood = 10 cft/table
bedWoood = 50 cft/bed
*/


function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totallWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totallWood;
}

const totalWoodRequired = woodCalculator(1, 1, 1);
console.log(totalWoodRequired);