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
// mass / (height * height)
