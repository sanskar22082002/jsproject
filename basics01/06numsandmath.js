// const score = 400 
// console.log(score)//it bascially automatically gives number

// const balance = new Number(100)// but here it casts number , specially for number
// console.log(balance)

// console.log(balance.toString().length)//=> it will convert it to string
// console.log(balance.toFixed(2)) // 100.00

// const otherNumber = 23.8967
// console.log(otherNumber.toPrecision(3)) // it will return in string => 23.9 if 123.4322 => 124, 1123.3422 =>give in exponential value , use in nice way


// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) //default value is US system , 10,00,000

//Numbers.MAX_VALUE
//Numbers.MIN_VALUE
// ********************************************************Maths****************

// console.log(Math) //this is Object which have so many properties
// console.log(Math.abs(-4))  //=>4
// console.log(Math.round(4.6))  //=>5
// console.log(Math.ceil(4.2)) // it will take top value => 5
// console.log(Math.floor(4.9)) //it will take buttom value => 4
// console.log(Math.min(4,5,6,8)) //=>4
// console.log(Math.max(4,3,2,8))// => 8

console.log(Math.random()) // it will give number randomly b/w 0 and 1
console.log((Math.random()*10) + 1) // it will shift by one digit, suppose number we have 0.0443345 => it will shift by 1 digit and give 0 to avoid this we will add 1 
console.log(Math.floor(Math.random()*10) + 1) //it will bottom value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)