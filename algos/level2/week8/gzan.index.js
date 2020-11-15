/// SHORT, ELEGANT WAY WITH ES&
const sortArray = (array) => {
  const oddNums = array.filter((num) => num % 2).sort((a, b) => a - b);
  return array.map((num) => num % 2 ? oddNums.shift() : num);
};

//LONG BUT EASIER TO UNDERSTAND
function sortArrayLong(array) {
  if (array === []) return array
  let oddNums = []
  let sorted = []

  //add nums in a seperate array in an ascending order
  for (let num of array) {
    if (isOdd(num)) {
      addNumberSorted(num, oddNums)
    }
  }

  const length = array.length
  let j = 0;
  //make a new arr out of the main one 
  //if odd then put the next num in sorted odd nums arr
  //if even put the num that was in that index in the main arr
  for (let i = 0; i < length; i++) {
    if (isOdd(array[i])) {
      sorted.push(oddNums[j])
      j++
    } else {
      sorted.push(array[i])
    }
  }
  return sorted
}

// a function that returns true if a num is odd
const isOdd = (n) => n % 2 !== 0;

//a function that add nums in an arr considering the ascending order
function addNumberSorted(n, arr) {
  let i = 0;
  const length = arr.length;
  if (length === 0) arr.push(n)
  else if (n > arr[length - 1]) arr.push(n)
  else {
    while (i < length) {
      if (n > arr[i]) {
        i++;
      } else {
        arr.splice(i, 0, n);
        return arr;
      }
    }
  }
  return arr;

}




module.exports = {
  sortArray, sortArrayLong, isOdd, addNumberSorted
}