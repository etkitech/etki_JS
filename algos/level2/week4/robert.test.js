// describe()

const {checkGrades,checkForBonus,convertGrades, getTotalScore, findCracker} = require('./robert.index.js');

const arrayOfstudentResults =[
    ["name1", 180,  ["A","B","A","A","A","B"]],
    ["name2", 145,  ["A","B","A","A","A","D"]],
    ["name3", 2000,  ["A","B","A","A","A",]]
 ]

 

describe('Check the health and functionality of the helper functions', function () {
    test('should return array of grades lower than B', () => {
        const arraywithOneLowGrade = ["A","B","A","A","A","D"]
        const arraywithTwoLowGrade = ["A","B","C","A","A","D"]
        const arraywithNoLowGrade = ["A","B","A","A","A",]
        expect(checkGrades(arraywithOneLowGrade)).toEqual(["D"]);
        expect(checkGrades(arraywithTwoLowGrade)).toEqual(["C","D"]);
        expect(checkGrades(arraywithNoLowGrade)).toEqual([]);     
    });

    test('should indicate if student got the bonus score', () => {
        const arraywithNoBonusDueToLength = ["A","B","A","A"]
        const arraywithNoBonusDueToABadGrade = ["A","B","C","A","A","D"]
        const arraywithBonus = ["A","B","A","A","A",]
        expect(checkForBonus(arraywithNoBonusDueToLength)).toEqual(false);
        expect(checkForBonus(arraywithNoBonusDueToABadGrade)).toEqual(false);
        expect(checkForBonus(arraywithBonus)).toEqual(true);     
    });

    test('should shows convertGrade Function is in properHealth', () => {
        const array1 = ["A","B","A","A"]
        const array2 = ["A","B","C","A","A","D"]
        const array3 = ["A","B","A","A","A",]
        expect(convertGrades(array1)).toEqual(110);
        expect(convertGrades(array2)).toEqual(125);
        expect(convertGrades(array3)).toEqual(140);     
    });

    test('getTotalScore Helper Function calculates the converts grades to scores, sums and gives bonus(if any)', () => {
        const array = ["A","B","C","A","A","D"]
        const arraywithBonus = ["A","B","A","A","A",]
        const arraywithNoBonus = ["A","B","A","A"]
        expect(getTotalScore(array)).toEqual(125);
        expect(getTotalScore(arraywithBonus)).toEqual(160);
        expect(getTotalScore(arraywithNoBonus)).toEqual(110);     
    });
});

describe('Find Cracker Logic', function () {
    test('should always return array of names of student whose results were hacked', () => {
        const arrayOfstudentResults =[
            ["Phillip Aguip", 180,  ["A","B","A","A","A","B"]],
            ["Paula Johannsen", 145,  ["A","B","A","A","A","D"]],
            ["Jonah Hill", 2000,  ["A","B","A","A","A",]]
         ]
        expect(findCracker(arrayOfstudentResults)).toEqual(['Jonah Hill'])
    });
});