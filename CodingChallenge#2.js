//Data1
var massMark = 78
var heightMark = 1.69

var massJohn = 92
var heightJohn = 1.95

var markBMI = massMark / (heightMark * heightMark)
var johnBMI = massJohn / (heightJohn * heightJohn)

//Data 2
var massMark2 = 95
var heightMark2 = 1.88

var massJohn2 = 85
var heightJohn2 = 1.76

var markBMI2 = massMark2 / (heightMark2 * heightMark2)
var johnBMI2 = massJohn2 / (heightJohn2 * heightJohn2)

//Task1
console.log(`Mark BMI is ${markBMI.toFixed(2)} and John BMI is ${johnBMI.toFixed(2)}.`);

if (markBMI > johnBMI) {
    console.log(`Mark has BMI higher than John `)
} else {
    console.log(`John has BMI higher than Mark `)
}

//Task2
console.log(`Mark BMI is ${markBMI2.toFixed(2)} and John BMI is ${johnBMI2.toFixed(2)}.`);

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI is ${markBMI2.toFixed(2)} is higher than John ${johnBMI2.toFixed(2)}.`);
} else {
    console.log(`John's BMI is ${markBMI2.toFixed(2)} is higher than Mark ${johnBMI2.toFixed(2)}.`);
}