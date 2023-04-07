
// ============ QNO 1 ==============================
// Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// num1 > num2 ? console.log(`The Largest No is ${num1}`) : console.log(`The Largest No is ${num2}`) 

// ============ QNO 2 ==============================
// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -


// let num = prompt("Enter a number:");
// let sign;

// if (num > 0) {
//   sign = "+";
// } else if (num < 0) {
//   sign = "-";
// } else {
//   sign = "Neither positive nor negative";
// }

// alert(`The sign is ${sign}`);



// ============ QNO 3 ==============================
// Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let num4 = prompt("Enter the fourth number:");
// let num5 = prompt("Enter the fifth number:");

// let largest = num1;

// if (num2 > largest) {
//   largest = num2;
// }

// if (num3 > largest) {
//   largest = num3;
// }

// if (num4 > largest) {
//   largest = num4;
// }

// if (num5 > largest) {
//   largest = num5;
// }

// console.log(`The largest number is ${largest}`);


// ============ QNO 4 ==============================
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"


// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(`${i} is even`);
//     } else {
//       console.log(`${i} is odd`);
//     }
//   }
  

// ============ QNO 5 ==============================
// Define the list of students and their scores
// const students = [
//     { name: "Alice", score: 80 },
//     { name: "Bob", score: 55 },
//     { name: "Charlie", score: 92 },
//     { name: "Dave", score: 67 },
//     { name: "Eve", score: 77 },
//   ];
  
//   // Compute the average score
//   let totalScore = 0;
//   for (let i = 0; i < students.length; i++) {
//     totalScore += students[i].score;
//   }
//   let averageScore = totalScore / students.length;
  
//   // Assign a grade based on the average score
//   let grade;
//   if (averageScore < 60) {
//     grade = "F";
//   } else if (averageScore < 70) {
//     grade = "D";
//   } else if (averageScore < 80) {
//     grade = "C";
//   } else if (averageScore < 90) {
//     grade = "B";
//   } else {
//     grade = "A";
//   }
  
//   // Output the results
//   console.log(`The average score is ${averageScore}`);
//   console.log(`The grade is ${grade}`);
  


// ============ QNO 6 ==============================
// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz"


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
  

// ============ QNO 7 ==============================
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
  