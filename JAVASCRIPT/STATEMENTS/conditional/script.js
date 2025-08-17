let a = 50
let b = 50
let c = 50
let d = 50

if ((a > b) && (a > c) && (a > d)) {
    console.log('a is greater than b, c & d !')
} else if ((b > c) && (b > d)) {
    console.log('b is greater than a a, c & d !')
} else if (c > d) {
    console.log('c is greater than a , b & d !')
} else {
    console.log('d is greater than a , b & c !')
}

let year = Number(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
