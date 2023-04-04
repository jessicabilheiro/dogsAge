const myAge = 18 
let earlyYears = 2
earlyYears *=10.5
let laterYears = myAge - 2
//multiplying each year for dog year and reassignmening laterYears
laterYears *=4
let myAgeInDogYears = earlyYears + laterYears
//variable with a built in method that returns strings with all lowercase letters 
const myName = "Jessica"
myName.toLowerCase()
// show up from results with interpolation of strings
console.log(`My name is ${myName}. I am ${myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`)
