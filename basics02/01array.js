//array is object,resizable and can contain a mix of different datatypes
//arrays are zero-indexed
//Javascript array-copy-operation create shallow copies rather than deep copy
//shallow copy-copy of an object is a copy whose properties share the same references=>if we change in copy array then it will also change in original array
//Deep copy-do not share the same references


const myArr=[0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0])

//In array also there is prototype access

//Array methods

// myArr.push(6)
// myArr.push(7)//add on last
// myArr.pop() // remove last value

// myArr.unshift(9)//add element in front but all elements are shifted and also timing consuming
// myArr.shift()//remove element from front

// console.log(myArr.includes(9))//gives result in boolean datatype in true or false
// console.log(myArr.indexOf(3))//give index number if not present then give -1
const newArr=myArr.join() //adds all the elements of an array into a string seperated by commmas
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)//string 


//slicce, splice

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3) //=>returns a copy section of an array 3 is not included
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)//=>the main difference b/w slice and splice is not it includes 3 but the main difference is it remove that particular elements from the original array 
console.log("C ", myArr)
console.log(myn2)