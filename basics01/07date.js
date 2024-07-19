//Date

// let myDate = new Date() // here we made object of date
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate) //object

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()) // Mon Jan 23 2023 => in js months strat from 0 so 0=>jan 23=>date 2023=> year and monday take automatically
// let anotherDate = new Date(2023, 0, 23, 5, 3)
// console.log(anotherDate.toLocaleString())
// let anotherDate2 = new Date("2023-02-14")
// console.log(anotherDate2.toLocaleString())
// let anotherDate3 = new Date("01-14-2023")
// console.log(anotherDate3.toLocaleString()) //syntax is mm-dd-yyyy

let myTimeStamp = Date.now()

// console.log(myTimeStamp)// it will give time milliseconds from 01 jan 1970 to now
// //spose we to compare to times then

// console.log(myCreatedDate.getTime())//Now we can compare two values
console.log(Math.floor(Date.now()/1000)) // it will return in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) // getMonth()=>start from 0
console.log(newDate.getDay())


newDate.toLocaleString('default', {   //=> we can coustmize format , {}=>object
    weekday: "long",
    
})


