/*
    ES5 Internals (now we are using class in ES6)
    prototype(vid91):
    - if you create 1 object without any property & fun then it is null
    but there is object prototype
    - its like object class in java
    - you can use method of prototye obj for any oject you created like in java it is toString etc.
*/

let person1 = {};
console.log(person1);   // it has prototype obj 

////

let person2 = {
    name:"sk"           // it also has
};

////

function Person3(n){        // it also has but under cons prototye there is og prototype
    this.namee = n;
}
let person = new Person3("shreyas");
console.log(person);
/*
    Prototype Chaining happens here : 
    - it means it makes chain of connection
    1. cons function obj(person) -> 2. constructor prototype(person) -> 3. Object prototype(inBuilt JS) -> 4. NULL.
    - if you call any fun for obj then it checks 1 -> 2 -> 3 -> 4, if it not found then display error.
*/

//// Inheritance & prototyping

function Student(n){        
    this.namee = n;
}

// inside student cons prototype
Student.prototype.doing = function(){
    console.log("Studying..");
}

let stu1 = new Student("shreyas");

stu1.doing();

function Collage(n){        
    this.clgname = n;
}

// inside collage cons prototype
Collage.prototype.result = function(){
    console.log("Displaying result.....");
}

// Here we are inherit Collage(child) from studnt(parent)
// now clg able to access all method of student & stdent prototype
Collage.prototype.__proto__ = Object.create(Student.prototype);

let clg1 = new Collage("VIIT");

clg1.doing();
