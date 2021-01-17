function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

module.exports = palindrome


//Source of the above solutions : The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy 