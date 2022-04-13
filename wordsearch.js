/* Pair programming with Jaskarn (navigator) and Yuri (Driver)
*/
const transpose = function(matrix) {
  // Put your solution here
  let result = [];
  let numofArr = matrix[0].length;
  for (let i = 0; i < numofArr; i++) {
    result.push([]);
  } //all good

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log(horizontalJoin);
  // horizontalJoin is a new array that holds arrays that contains joined letters as one element
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const transposedMatrix = transpose(letters);
  const verticalJoin = transposedMatrix.map(ls => ls.join(''));

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};


const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK');

// console.log(result);

module.exports = wordSearch;

// const result = wordSearch([
//   [],
//   [],
//   [],
//   [],
//   [],
//   [],
//   [],
//   [],
//   [],
// ], 'SEW');

// console.log(result);



//1. go to test file and copy the testing example and work with the case that's not working
//2. clg what horizontalJoin is to see what it's printing - joined array of letters as one element
//3. look at the code and check what's missing - return false
//4. work on extra conditions What if the word is written vertically, not horizontally? What about the case where the word matrix is an empty array? 