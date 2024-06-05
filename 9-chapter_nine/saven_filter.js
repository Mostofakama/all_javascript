//filter diya 
var arr = [1,2,3,4,5,6,7,8,9,10]
 
// var resutl = arr.filter((current,index,arr)=>{
//     return current <4
// })

// console.log(resutl);

// simple for loop 
// for(var i =0;i<arr.length;i++){
//     console.log(arr[i] < 4);
// }


function myFilter(arr,cb){
    var newArr = []
    for(var i = 0; i<arr.length;i++){
        if(cb(arr[i],i,arr)){
            newArr.push(arr[i])
        }
        
    }
    return newArr
}

var fil = myFilter(arr,(nam)=>{
    return nam > 4
})

console.log(fil);