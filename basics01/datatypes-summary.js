//Types of Data Types

//Primitive

//7 types : String, Number ,Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn =false
// const outsideTemp = null
// let userEmail

// const id = Symbol('123')
// const anotherId = Symbol('123')//working of this symbol is if we pass value same but their result are different


// console.log(id === anotherId)

// const bigNumber = 2347548935923409382n //BigInt

 



// //Reference (Non primitive)

// //Arrray, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];  //Array
// let myObj = {
//     name: "sanskar",
//     age: 22,
// } //Objects-In curly whatever it is a object and datatype can be string , numbers ,object, Array, function etc

// const myFunction = function(){//function can be treated as  varible
//     console.log("Hello World");
// }
// //How to know datatype

// console.log(typeof myFunction)// it shows function but actual is function object
// console.log(typeof heros) // //object
// console.log(typeof anotherId)// Symbol

//************************************************************ 

// Stack uses Primitive , Heap uses Non-Primitive

let myYoutubename="sanskarkashyap"
let anothername = myYoutubename
anothername = "jsproject"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}
let userTwo = userOne

userTwo.email="hitesh@google.com"
console.log(userOne.email)//Here In userOne also ther is  also hitesh@gmail.com because in heap it does not give copy it give original value
console.log(userTwo.email)