// const tinderUser = new Object()//singleton object
const tinderUser = {} //=>non-singleton object

tinderUser.id = "123abc"
tinderUser.name= "sanskar"
tinderUser.LoggedIn = false
// console.log(tinderUser)

const regularUser = {  //=>this is object
    email: "some@gmail.com",
    fullname: {//=> this is object we can declare object inside object
        userfullname: {//=> this is object
            firstname: "sanskar",
            lastname: "kashyap"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)//this way to access object inside object
// console.log(regularUser.fullname?.userfullname.firstname)//?=>this give protection if this is not there then it will skip this

// merging objects

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 ={obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{}=>this is target and obj1,obj2,obj4=>source if not give target then all willl save in obj1 otherwise in {}, read mdn

//use spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [ //objects inside array

    {
        id: 1,
        email: "s@gmail.com"
    },
    {

    },
    {

    }
]
users[1].email //access the object insisde array
console.log(tinderUser)

console.log(Object.keys(tinderUser))//=>datatype is array
console.log(Object.values(tinderUser))//datatype is array
console.log(Object.entries(tinderUser))//=>har ek key values ko array ban jata hai
console.log(Object.keys(tinderUser))
console.log(tinderUser.hasOwnProperty('LoggedIn'))//to check this property is available or not