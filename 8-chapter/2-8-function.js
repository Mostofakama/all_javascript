// function declaration
// function functionName(){

// }
 
// function add(){
//     var a = 20
//     var b = 10
//     console.log(a+b);
// }
// function addNew(){
//     var a = 50
//     var b = 60
//     console.log(a-b);
// }

// class 3 
// add()



// class 4 paramiter argument
// function paramit(a,b,c){
//     var mi = a
//     var ni = b
//     var bi = c
//     console.log(mi+ni+bi);
// }
// paramit(10,20,30)
// paramit(2,4,20)
// paramit(20,20,30)
// paramit(10,50,30)

// var arr1 = [2,3,4,6]
// var arr2 = [5,6,7]
// var arr3 = [8,9,0]

// var sum1 = 0
// for(i=0;i<arr1.length;i++){
//     sum1 += arr1[i]
// }

// console.log(sum1);

// var sum2 = 0
// for(i=0;i<arr2.length;i++){
//     sum2 += arr2[i]
// }

// console.log(sum2);

// var sum3 = 0
// for(i=0;i<arr3.length;i++){
//     sum3 += arr3[i]
// }

// console.log(sum3);

// function myFun(arr){
//     sum = 0
//     for(var i=0; i< arr.length; i++){
//         sum += arr[i]
//     }
//     // console.log(sum);
//     return sum
// }
// console.log(myFun(arr1));
// myFun(arr2)
// myFun(arr3)



// class 6 
// setTimeout(
//     function(){
// console.log('i will call 5 secend after');
//     },5000)

// function big (a,b){
//     console.log(a+b);
// }
// big(2,3)

// class 7 
// what is inner function 


// function innerfirst(grit,name){
//     function inneer(){
//         console.log(grit, name);
//     }
// inneer()
// }
// innerfirst('Good Morning','Mostofa kamal')


// function mathOne(a,b){
//     function mathTow(){
//         console.log(a+b);
//     }
//     mathTow()
// }
// mathOne(39,3)


function myName(grit,name){
    function firstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ''
        }
    }
    firstName()
    var message = grit + ' ' + firstName()
    console.log(message);
}
myName('Good Morning','Mostofa kamal')
// User
// I will give you 50 mcq about google ads mesaurement assesment...
// I need anwer only, no need defination, please do follow up for all

// start now...