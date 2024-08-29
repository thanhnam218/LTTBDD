myBills = [125, 555, 44];
const billCalc = Math.floor(Math.random() * myBills.length);
const randomBill = myBills[billCalc];

function calcTip(bill) {
    const percent = getMultiplier(bill);

    const finalTip = bill * percent / 100;
    console.log(`The bill for the table is ${bill}, 
    and the tip is : ${finalTip}.
    The final payment is: ${bill + finalTip}`);
    return finalTip;
}

function getMultiplier(bill) {
    if (bill > 50 && bill < 300) {
        return 15;
    } else {
        return 20;
    }
}

const tipSave = calcTip(randomBill);