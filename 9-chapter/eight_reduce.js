
 var arr = [1,2,3,4,5,6]

// var resutl = arr.reduce((prv,curr,index,arr)=>{
//     // return prv + curr 
//     // return arr
// })
// console.log(resutl);

function myReduce(arr,cb,cn){
    for(var i = 0;i<arr.length;i++){
        var cn = cb(cn,arr[i])
    }
    return cn
}

var red = myReduce(arr,function(prv,curr) {
    return prv + curr
},100)

console.log(red);