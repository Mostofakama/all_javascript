// class one 
// object literal
// var rect = {
//    width:100,
//    height:50,
//    draw:function(){
//       console.log(`my height is ${this.height}`)
//    }

// }

// rect.draw()
// console.log(rect.height)

// class tow // class:108
// what is 'this' keyword in js 
// function myThis(){
//    console.log(this)
// }
// new myThis()

// var rectOne={
//    width:100,
//    height:300,
//    draw: function (){
//       console.log(this.width + this.height);
//    },

// }

// rectOne.draw()


//factory pattern
//class three//class 109


//constrauctor pattern
//class : 110 // class:four

// var ractangle2 = function (width,height){
//   this.width=width,
//    this.height=height,
//    this.draw= function(){
//     return  this.princiProperti()
//    },
   
//    this.princiProperti = function(){
//       console.log(this.width + this.height);
//    }
// }

// var rect5 = new ractangle2(3,6)
// rect5.draw()


// this
//implicit binding 
//ki vabe bujbo kon this call hoyce 
// printName ar bam pase fist ace 
// fist ar obj holo person
//person ar vitore ja ace sei this gulo bujace

// var person = function(name,age){
//    return {
//         name :name,
//         age:age,
//         printName:function(){
//          console.log(this.name);
//         }
//    }
// }

// var fist = person('sakib',24)
// fist.printName()


//explicit binding

//1 call method kono function ar mode obj input diya thake 
//2 call  method obj ar madome function ar this value gula diya thake 
//3 call method ar first argument hisabe akta obj niya thake
//4 call method argument hisabe unlimated paramitar niya thake  
var printNmae = function(a,b,c){
   console.log(`${this.name} is ${a}, ${b}, ${c}`)
}


var v1 ="actor"
var v2 = "all rounder"
var v3 = "best player"
var sakib = {
   name:"sakib",
   age:20,
}
//call
// printNmae.call(sakib,v1,v2,v3)

//apply
//apply first paramitar obj nei and second paramitar array nay
// var v = [v1,v2,v3]
// printNmae.apply(sakib,v)

//bind
//call & apply ar moto bind nije nine call hoy na ar jono ata re var ar mode niya tar por call korte hoy

var myBind = printNmae.bind(sakib,v1,v2,v3)

myBind()

// window this 

var window = function(){
   console.log(this);
}
var obj = {
   name:"sakib",
   age:23,
}

window()

