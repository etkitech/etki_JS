function chunk(array, size) {
  const subarrays = [];
  let i = 0;

  while (i < array.length) {
    subarrays.push(array.slice(i, i + size));
    i += size;
  }

  return subarrays;
}



//below is a longer and less efficent way that also works
// function chunk(array, size) {
//   let subarrays = [];
//   let subarray = [];
//   let i = 0;
//   while (i < array.length) {
//     for (let j = 0; j < size; j++) {
//       if (array[i]) {
//         subarray.push(array[i])
//         i++
//       } else {
//         break
//       }

//     }
//     subarrays.push(subarray)
//     subarray = [];
//   }
//   return subarrays;
// }


module.exports = chunk

//Source of the above solutions : The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grider at Udemy