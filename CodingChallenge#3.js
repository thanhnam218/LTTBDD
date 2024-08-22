//Data1
const DolphinsScore = [97, 112, 111];
const KoalasScore = [109, 95, 106];

const calculateAverageScore = (scores) => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};
const dolphinsAverage = calculateAverageScore(DolphinsScore);
const koalasAverage = calculateAverageScore(KoalasScore);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins win the competition with an average score of ${dolphinsAverage}! `);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas win the competition with an average score of ${koalasAverage}! `);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log(`It's a draw with both teams having an average score of ${dolphinsAverage}! `);
} else {
    console.log("No team wins the trophy.");
}