function convert(s) {
  const string =  s.toLowerCase()
       //returns 0 for an empty string
    if(s.length === 0){
        return 0
    }
  const output = []
   for(let i = 0; i < string.length;  i++){
     //the first character always maps to 1
       if ( i === 0){ 
           output.push(1)
           //if all the numbers in the array is of value 1
           //and the current charater is different from the characters checked, then map the value to 0
           //this is important to make sure that the output is the lowest possible
           }else if ( output.find(e => e !== 1 ) === undefined && string[i] !== string[0]){
            output.push(0)
            //if the character to be checked has a previous occurence then use the same value as the first time
           }else if(string.slice(0, i ).indexOf(string[i])!== -1){   
           output.push(output[string.indexOf(string[i])])
           // else push a number higher than the higest number in the array by 1 on
          }else{
           output.push(Math.max(...output) + 1)
         }
   }
   return parseInt(output.join(''))
  }

  module.exports = convert