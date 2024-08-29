var mark = {
    name: 'Mark Miller', // key: value
    mass: '78',
    height: '1.69',
    calcBMI: function() {
        this.bmi = this.mass / Math.pow(this.height, 2);

    }
}

mark.calcBMI();
console.log(mark);

var john = {
    name: 'John Smith',
    mass: '92',
    height: '1.95',
    calcBMI: function() {
        this.bmi = this.mass / Math.pow(this.height, 2);
    }
}

john.calcBMI();
console.log(john);

if (mark.bmi > john.bmi) {
    console.log(mark.name + ' has a higher BMI');
} else if (mark.bmi < john.bmi) {
    console.log(john.name + ' has a higher BMI');
} else {
    console.log(mark.name + ' and ' + john.name + ' has the same BMI');
}