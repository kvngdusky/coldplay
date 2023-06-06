"use strict";
/*
// Challenge 1.1

// Data 1
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

// Data 2
// const markWeight = 95;
// const markHeight = 1.88;

// const johnWeight = 88;
// const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// Challenge 1.2

// Data 1
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

// Data 2
// const markWeight = 95;
// const markHeight = 1.88;

// const johnWeight = 88;
// const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's!");
} else if (johnBMI > markBMI) {
  console.log("John's BMI is higher than Mark's!");
}

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI} is higher than John's (${johnBMI})!`);
} else if (johnBMI > markBMI) {
  console.log(`John's BMI (${johnBMI} is higher than Mark's (${markBMI})!`);
}

// Challenge 1.3

// Data
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Team Dolpins WINS! 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Team Koalas WINS! 🏆");
// } else {
//   console.log("It's a DRAW! 🤝");
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//   console.log("Team Dolpins WINS! 🏆");
// } else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
//   console.log("Team Koalas WINS! 🏆");
// } else {
//   console.log("It's a DRAW! 🤝");
// }

// BONUS 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
  console.log("Team Dolpins WINS! 🏆");
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
  console.log("Team Koalas WINS! 🏆");
} else if (
  scoreDolphins >= 100 &&
  scoreKoalas >= 100 &&
  scoreDolphins === scoreKoalas
) {
  console.log("It's a DRAW! 🤝");
} else {
  console.log("No Team WIN! 😒");
}

// Challenge 1.4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

//Challenge 2.1

// Data 1
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins Win (${avgDolphins} vs ${avgKoalas}) 🏆`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas Win (${avgKoalas} vs ${avgDolphins}) 🏆`);
  } else {
    console.log("No Team Wins 😒");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);

// Challenge 2.2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = new Array(125, 555, 44);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// Challenge 2.3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark["fullName"]}'s BMI (${mark["bmi"]}) is higher than ${john["fullName"]}'s (${john["bmi"]})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john["fullName"]}'s BMI (${john["bmi"]}) is higher than ${mark["fullName"]}'s (${mark["bmi"]})`
  );
}
*/

// Challenge 2.4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
console.log(bills, tips, totals);

// BONUS

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));
