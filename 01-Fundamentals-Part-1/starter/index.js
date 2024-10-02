console.log("Helloo World")

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA `122: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/*
const marksWeights = 78;
const marksHeight = 1.95;

const johnWeight = 92;
const johnHeight = 1.95;

const marksBMI = marksWeights/ (marksHeight * 2)
const johnBMI = johnWeight / (johnHeight * 2)

const markHigherBMI = marksBMI > johnBMI;

if(markHigherBMI) {
    alert("Marks have a higher BMI ")
}else{
    alert("John have a higher BMI") 
}
*/



////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

const dolphinsAVG = (96 + 108 + 89) / 3;
const KoalasAVG = (88 + 95 + 110) / 3;

console.log(dolphinsAVG)

if(dolphinsAVG > KoalasAVG && dolphinsAVG >= 100){
    console.log("Dolphins is the winner")
}else if(KoalasAVG > dolphinsAVG && KoalasAVG >= 100){
    console.log("Koalas is the winner")
}else if(KoalasAVG === dolphinsAVG && dolphinsAVG >= 100 && KoalasAVG >= 100){
    console.log("Both are win")
}else{
    console.log("No one is wine the trophy!")
}