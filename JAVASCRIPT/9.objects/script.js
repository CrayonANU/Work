// Object Literal
let person = {
  name: "Anurag",
  age: 25,
  city: "Nagpur"
};

console.log(person.name); // Anurag
console.log(person["city"]); // Nagpur

// Using new Object()
let car = new Object();
car.brand = "Tesla";
car.model = "Model S";
car.year = 2025;

console.log(car);

// nested  objects
let user = {
  id: 1,
  profile: {
    username: "coder123",
    email: "coder@example.com"
  }
};

console.log(user.profile.username); // coder123
//  methds in objects
let calculator = {
  a: 10,
  b: 5,
  add: function() {
    return this.a + this.b;
  },
  subtract() {
    return this.a - this.b; // shorthand
  }
};

console.log(calculator.add());     // 15
console.log(calculator.subtract()); // 5


