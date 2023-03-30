// variable with my age
const myAge = 18
//variavel mutavel 
let earlyYears = 2
earlyYears *=10.5
//variable with the "rest" of age
let laterYears = myAge - 2
//multiplying each year for dog year and reassignmening laterYears
laterYears *=4
//adding the 2 variables to one with the sum 
let myAgeInDogYears = earlyYears + laterYears
//variable with a built in method that returns strings with all lowercase letters 
const myName = "Jessica"
myName.toLowerCase()
// show up from results with interpolation of strings
console.log(`My name is ${myName}. I am ${myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`)