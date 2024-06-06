// how to search anything from array

var arr = [4,7,2,6,8,4,55,9,89,27]
// var find = 333
// var isFount = false
// for(var i = 0; i <arr.length;i++){
//     if(arr[i] == find){
//         console.log('data find successfull  ' + i);
//         isFount = true
//         break;
//     }
// }

// if(!isFount){
//     console.log('data is not found');
// }


var find = 4
var isFind = false
for(var i = 0; i<arr.length;i++){
    if(arr[i] == find){
        console.log(`this array is ${arr[i]}`);
        isFind = true
    }
}

if(!isFind){
    console.log('data is not found');
}
// ay class ja ja siklam 
// 1.array data search kora 