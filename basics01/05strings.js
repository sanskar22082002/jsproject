const name ="sanskar"
const repoCount = 50

// console.log(name + repoCount + " Value")
//This syntax not prefered to use 

// use bactics

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //it is string interpolation

const gameName = new String('hitesh-hc-com') //another way to declare string
// When copy this on console then it type is String  we will have 0:"h" to 7:"c" here 0 is key and h is value and this is not arry here string is object ,length : 8
// console.log(gameName[0])//0 key ith value which is h
// console.log(gameName.__proto__)//we get object => {} which is empty
// console.log(gameName.length);
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)//4th one is not printed , if we give negative value then it will ignore strat from 0
console.log(newString)

const anotherString = gameName.slice(-8, 4) // we can give negative value and it will start from back
console.log(anotherString)

const newStringOne = "     sanskar    "
console.log(newStringOne)
console.log(newStringOne.trim()) //it will remove starting and ending spaces 
// trimStart() and trimEnd => go and read in documentation mdn
 
const url="https://sanskar.com/kashyap%20sanskarkashyap"

console.log(url.replace('%20', '-'))//it will replace %20 with -
console.log(url.includes('sanskar'))//true
console.log(gameName.split('-')) //it will split on the basics of seperator which is - in the from of array

//read documnetation mdn

