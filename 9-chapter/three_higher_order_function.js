// // ak ba akdik function ke paramitar hisabe nibe 
// // ba function ke return korbe 

// function addd(a,b,cd){
// c = a+b 
// d = a-b
// var result =  cd(c,d)
//  return result
// }


// console.log(addd(3,3, function cd(c,d){
//     return c + d
// }))

// var palyes = [
//     {
//         pname : "sakib",
//         avg : 34.34
//     },
//     {
//         pname : "tamim",
//         avg : 36.34
//     },
//     {
//         pname : "musfiq",
//         avg : 38.34
//     },
//     {
//         pname : "mahamullah",
//         avg : 39.34
//     },
// ]


// var PlayesAvgNumber = []

// console.log(palyes.length);
// for(i = 0;i<palyes.length;i++){
//     var tag = palyes[i].avg
  
//     if(tag >= 37){
//         PlayesAvgNumber.push(palyes[i])
//     }
// }
// console.log(PlayesAvgNumber[1].avg);




// var stu = [
//     70,40,35,60,55,58,35,60,78,43,56,67,34,89,23,85,12,68,24,78,32,43,57,22,57,13,65,21,45,76,
//     34,53,45,76,78,82,45,67,33
// ]

// function cromoJojon(fun,fou){
//     var newarr = []
// for(i=0; i<stu.length;i++){
   
//         if(fun(stu[i])){
//             if(fou(stu[i])){
//                 newarr.push(stu[i])
//             }
//         }
// }
// return newarr
// }
// var most = cromoJojon(function(value){
//    return value >= 30  
// },
// function fou(values){
// return values<= 40
// }
// )
// console.log(most);



// var maths = [2,3,5,6,4,3,7]

function mathss(a,b,fun){
    c= a+b
    d= a-b

return fun(c,d)
}


var func = mathss(2,4,function(c,d){
   return  c - d
})

console.log(func);

