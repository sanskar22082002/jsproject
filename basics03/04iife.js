//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();//semicolon is important for next function
//()(),first one is for function definition and second one is for execution
//what is IIFE => Jo function immediately invoked ho jaye ,why we use this?=>global scope ke pollution se problem hone ke karaan uske variable ko hatne ke liye IIFE ka use kiya

( (name) => {
    //simple IIIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('sanskar')
