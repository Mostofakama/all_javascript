//accessing object
// 1.accessing of dot 
var point = {
    x:20,
    y:34,
    z:30,
}
point.e = 200
console.log(point.x);
console.log(point.y)
console.log(point.z)
console.log(point.e)

//array notetion 
console.log(point['x']);
console.log(point['a']);

var obj2 = {
    name:"mostofa",
    age:20,
    email:"mostofa@gmail.com",
    func:  function(){
    console.log(`My name is ${this.name} i am ${this.age} old . my email ${this.email}`)
   }
}

obj2.func()
console.log(obj2.name);
console.log(obj2.age);
console.log(obj2.email);