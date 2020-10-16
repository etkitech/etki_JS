//if the argument exists return an array with size of N and the keys spared for each element as the actual elements of the array
//The keys will start from 0 and end with size-1, which applies the criteria given
//if the arguments doesn't exist return a blank array
const arr = N => N ? [...Array(N).keys()] : [];

module.exports = arr;