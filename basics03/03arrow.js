const user = {
    username: "sanskar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);//when we want refer current context(current context which is inside the curly braces) we use this keyword 
        console.log(this)//it talks about current values

    }
}

// user.welcomeMessage()//()=> use this because of this is method
// user.username = "kashyap" //here change the context means value
// user.welcomeMessage()
// console.log(this) // this=>refers empty object there is no context in global scope
//when we copy this in console.log(this) then this will shows window but why? => Pahle js  executed only in browser and js engine only found in browser but now we take out the engine we named it node , dino etc , in browser global object is windows 
// function chai(){
//     console.log(this)
// }
// chai() //=> when we run this inside function then we get so many values

// function chai(){
//     let username = "sanskar"
//     console.log(this.username)
// }
// chai()// we are not able use this in function because it give undefined

// const chai = function () {
//     let username = "sanskar"
//     console.log(this.username)
// }
// chai()//same output as above which is undefined


//one method in es6 to define function(arrow function)
// const chai = () => {
//     let username ="sanskar"

//     console.log(this.username)
// }
// chai()//same output

//basic arrow function=> explicit return,  here when we use curly bracket then use return keyword

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//implicit return arrow function,implicit meaning as it is return no need to add return keyword
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)//implicit return => when no curly bracket then no nedd og return keyword

// const addTwo = (num1, num2) => {username: "sanskar"}//give undefined when we return object then we use pranthesis
const addTwo = (num1, num2) => ({username: "sanskar"})
console.log(addTwo(3,4))





