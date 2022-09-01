const transpose = function (matrix) {
  // Put your solution here
    let newArray=[];
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
    }
  for (let row = 0; row < matrix.length; row ++) {
    for (let column = 0; column < matrix[row].length; column++) {
      newArray[column][row] = matrix[row][column]
    }
  }
  return newArray;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4], // ([[],[],[],[]])
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));