
// ============ QNO 1 ==============================
// Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");

number1 > number2 ? console.log(`The Largest No is ${num1}`) : console.log(`The Largest No is ${num2}`) 

// ============ QNO 2 ==============================

let num = prompt("Enter a number:");
let sign;

if (num > 0) {
  sign = "+";
} else if (num < 0) {
  sign = "-";
} else {
  sign = "Neither positive nor negative";
}

alert(`The sign is ${sign}`);



// ============ QNO 3 ==============================


let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
let num4 = prompt("Enter the fourth number:");
let num5 = prompt("Enter the fifth number:");

let largest = num1;

if (num2 > largest) {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}

if (num4 > largest) {
  largest = num4;
}

if (num5 > largest) {
  largest = num5;
}

console.log(`The largest number is ${largest}`);


// ============ QNO 4 ==============================

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
  

// ============ QNO 5 ==============================
const studentsList = [
    { name: "Ahmed", score: 80 },
    { name: "Ayan", score: 50 },
    { name: "Akbar", score: 91 },
    { name: "Ayesha", score: 67 },
    { name: "Amna", score: 77 },
  ];
  
  let totalScore = 0;
  for (let i = 0; i < studentsList.length; i++) {
    totalScore += studentsList[i].score;
  }
  let averageScore = totalScore / studentsList.length;
  let grade;
  if (averageScore < 60) {
    grade = "F";
  } else if (averageScore < 70) {
    grade = "D";
  } else if (averageScore < 80) {
    grade = "C";
  } else if (averageScore < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
  
  console.log(`The average score is ${averageScore}`);
  console.log(`The grade is ${grade}`);
  


// ============ QNO 6 ==============================


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  

// ============ QNO 7 ==============================
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
  