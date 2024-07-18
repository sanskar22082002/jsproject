// console.log(2>1)
//>=1
//<
//==
//!=

// console.log("2" >1) //automatically convert but this type of datatype not give predictable result
// console.log("02" > 1) // same


// console.log(null > 0) //false
// console.log(null == 0)  //false
// console.log(null >= 0) //true


/*
  The reason is that an equality check and comparisons > < >= <= work differently
  Comparisons convert null to a number ,treating it as 0
  That's Why (3) null >=0 is true and null (1) is false

  Not prefered to use because this operation not be like this
*/
// console.log(undefined == 0) //false
// console.log(undefined > 0)  //false
// console.log(undefined < 0)  //false


// ===(strict check) checks also datatype
// console.log("2"===2) //false