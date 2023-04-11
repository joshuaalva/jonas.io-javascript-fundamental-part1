// let firstName = "Joshua";
// console.log(firstName);

// let country = "United States";
// let continent = "North America";
// let population = "too many";

// true; // automatically a boolean value
// console.log(true);

// let javascriptIsFun = true;
// // js programs are run from top to bottom or scoped top to bottom so the declaration
// // has to come before you console log it
// console.log(javascriptIsFun);

// console.log(typeof 42);
// // Expected output: "number"

// console.log(typeof "blubber");
// // Expected output: "string"

// console.log(typeof true);
// // Expected output: "boolean"

// console.log(typeof undeclaredVariable);
// // Expected output: "undefined"

// console.log(typeof true);
// // Expedted output: "boolean"

// // always use quotes in order to create a string

// console.log(typeof "jonas");
// // Expected output: "string"
// console.log(typeof jonas);
// // Expected output: "undefined" b/c it is not a string

// // dynamic typing
// javascriptIsFun = "YES"; // new value do not right the let keyword
// console.log(javascriptIsFun);
// // Expected output: YES
// console.log(typeof javascriptIsFun);
// //Expected output: "string"; // was a boolean first it is now string

// // number string and boolean are the three most used
// // undefined

// let year; // to define a variable without a value
// console.log(year);
// console.log(typeof year);
// // value and type are undefined
// year = 1991;
// console.log(typeof year);
// // Expected output: "number"

// let age = 30;
// age = 29; // "mutating" a variable
// console.log(age);

// const now = 2037;

// const ageJonas = now - 1993;
// console.log(ageJonas);
// // Expected output: 44

// const ageSarah = now - 2018;
// console.log(ageSarah);
// // Expected output: 19

// console.log(ageJonas, ageSarah);
// // Expected output: 44 19

// // we have 2037 appearing twice and we dont want that
// // we can save it to a variable 'now' representing current year to make the code cleaner

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// // console.log(firstName + lastName)
// // Expected output: JonasSchmedtmann
// console.log(firstName + " " + lastName);
//Expected output: Jonas Schmedtmann

// Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--; // opposite of ++ decrease by one
// console.log(x);

// Comparison Operators
// console.log(ageJonas > ageSarah);
// Expected output: true
// console.log(ageSarah >= 18); // includes 18
// Excpted output: true;
// < 18 as in 17 or less would be false
// const isFullAge = ageSarah > -18;
// console.log(now - 1991 > now - 2018);

// Operator Precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// const averageAge = ageJonas + ageSarah / 2
// Expected output: ageSarah / 2 + Jonas = 55.5 (not what we want)

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(averageAge);
// Expected output: 32.5

// Coding Challenge # 1

// const marksWeight = 78;
// const marksHeight = 1.69;

// const johnsWeight = 92;
// const johnsHeight = 1.95;

// const johnsBMI = johnsWeight / johnsHeight ** 2;
// console.log(johnsBMI);
// const marksBMI = marksWeight / marksHeight ** 2;
// console.log(marksBMI);

// const compareBMI = marksBMI > johnsBMI;
// // Expected output: True;
// console.log(compareBMI);

// do not forget to use variables do not waste time type in manually
// originally I didn't save i just used the numbers in

// Strings and Tempelate Literals
// const firstName = `Joshua`;
// const job = `Bartender`;
// const birthYear = 1993;
// const year = 2023;

// i skipped the concatination and went straight to the template literal
// use backticks
// ${} variable inside the brackets

// const joshua = `I'm ${firstName} I am ${
//   year - birthYear
// } years old and I am a ${job}`;
// console.log(joshua);

// couldn't do multiple line strings before you can now with backticks
// console.log(`string with
// multiple
// lines`);

// Taking Decision if/else statements

// const age = 15;

// if (age >= 18) {
//   console.log(`you can get your license`);
// } else {
//   console.log(`This human is too young wait another ${18 - age} years :)`);
// }

// const birthYear = 1993;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// Lecture Taking Decisions: if/else Statements PDF
// let countriesPop = 33000000;
// let avgPop = 13;

// if (avgPop > 33000000) {
//   console.log(`Portugal's population is above average`);
// } else {
//   console.log(`Portugals population is ${countriesPop - avgPop} below average`);
// }

// Coding Challenge #2

// const marksWeight = 78;
// const marksHeight = 1.69;

// const johnsWeight = 92;
// const johnsHeight = 1.95;

// const johnsBMI = johnsWeight / johnsHeight ** 2;
// console.log(johnsBMI);
// const marksBMI = marksWeight / marksHeight ** 2;
// // console.log(marksBMI);

// const compareBMI = marksBMI > johnsBMI;
// Expected output: True;
// console.log(compareBMI);

// if (marksBMI > johnsBMI) {
//   console.log(
//     `Marks BMI ${Math.round(marksBMI)}% is higher than John's ${Math.round(
//       johnsBMI
//     )}%!`
//   );
// } else {
//   console.log(
//     `${Math.round(johnsBMI)}% is higher than Mark's ${Math.round(marksBMI)}%!`
//   );
// }

// Expected output: Marks BMI 27% is higher than John's 24%!
// I added Math.round for the excercise just to make it look prettier but it works as intended!

//Type Conversion and Coercion

// Type Conversion
// const inputYear = "1991"; // string
// console.log(inputYear + 18);
// Expected output: 199118 -- concatinates the string and the 18 instead of giving us what we want
// must convert string to a number

// const inputYear = "1991";
// console.log(Number(inputYear)); // Expected output: 1991
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18); // Expected output: 2009
// does not change the actual inputYear variable
// console.log(Number("Joshua")); // Returns: NaN this will not work

// console.log(typeof NaN); // Expected output: Number
// console.log(String(23), 23); // Expected output: '23' & 23 (one a string one a number)

// Type Coercion
// console.log("I am " + 23 + " years old"); // this is coercion happening behind the scenes
// Expected output: I am 23 years old
// the + operator will convert numbers into strings

// let n = "1" + 1; // string + number smashes them together
// Expected output: 11
// console.log(n);
// n = n - 1;
// 11 - 1
// console.log(n);
// Expected output: 10

// Lecture: Type Conversion and Coercion
// console.log("9" - "5"); // 4
// console.log("19" - "13" + "17"); // 617
// console.log("19" - "13" + 17); // 23
// console.log("123" < 57); // false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Joshua")); // true
// console.log(Boolean({})); // true

// const money = 0;
// money is 0 javascript trys to coerce whatever is in the if statement into a boolean
// money is 0, 0 is a falsey value
// if (money) {
//   console.log(`Don't spend it all`);
// } else {
//   console.log(`You should get a job!`);
// }

// You should get a job will run unless money is truthy

// let height;
// height is undefined

// if (height) {
//   console.log(`yayy height is defined`);
// } else {
//   console.log(`height is undefined`);
// }

// height in the logical context will turn into a boolean. undefined is falsy. it will run else until (height) is changed

// Equality Operators == vs ===

// const age = 18;

// === is a comparsion operator meaining exactly 18
// a strict operator
// == loose equality operator
// loose equality does type coercion the === does not

// if (age === 18) console.log(`You just became an adult`);

// const favorite = prompt(`what is your favorite Bad Bunny song`);
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite == 23) {
// double equals does type coercion this will be true --> 23 will be coerced into a string
//   console.log(`cool! 23 is an amazing number`);
// } else if(favorite === 7) {
//     console.log(`seven is also a cool number`)
// }

// if (favorite === 23) {
// double equals does type coercion this will be true --> 23 will be coerced into a string
//   console.log(`cool! 23 is an amazing number`);
// } else if (favorite === 7) {
//   console.log(`seven is also a cool number`);
// } else {
//   console.log(`number is not 23 or 7`);
// }

// if (favorite != 23) {
//   console.log(`why not 23`);
// }

// Lecture: Equality Operators
// const numNeighbors = prompt(
//   `How many neighbor countries does your country have?`
// );
// if (numNeighbors == 1) {
//   console.log(`only 1 border`);
// } else if (numNeighbors > 1) {
//   console.log(`more than 1 border`);
// } else {
//   console.log(`no borders`);
// }

// Boolean Logic
// AND, OR, Not
// &, ||, !

// Logical Operators

// Coding Challenge #3

// const dolphinsScore = (96 + 108 + 89) / 3;
// avgDolphinsScore = Math.round(dolphinsScore);
// console.log(avgDolphinsScore);

// const koalasScore = (88 + 91 + 110) / 3;
// avgKoalasScore = Math.round(koalasScore);
// console.log(avgKoalasScore);

// if (avgKoalasScore > avgDolphinsScore) {
//   console.log(`Koalas Win!`);
// } else if (avgDolphinsScore > avgKoalasScore) {
//   console.log(`Dolphins Win!`);
// } else if (avgDolphinsScore === avgKoalasScore) {
//   console.log(`It is a draw!`);
// } else {
//   console.log(`idk`);
// }

// Coding Challenge #3 Bonus #1
// const dolphinsScore = (97 + 112 + 101) / 3;
// avgDolphinsScore = Math.round(dolphinsScore);
// console.log(avgDolphinsScore);

// const koalasScore = (109 + 95 + 123) / 3;
// avgKoalasScore = Math.round(koalasScore);
// console.log(avgKoalasScore);

// if (avgKoalasScore >= 100 && avgKoalasScore > avgDolphinsScore) {
//   console.log(`Koalas Win!`);
// } else if (avgDolphinsScore >= 100 && avgKoalasScore > avgDolphinsScore) {
//   console.log(`Dolphins Win`);
// } else if (avgDolphinsScore === avgKoalasScore) {
//   console.log(`it is a draw!`);
// } else {
//   console.log(`idk`);
// }

// const dolphinsScore = (1 + 1 + 1) / 3;
// avgDolphinsScore = Math.round(dolphinsScore);
// console.log(avgDolphinsScore);

// const koalasScore = (1 + 1 + 3) / 3;
// avgKoalasScore = Math.round(koalasScore);
// console.log(avgKoalasScore);

// if (avgKoalasScore >= 100 && avgKoalasScore > avgDolphinsScore) {
//   console.log(`Koalas Win!`);
// } else if (avgDolphinsScore >= 100 && avgKoalasScore > avgDolphinsScore) {
//   console.log(`Dolphins Win`);
// } else if (avgDolphinsScore === avgKoalasScore) {
//   console.log(`it is a draw!`);
// } else {
//   console.log(`idk`);
// }

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// Expected output: true
// If changed one to false it would output false
// console.log(hasDriversLicense || hasGoodVision);
// Expected output: true b/c || = or
// console.log(!hasDriversLicense);
// Expected output: false // does not have drivers license ! = not

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

// const isTired = true; // C

// can add more variables by just adding or
// console.log(hasDriversLicense || hasGoodVision || isTired);

// Lecture: Logical Operators
// const countryLanguage = `english`;
// const countryPopulation = 2;
// const isIsland = false;

// if (
//   countryLanguage === `english` &&
//   countryPopulation < 50000000 &&
//   isIsland === false
// ) {
//   console.log(`Move to Portugal`);
// } else {
//   console.log(`Portugal might not be for you!`);
// }

// const day = `monday`;
// switch

// switch (day) {
//   case `monday`:
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
//     break;
//   case `tuesday`:
//     console.log(`prepare theory videos`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//     console.log(`Write code examples`);
//     //specifies one thing for both cases b/c there is no break
//     break;
//   case `friday`:
//     console.log(`record videos`);
//     break;
//   case `saturday`:
//   case `sunday`:
//     console.log(`enjoy the weekend`);
//     break;
//   default:
//     console.log(`not a valid day!`);
// }

// same thing but if/else

// if (day === `monday`) {
//   console.log(`plan course structure`, `Go to coding meetup`);
// } else if (day === `tuesday`) {
//   console.log(`prepare theory videos`);
// } else if (day === `wednesday` || day === `thursday`) {
//   console.log(`write code examples`);
// } else if (day === `friday`) {
//   console.log(`record videos`);
// } else if (day === `saturday` || day === `sunday`) {
//   // do not forget to add the conditon after the or!
//   console.log(`enjoy the weekend!`);
// } else {
//   console.log(`not a valid day`);
// }

// const language = `dothraki`;

// switch (language) {
//   case `chinese`:
//   case `mandarin`:
//     console.log(`Most number of native speakers`);
//     break;
//   case `spanish`:
//     console.log(`2nd place in number of native speakers`);
//     break;
//   case `english`:
//     console.log(`3rd place`);
//     break;
//   case `hindi`:
//     console.log(`number 4`);
//     break;
//   case `arabic`:
//     console.log(`5th most spoken language`);
//     break;
//   case `dothraki`:
//     console.log(`elite language of warriors`);
//     break;
//   default:
//     console.log(`great language too :)`);
// }

// Statements and Expressions
// statements: are full sentences that translate an action
// expression: a piece of code that produces a value

// The Conditional (Ternary) Operator

// let age = 23;
// age >= 18
//   ? console.log(`I like to drink wine`)
//   : console.log(`I like to drink water`);

// const drink = age >= 18 ? `wine` : `water`;
// console.log(drink);

// console.log(`I like to drink ${drink}`);

// still need if else/ statements like when the block of code is bigger
// ternary operator is better for small blocks of code

// Coding Challenge #4

// Lecture: The Conditional (Ternary) Operator
// let population = 33000000;
// population >= 33000000
//   ? console.log(`portugals population is above average`)
//   : console.log(`portugals population is below average`);

// Coding Challenge #4
// const bill = 450;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill is ${bill}, the tip is ${tip} and the total is ${bill + tip}`
// );

// JavaScript Releases ES5, ES6+, and ESNext
// development
// production
// don't break the web
