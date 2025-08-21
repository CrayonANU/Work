// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}
// while loop
let n = 1;
while (n <= 3) {
  console.log("n =", n);
  n++;
}
// do while 
let x = 5;
do {
  console.log("Value of x is", x);
  x--;
} while (x > 2);
// loop control
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop when i=5
  console.log("i =", i);
}
// bug fix for do while 
let start, end;

do {
  start = parseInt(prompt("Enter the start year:"));
  end = parseInt(prompt("Enter the end year:"));

  if (isNaN(start) || isNaN(end) || start > end) {
    alert("❌ Invalid input! Start must be <= End and both numbers must be valid. Try again.");
  }
} while (isNaN(start) || isNaN(end) || start > end);

console.log("Leap years between " + start + " and " + end + ":");

for (let year = start; year <= end; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year);
  }
}
// conversion of while into for statements 
// simple counting
// while  
letn = 1;
while (n <= 5) {
  console.log("n =", n);
  n++;
}
// for
for (let n = 1; n <= 5; n++) {
  console.log("n =", n);
}
// print even 
// while 
let i = 2;
while (i <= 10) {
  console.log(i);
  i += 2;
}
// for  

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
