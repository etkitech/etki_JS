// here one can use every solution we used for string reversal. 
// to check them out, go to the file algos/level1/week14/gzan.index.js

function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


module.exports = palindrome


//Source of the above solutions : The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy 