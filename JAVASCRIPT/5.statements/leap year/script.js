// leap yr
let year = 2024;  // you can change this value

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a Leap Year ✅");
} else {
  console.log(year + " is NOT a Leap Year ❌");
}
// range of leap yr
let start = 2000;
let end = 2025;

console.log("Leap years between", start, "and", end, "are:");

for (let year = start; year <= end; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year);
  }
}
