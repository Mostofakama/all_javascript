// map diya calcule kora hoy 

var arr = [1,2,3,4,5,6,7,8]
// var mul=arr.map((nam)=>{
//     return nam / 2
// })
// var mul1=arr.map(Math.sqrt)

// console.log(arr);

// console.log(mul);

// console.log(mul1);

//simple calculat
// for (var i=0; i<arr.length;i++) {
//   console.log(arr[i] - 2);
// }


function myMap(arrs,cb){
    var arrr = []
for(var i=0;i<arrs.length;i++){
// console.log(arrs[i]);


    var temp  =  cb(arrs[i],i,arrs)
 arrr.push(temp)


}
return arrr
}

var callIs = myMap(arr,function(value,index){
return value * 2
});


console.log(callIs);
// var ret = 
// console.log(ret);