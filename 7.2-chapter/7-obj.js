// loop and x proparti ace obj a ace ki na 
var obj = {
    x:30,
    y:40,
    z:50
}


// console.log('a' in obj);
for(var i in obj) {
    // console.log(i);
    console.log( i + ' : ' + obj[i]);
}