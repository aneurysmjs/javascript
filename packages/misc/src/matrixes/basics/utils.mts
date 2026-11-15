export const createMatrix = (rows: number, cols: number, fillValue: number = 0) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(fillValue);
    }
    matrix.push(row);
  }
  return matrix;
};
