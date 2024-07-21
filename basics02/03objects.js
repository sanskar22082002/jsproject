// Twoways to declare object
// first is literal type and second is constructor
//singleton=> concept => koi bhi constructor se banta hai toh wo singleton hota hai if we make through literal type then singleton is not build
//Object.create=>singleton

//object literals

const mySym = Symbol("key1")


const Jsuser = {
    name: "sanskar",
    "full name": "sanskar kashyap",
   // mySym: "mykey1",//we can access them but typeof this will be string, so actually we can not use as the symbol
    [mySym]: "mykey1", //now this is the actual syntax , now we can use as symbol
    age: 18,
    location: "Bihar",
    email: "sanskark@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email)//not good way
// console.log(Jsuser["email"])//email is treated as string
// console.log(Jsuser["full name"])//only one way to access
// console.log(Jsuser.mySym)//we can not use as symbol
// console.log(Jsuser[mySym])// now we can use as symbol
Jsuser.email= "sanskar@chatgpt.com" //now we change value of email
// Object.freeze(Jsuser)// through this we can freeze through this object
Jsuser.email="sanskar@microsoft.com"
// console.log(Jsuser)

//we can treat as function as variable

Jsuser.greeting= function(){
    console.log("Hello Js User")
}

Jsuser.greetingTwo= function(){
    console.log(`Hello user ${this.name}`)//access any same object => use this,property ko pata karne ke liye=> this lete hai
}




console.log(Jsuser.greeting) //we get function return back means function's reference
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())


