// SOLUTION 1
//// 1. Turn string into an array
//// 2. Reverse the elements within the array
//// 3. Turn the array back into a string
function reverseSolution1(str) {
  return str.split('').reverse().join('');
}


// SOLUTION 2
function reverseSolution2(str) {

  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;

  }
  return reversed;

}

// solution with es6
function reverseSolution3(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')
}


// condensed version of the above solution
function reverseSolution3Short(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = { reverseSolution1, reverseSolution2, reverseSolution3, reverseSolution3Short };

//Source of the above solutions : The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy 