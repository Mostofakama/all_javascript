// insert,remove and replace methods 

var arr = [1,2,3,4,5,6,7,8]

// insert 9 to index

// arr[3] = 9 // ay khane 3 num index ke remove kore 9 ar man bosay dice ata akta problem
// arr.push(9) // jokon kono akta man array last a neor dorkar porbe tokon ay push kora lagbe
// arr.unshift(9) // jokon kono arta man array first a neo lagbe tokon ay unshift user korbo
// arr.splice(3,2,9,10)// splice ar mode data add remove kore pare prothom 3 holo 3 num ar index thake data insert suru |2 holo koto gulo data delete korbo and 9,10 holo data insert kora
// console.log(arr);
// arr[3] = 56
// console.log(arr);

// arr.push(199)
// console.log(arr)

// arr.unshift(299)
// console.log(arr);
// arrr = []
// arrr.splice(3,2,9,10)
// console.log(arrr);


// remove data 
// arr[3] = undefined// undefined dile array 3 num man delete holeo ar index akon o ace 
// arr.pop() // ses ar index ta delete hoyce
// arr.shift() // first ar index ta delete hobe
// arr.splice(3,2)// 3 index thake suru kore 2 ta data remove korbe
//  console.log(arr); 
arr3 = [1,2,3,4,5,6,7,8]
arr3[3] = undefined

console.log(arr3);
arr3.pop()
console.log(arr3);

arr3.shift()
console.log(arr3);
arr3.splice(3,4)
console.log(arr3);
//  replace data 
// arr[3] = 9
// arr.splice(3,1,44)
// console.log(arr);


// ay class a ja ja siklam 
// 1.insert data 
// 2.remove data 
// 3.replace 