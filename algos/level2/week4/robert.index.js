// THIS EXERCISE WAS SOLVED USING FUNCTIONAL PROGRAMMING PROCEDURE,
//IT BREAKS DOWN THE TASKS INTO DIFFERENT FUNCTIONS FOR EASY COMPREHENSION

// function creates an array of grades lower than B, if the array is returned... 
// empty, then the person got no grade lower than B
const checkGrades = (arry) =>{
   const lowerGrades = arry.filter(e => e !== "A" && e !== "B" ? e : null )
   return lowerGrades
}

// funtion checks if the student got a bonus score or not
const checkForBonus = (arry) =>{
   if(arry.length < 5){
      return false
   }
   let lowerGrades = checkGrades(arry)
   if (lowerGrades.length){
      return false
   }
   return true //if it returns true then the student did over 5 subjects and passed all with grade B or A
}

// function converts grades to their values in numbers and sums it up
const convertGrades = (arry) =>{
   const scores = arry.map(e =>{
    if(e === "A"){
       return 30
    }else if(e === "B"){
      return 20
   }else if(e === "C"){
      return 10
   }else if(e === "D"){
      return 5
   }else {
      return 0
   }
   })
 const absoluteScore = scores.reduce((a, c) => a + c) //summation using a reducer funtion
return absoluteScore
}

// Bonus score (if any) are added to absolute Scores here  
const getTotalScore = (arry) => {
   let totalScore = 0
   if(checkForBonus(arry)){
      totalScore += 20
   }
   totalScore += convertGrades(arry)
   return totalScore
}

// Main funtion of the Problem, checks if score tallys with the grades value and then adds the name of the sudent to 
//the result 
const findCracker = (arr) => {
let result = []
for(let i = 0; i < arr.length; i++){
   const caltulatedScore = getTotalScore(arr[i][2])
  
   if( caltulatedScore >= 200){
    result.push(arr[i][0])
    continue
   } else if(caltulatedScore !== arr[i][1]){
      result.push(arr[i][0])
      continue
   } 
  }
  return result
}

 module.exports = {
    checkGrades,
    checkForBonus,
    convertGrades,
    getTotalScore,
    findCracker
 }