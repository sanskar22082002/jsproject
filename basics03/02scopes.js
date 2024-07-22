 // let a = 10
// const b = 20
// var c = 30
// all are working then why we bring let const ,if var is working because var is not working as block scope

//{} //=>jab ye kisi function ke saath aata hai ya if else saath aata hai then it is called scope means function ka scope or if else ka scope

// if(true){
//     let a = 10
//     const b =20
//     var c = 30
// }
// console.log(a)//=> it will not work because defined in scope
// console.log(b)//=> it will not work because defined in scope
// console.log(c)//=> it will work => that is the main problem because it is not working as block scope

// for example
// let a = 300
// var c =300
// if(true) { //=> block scope aur eske bahar hai wo hai global scope, global scope mein jo bhi likhnege wo block scope available hoti hai lekin jo block scope mein variable likhte hai wo bahar nhi jani chaiye lein fir bhi jati hai var ki wajah se
//     let a = 100
//     const b = 20
//     c = 30
//     console.log("INNER: ", a)
// }
// console.log(c)//gives problem we defined c = 300 but it gives 30 
// console.log("Outer:", a)
// global scope in node different from global scope of windows

function one(){//=> this whole process is closure(basics)
    const username = "sanskar"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)//give error=>cannot access it declareed in local scope

    two()//=> this not execute because it runs line by line
}

// one()

if(true) {
    const username= "sanskar"
    if (username === "sanskar"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)//=> give error website is not defined first=> comment this

}
// console.log(username)//error=> username not defined => decond comment this

// ***********************************interesting************************************

console.log(addone(5)) //not give error
function addone(num){
    return num + 1
}


addTwo(5) //error=>because of hoisting means we cannot access function before declaration
const addTwo = function(num){ //=> this is also  but it is also called expression because variable can hold function
     return num + 2
}


