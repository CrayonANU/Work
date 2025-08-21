// Looping Through 2D Array
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log("Element at [" + i + "][" + j + "] = " + matrix[i][j]);
  }
}
// 3d aarray 
let cube = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
];

console.log(cube[0][1][1]); // 4
console.log(cube[1][0][0]); // 5
// 2d array 
let table = [];
for (let i = 1; i <= 5; i++) {
  let row = [];
  for (let j = 1; j <= 5; j++) {
    row.push(i * j);
  }
  table.push(row);
}

console.log(table);
