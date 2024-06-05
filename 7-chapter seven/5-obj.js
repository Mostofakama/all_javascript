// delete object 
var del = {
    z:20,
    x:30,
    y:40
}

del.x = undefined
console.log(del);
delete del.y
console.log(del);