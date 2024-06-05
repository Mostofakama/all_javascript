// what is pure function 
// * it returns the same result if given the same arguments
// * it does not cause any observable side effects

function sqr(n){
    return n*n
}
console.log(sqr(3));


//that is not pure function besouce 
var n = 10 
function changs (){
    n = 100
}
changs()
console.log(n);

var point =
{
    x:100,
    y: 200,
}
   


function toPoint(point){
point.x = 1000,
point.y = 2000
console.log(point);
}
toPoint()
console.log(point);