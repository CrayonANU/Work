// if 
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
// if else
    let num = 5;

if (num % 2 === 0) {
  console.log(num, "is even.");
} else {
  console.log(num, "is odd.");
}
// if else if else
let marks = 72;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
// switch 
let day = 3;
let dayName;

switch (day) {
  case 1: dayName = "Monday"; break;
  case 2: dayName = "Tuesday"; break;
  case 3: dayName = "Wednesday"; break;
  case 4: dayName = "Thursday"; break;
  case 5: dayName = "Friday"; break;
  case 6: dayName = "Saturday"; break;
  case 7: dayName = "Sunday"; break;
  default: dayName = "Invalid day";
}

console.log("Day:", dayName);

// ternary 
let number = 10;
let result = (number > 0) ? "Positive" : "Negative";
console.log(result);


