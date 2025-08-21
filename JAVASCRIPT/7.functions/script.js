function factroial(number){
    let fact = 1
    while(number != 0){
        fact = fact * number
        number--
    }
    return fact
}

function square(number){
    return number * number
}

function cube(number){
    return number * number * number
}

console.log(factroial(1))
console.log(factroial(2))
console.log(factroial(3))
console.log(factroial(4))
console.log(factroial(5))
console.log(factroial(6))
console.log(factroial(7))
console.log(factroial(8))

console.log(square(4))
console.log(cube(4))