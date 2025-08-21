// arithmetic and assign
function arithmeticOps(a, b) {
  return {
    add: a + b,
    sub: a - b,
    mul: a * b,
    div: a / b,
    mod: a % b,
    power: a ** b
  };
}

function assignmentOps(x) {
  let results = {};
  results.start = x;

  x += 5; results.plusEqual = x;
  x -= 2; results.minusEqual = x;
  x *= 2; results.multiplyEqual = x;
  x /= 2; results.divideEqual = x;
  x %= 5; results.modEqual = x;
  x **= 2; results.powerEqual = x;

  return results;
}


