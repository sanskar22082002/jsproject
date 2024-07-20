const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)//we get square bracket also, array => dc_heros take as single element
// //how to access value from 3 rd element
// console.log(marvel_heros[3][1])

const allHeros =marvel_heros.concat(dc_heros) //concat return a new array
// console.log(allHeros)//merege properly

//spread operator

const all_new_heros= [...marvel_heros, ...dc_heros]

// console.log(all_new_heros) //merge easily better than concat

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//returns a new array with all sub-array elementa concatenated into it recursively up to the specified depth //Infinity=>depth
// console.log(real_another_array)
 
console.log(Array.isArray("sanskar"))//it assks it array or not =>true or false
console.log(Array.from("sanskar"))//convert to array
console.log(Array.from({name: "sanskar"}))// interesting => return empty array because which we want cuse for array value or key

let score1 = 100
let score2= 200
let score3 = 300

console.log(Array.of(score1, score2, score3))    // return a new array from a set of elements