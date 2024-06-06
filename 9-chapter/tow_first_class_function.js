//first class function
function add(a,b){
    return a+b
}

// 1 . a function can be stored in a variable
var sum = add
console.log(sum(2,3));

//2. a function can be stored in array
var arr = []
arr.push(add)
console.log(arr[0](3,3));

// 3. a function can be stored in an object
var obj = {
    sum : add
}
console.log(obj);
console.log(obj.sum(1,2))

// 4 . we can create function as need
setTimeout(function(){
   console.log('i have created...');
},1000)

// 5. we can pass function as an arguments

//6. we can return function from another function