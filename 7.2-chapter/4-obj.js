// update obj 
var point = {
x:3,
y:4,
z:5,
}
// 1.dot update 
point.x = 30
console.log(point);
// array notetion update 
point['y'] = 199
console.log(point);

var poop = 'z'
point[poop] = 3999
console.log(point);


var obj3= {
    a:3,
    b:4,
    c:2,
}
var replacesss = obj3.x = 100

console.log(replacesss);

var replacesss2 = obj3['y'] = 200
console.log(replacesss2);