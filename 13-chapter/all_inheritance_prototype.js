//chapter 13
//class:1
//what is inheritance actually is
//class:120

// note:জাভাস্ক্রিপ্টে ইনহেরিটেন্স (inheritance) একটি ধারণা যা প্রোগ্রামিং ভাষার মধ্যে অন্যতম গুরুত্বপূর্ণ বৈশিষ্ট্য। ইনহেরিটেন্সের মাধ্যমে একটি ক্লাস অন্য একটি ক্লাসের
// সমস্ত প্রোপার্টি এবং মেথড (properties and methods) ইনহেরিট করতে পারে। এর ফলে কোড পুনরায় ব্যবহারযোগ্য হয় এবং অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) এর
// সুবিধা পাওয়া যায়।

// ইনহেরিটেন্স প্রধানত দুটি ভাবে কাজ করে: প্রোটোটাইপ ইনহেরিটেন্স এবং ক্লাসিক্যাল ইনহেরিটেন্স।

// প্রোটোটাইপ ইনহেরিটেন্স (Prototype Inheritance)
// জাভাস্ক্রিপ্টে প্রতিটি অবজেক্ট একটি প্রোটোটাইপের সাথে সংযুক্ত থাকে। প্রোটোটাইপ একটি অবজেক্ট যা অন্য অবজেক্টের প্রোপার্টি এবং মেথড শেয়ার করতে দেয়। যখন কোন
// অবজেক্টে কোনো প্রোপার্টি বা মেথড খুঁজে পাওয়া যায় না, তখন এটি প্রোটোটাইপ চেইনে উপরে যায় এবং সেখানে খুঁজে দেখে।


// প্রোটোটাইপ ইনহেরিটেন্স উদাহরণ

// code 1
// function Person(name){
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     console.log('Hello, ' + this.name);
// };

// function Student(name, studentID) {
//     Person.call(this, name);
//     this.studentID = studentID;
// }

// var stu = new Person('mostofa','343342')
// stu.greet()


// code 2
// function Person(name){
//  this.name = name;
// };

// Person.prototype.hello = function(){
//     console.log('Hello, ' + this.name);
// }

//  function Student(name,stuId){
//     Person.call(this, name)
//     this.stuId = stuId
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// var stu = new Student('Rahim', '12345');
// stu.hello(); 
//greet ke person ar mode input /inharitance kore cine jake amara prototype inharitance bole thaki 
// console.log(stu);



// ক্লাসিক্যাল ইনহেরিটেন্স (Classical Inheritance)
// ES6 থেকে জাভাস্ক্রিপ্টে class এবং extends কিওয়ার্ড যোগ করা হয়েছে, যা ক্লাসিক্যাল ইনহেরিটেন্স প্রয়োগ করে।

// code 3
// class Person{
//     constructor(name){
//         this.stuName = name
//     }

//     greet(){
//         console.log(`Hello ${this.stuName}`);
//     }

// }

// class Student extends Person{
// constructor(stuName,stuId){
//     super(stuName)
//     this.stuId = stuId
// }
// }

// var stu3 = new Student('mostofa','35353')

// stu3.greet()


//chapter 13
//class:2
//prototype and prototype inharitance
//class:121



// জাভাস্ক্রিপ্টে প্রোটোটাইপ (prototype) একটি অত্যন্ত গুরুত্বপূর্ণ ধারণা, যা অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) এর 
//ভিত্তি হিসাবে কাজ করে। প্রোটোটাইপের মাধ্যমে একটি অবজেক্ট আরেকটি অবজেক্টের প্রোপার্টি এবং মেথড শেয়ার করতে
// পারে।

// প্রোটোটাইপ কী?
// প্রত্যেকটি জাভাস্ক্রিপ্ট অবজেক্টের একটি প্রোটোটাইপ প্রপার্টি থাকে, যা আরেকটি অবজেক্টের রেফারেন্স ধারণ করে। যখন
// কোনো অবজেক্টে কোনো প্রোপার্টি বা মেথড খুঁজে পাওয়া যায় না, তখন জাভাস্ক্রিপ্ট সেই অবজেক্টের প্রোটোটাইপ চেইনে 
// উপরের দিকে খুঁজতে শুরু করে যতক্ষণ না পাওয়া যায় বা চেইনের শেষ পর্যন্ত পৌঁছায়।

// প্রোটোটাইপ চেইন (Prototype Chain)
// প্রোটোটাইপ চেইন হল একটি অবজেক্টের প্রোটোটাইপ এবং তার প্রোটোটাইপের প্রোটোটাইপ ইত্যাদি নিয়ে গঠিত একটি 
// চেইন। এটি একটি হায়ারার্কি তৈরি করে যেখানে প্রোপার্টি এবং মেথডগুলো একে অপরের সাথে শেয়ার করা যায়।

// উদাহরণ

// function person(name){
//     this.name = name
// }

// person.prototype.greet=function(){
//     console.log(`Hello ${this.name}`);
// }

// var stu = new person('mostofa')
// stu.greet()

// // Checking the prototype
// console.log(Person.prototype); // { greet: [Function] }
// console.log(person1.__proto__); // { greet: [Function] }
// console.log(person1.__proto__ === Person.prototype); // true



// উপরে উল্লেখিত উদাহরণে, আমরা একটি কনস্ট্রাক্টর ফাংশন Person তৈরি করেছি এবং greet নামক একটি মেথড Person
// এর প্রোটোটাইপে যোগ করেছি। এরপর person1 অবজেক্ট তৈরি করেছি, যেটি Person কনস্ট্রাক্টর ব্যবহার করে তৈরি হয়েছে।

// person1 অবজেক্টটি greet মেথডটি কল করতে পারে কারণ এটি Person এর প্রোটোটাইপ থেকে মেথডটি ইনহেরিট করেছে।

// প্রোটোটাইপ ইনহেরিটেন্স
// প্রোটোটাইপ ইনহেরিটেন্সের মাধ্যমে একটি অবজেক্ট আরেকটি অবজেক্ট থেকে প্রোপার্টি এবং মেথড ইনহেরিট করতে পারে। 
// এটি কোড পুনঃব্যবহার এবং ওবজেক্টগুলির মধ্যে সম্পর্ক স্থাপনের জন্য ব্যবহৃত হয়।

// উদাহরণ
// function Student(name,sId){
//     person.call(this)
// }




//chapter 13
//class:4
//what is property descriotor
//class:123

// জাভাস্ক্রিপ্টে প্রোপার্টি ডিসক্রিপ্টর (property descriptor) হলো একটি অবজেক্ট যা নির্দিষ্ট করে কীভাবে একটি প্রোপার্টি 
// অবজেক্টের মধ্যে আচরণ করবে। এটি প্রোপার্টির বিভিন্ন গুণাবলী সংজ্ঞায়িত করতে ব্যবহার করা হয়, যেমন প্রোপার্টি 
// এনুমারেবল (enumerable), কনফিগারেবল (configurable), রাইটেবল (writable), এবং ভ্যালু (value) ইত্যাদি।

// প্রোপার্টি ডিসক্রিপ্টরের মাধ্যমে আমরা প্রোপার্টির গুণাবলী নিয়ন্ত্রণ করতে পারি, যেমন কোন প্রোপার্টি পড়া যাবে, লেখা যাবে,
//  লুপের মাধ্যমে দেখা যাবে কিনা ইত্যাদি। প্রোপার্টি ডিসক্রিপ্টরের গুণাবলী গুলি প্রধানত দুই প্রকারের হয়ে থাকে: ডাটা 
//  প্রোপার্টি (data property) এবং অ্যাক্সেসর প্রোপার্টি (accessor property)।

// ডাটা প্রোপার্টি ডিসক্রিপ্টর (Data Property Descriptor)
// ডাটা প্রোপার্টি ডিসক্রিপ্টরের মাধ্যমে আমরা প্রোপার্টির ভ্যালু, রাইটেবল, এনুমারেবল এবং কনফিগারেবল গুণাবলী নির্ধারণ 
// করতে পারি।

// উদাহরণ

// let person = {};

// Object.defineProperty(person, 'name', {
//     value: 'John',
//     writable: false,      // প্রোপার্টির ভ্যালু পরিবর্তনযোগ্য হবে না
//     enumerable: true,     // প্রোপার্টি লুপের মাধ্যমে দেখা যাবে
//     configurable: true    // প্রোপার্টি আবার পরিবর্তন করা যাবে
// });

// console.log(person.name); // Output: John
// person.name = 'Jane';     // এটি কাজ করবে না, কারণ writable: false
// console.log(person.name); // Output: John


// অ্যাক্সেসর প্রোপার্টি ডিসক্রিপ্টর (Accessor Property Descriptor)
// অ্যাক্সেসর প্রোপার্টি ডিসক্রিপ্টরের মাধ্যমে আমরা getter এবং setter ফাংশন নির্ধারণ করতে পারি যা প্রোপার্টির ভ্যালু 
// পড়া  এবং লেখা নিয়ন্ত্রণ করে।

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// Object.defineProperty(person, 'fullName', {
//     get: function() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function(name) {
//         let parts = name.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     },
//     enumerable: true,
//     configurable: true
// });

// console.log(person.fullName); // Output: John Doe
// person.fullName = 'Jane Smith';
// console.log(person.firstName); // Output: Jane
// console.log(person.lastName);  // Output: Smith



//chapter 13
//class:5
//constructor prototype of any object
//class:124
// জাভাস্ক্রিপ্টে প্রতিটি অবজেক্টের একটি constructor প্রপার্টি থাকে, যা ঐ অবজেক্টটি কোন ফাংশন দ্বারা তৈরি হয়েছে তা 
// নির্দেশ করে। এটি ঐ ফাংশনটির একটি রেফারেন্স ধরে রাখে। আর প্রতিটি কন্সট্রাক্টর ফাংশনের একটি প্রোটোটাইপ প্রপার্টি 
// থাকে, যা সেই কন্সট্রাক্টর ফাংশনের ইনস্ট্যান্সদের প্রোটোটাইপ হিসাবে কাজ করে।

// উদাহরণ: কন্সট্রাক্টর ও প্রোটোটাইপ

// function person(name){
//    this.name = name
// }

// person.prototype.greet = function(){
//     console.log(`my name ${this.name}`)
// }

// let person1 = new person('mostofa');
// console.log(person1.constructor);
// console.log(person1.__proto__); 


// person1.greet();


// কিভাবে প্রোটোটাইপ চেইন কাজ করে
// Person হলো একটি কন্সট্রাক্টর ফাংশন।
// Person.prototype একটি অবজেক্ট যা নতুন Person ইনস্ট্যান্সের প্রোটোটাইপ হবে।
// person1 হলো Person কন্সট্রাক্টর ফাংশনের মাধ্যমে তৈরি একটি ইনস্ট্যান্স।
// person1.__proto__ হলো Person.prototype, যা সেই ইনস্ট্যান্সের প্রোটোটাইপ।
// person1.constructor হলো Person কন্সট্রাক্টর ফাংশনের একটি রেফারেন্স।
// প্রত্যেক ফাংশনের প্রোটোটাইপ প্রপার্টি একটি অবজেক্ট যা সেই ফাংশন দ্বারা তৈরি সকল ইনস্ট্যান্সের জন্য প্রোটোটাইপ
//  হিসাবে কাজ করে। যখন আপনি নতুন কোন অবজেক্ট তৈরি করেন, সেটি স্বয়ংক্রিয়ভাবে তার কন্সট্রাক্টর ফাংশনের 
//  প্রোটোটাইপ থেকে প্রোপার্টি এবং মেথডগুলি ইনহেরিট করে।

// উদাহরণ: প্রোটোটাইপ চেইন দেখানো
 
// function animal(name){
//     this.name = name
// }

// animal.prototype.spark = function (){
//     console.log(`${this.name} this make noice.`);
// }

// function dog(name){
//     animal.call(this,name)
// }
// dog.prototype = Object.create(animal.prototype)
// dog.prototype.constructor = dog
// var ani = new dog('dog')

// ani.spark()


//chapter 13
//class:6
//constructor prototype of any object
//class:126

function Square(width){
    this.width = width
}

Square.prototype = {
    draw:function(){
        console.log(`this is ${this.width}`);
    },
    // toString: function(){}

}

var sqr = Square('12')

console.log(sqr.draw());