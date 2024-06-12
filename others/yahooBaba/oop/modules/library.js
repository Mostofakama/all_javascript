// //default 
//2. export default function (){
//     console.log('hello');
// }


//  var message = "ES6 modules"
//   function user (name){
//     console.log(`my name is ${name}`);
//  }

//   class hello{
//     constructor(name,age,salary){
//         this.name = name
//         this.age = age
//         this.salary = salary
//     }
//     info(){
        
//         console.log(`hello,my name is ${this.name}, i am ${this.age} old .my salary ${this.salary}`);
//     }
   
//  }

//   class sorry extends hello{
//     info(){
//         super.info()
//         console.log(`sorry,my name is ${this.name}, i am ${this.age} old .my salary ${this.salary}`);
//     }
//  }

//1.  export{ message,user,hello,sorry }


function person (){
    console.log('my name is mostofa kamal');
}

export {person}