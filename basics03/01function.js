
function sayMyName(){
    console.log("s")
    console.log("a")
    console.log("n")
    console.log("s")
    console.log("k")
    console.log("a")
    console.log("r")
}

// sayMyName()

// function addTwoNumbers(number1, numbers2){ //number1, number2=> parameters
//     console.log(number1 + numbers2)
// }
// const result = addTwoNumbers(3, 4) //3, 4=>arguments

// console.log("Result: ", result) //undefined => function is not returning

function addTwoNumbers(number1, number2){ //number1, number2=> parameters
    // let result = number1 + number2
    // return result
    // console.log("sanskar")//this will not execute because of return
    return number1 + number2
}

const result = addTwoNumbers(3, 4) //3, 4=>arguments

// console.log("Result: ", result) 

function loginUserMessage(username = "sanskar"){ //sanskar=>default
    if(!username){ //or username === undefined{
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("sanskarkashyap"))
console.log(loginUserMessage())



