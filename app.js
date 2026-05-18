
const tags = ["js", "week3"];
const scores = [10, 25, 18, 30];


let totalScore = 0;
for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
}
console.log("Total Score:", totalScore); 

console.log("--- Tags Loop ---");
tags.forEach(tag => {
    console.log(tag);
});


const doubledScores = scores.map(score => {
    return score * 2;
});
console.log("Doubled Scores:", doubledScores);