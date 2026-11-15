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

/**
 *
 * @param matrix
 * @returns An array containing the four corner elements of the matrix, or an empty array if the matrix is empty.
 * @description Returns the four corner elements of the matrix. [top-left, top-right, bottom-left, bottom-right]
 */
export const getMatrixCorners = (matrix: number[][]) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  return [
    // top-left
    matrix[0][0],
    // top-right
    matrix[0][cols - 1],
    // bottom-left
    matrix[rows - 1][0],
    // bottom-right
    matrix[rows - 1][cols - 1],
  ];
};
