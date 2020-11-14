function sortArray(array) {
  if (array === []) return array
  let oddNums = []
  let sorted = []

  //add nums in a seperate array in a sorted manner
  //this way will slowen the function because we go over the arr each time
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
//function that add nums in an arr in the correct order
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

}


/// SHORT WAY
const sortArray = (array) => {
  const oddNumS = array.filter((num) => num % 2).sort((a, b) => a - b);
  return array.map((num) => num % 2 ? oddNums.shift() : num);
};


