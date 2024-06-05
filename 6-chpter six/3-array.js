// what is array traversing in js 

// ans:sobgulo array ke loop ar madome cholonake array traversing bole
// arr.length - 1; array length ar thake 1 mines korle array index pao jay 
// var arr = [4,5,1,6,8,-9,-44]


// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);





//2 array te man ar sathe 2 + kora
// for(var i = 0;i<arr.length;i++){
//     // console.log(arr[i]);
//     arr[i] = arr[i] + 2
// }
// console.log(arr);




// 3array mot man 33
// var sum = 0
// for (var i = 0;i < arr.length; i++ ) {
    
//     // sum +=arr[i]
//     sum = sum + arr[i]
// }
// console.log(sum);





//4jor sonka ber kora jono 
// for(var i = 0;i < arr.length; i++){
//     if(arr[i] % 2 == 0 ){
//         console.log(arr[i]);
//     }
// }




//5 bejor sonka 
// for(var i = 0; i<arr.length ; i++){
//     if(arr[i] % 2 == 1){
//         console.log(arr[i]);
//     }
// }





//6negative man ber kora
// for(var i = 0;i < arr.length; i++){
//     if(arr[i]<0){
//             console.log(arr[i]);
//     }
// }



// ay class a amra siklam 
// 1.what is array traversing in js 
//2.array te man ar sathe 2 + kora
//3.array mot man 33
//4.jor sonka ber kora jono
//5. bejor sonka
//6.negative man ber kora


// practice 
// 1. what is array traversing in js 

var arr = [4,5,1,6,8,-9,-44]

// for(var i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// // 2array ar sathe 2 plaus

// for(var i = 0; i<arr.length;i++){
//     console.log(arr[i] + 2)
// }

// 3 array mot man 33
// var sum = 0
// for(var i = 0; i<arr.length;i++){
//     sum  += arr[i]
    
// }
// console.log(sum);

// for(var i = 0; i<arr.length;i++){
//    if(arr[i] % 2 == 0){
//     console.log(arr[i]);
//    }
    
// }

//4 bejor man 
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
        console.log(arr[i]);
    }
}

//5 negative man ber koro
for(var i = 0; i < arr.length;i++){
    if(arr[i] <0){
        console.log(arr[i]);
    }
}
