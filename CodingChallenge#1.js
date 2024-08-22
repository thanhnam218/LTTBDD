//Data1
var massMark = 78
var heightMark = 1.69

var massJohn = 92
var heightJohn = 1.95

var markBMI = massMark / (heightMark * heightMark)
var johnBMI = massJohn / (heightJohn * heightJohn)

//Data 2
var massMark2 = 78
var heightMark2 = 1.69

var massJohn2 = 92
var heightJohn2 = 1.95

var markBMI2 = massMark2 / (heightMark2 * heightMark2)
var johnBMI2 = massJohn2 / (heightJohn2 * heightJohn2)

var markHigherBMI = markBMI > johnBMI;

var markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Mark BMI is ${markBMI.toFixed(2)} and John BMI is ${johnBMI.toFixed(2)}.`);
console.log(` Mark has a BMI higher than John ${markHigherBMI}`)
console.log(`Mark BMI is ${markBMI2.toFixed(2)} and John BMI is ${johnBMI2.toFixed(2)}.`);
console.log(` Mark has a BMI higher BMI than John ${markHigherBMI2}`)