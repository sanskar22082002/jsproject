
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

//Functions with objects and array

// function calculateCatPrice(...num1){//rest operator
//     return num1
// }

// console.log(calculateCatPrice(200,400,500))//[ 200, 400, 500]

function calculateCatPrice(val1, val2, ...num1){//rest operator
    return num1
}

// console.log(calculateCatPrice(200,400,500, 2000))//val1=>200, val2=>400, num1=>500, num2=>2000
//passing object inside function
const user = {
    username: "sanskar",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


// passing array in function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))


