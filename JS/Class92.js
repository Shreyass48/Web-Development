/*
    Class(ES6) : 
    - Same like java cpp, constructor n all same
    - internally use prototype method
*/

class person{

    // static property
    static sproperty = "abc";

    // cons method
    constructor(n,a){
        this.name = n;
        this.age = a;
    }

    // normal method
    sayHi(){
        console.log("hii");
    }

    //static method
    static hello(){
        console.log("hello");
    }
}

let p1 = new person("shreyas",23);

console.log(p1.age);
p1.sayHi();
// call trough class coz its static
console.log(person.sproperty); 
person.hello();  


////////////// Inheritance ///////

class emp{
    constructor(){
        this.name = "shreyas";
    }
    
    information(){
        console.log("emp info");
    }
}

// inheritence
class manager extends emp{
    constructor(){
        super();  // to call parent cons
        this.dept = "R&D";
    }

    msg(){
        console.log("manager msg");
    }
}

let m1 = new manager();

m1.information();
console.log(m1.name);

///////

class employee{
    // private property have to declare outside of cons
    #name = "";
    constructor(n)
    {
        this.#name = n;   // you can access it using # (same for fun as well)
    }
}

let emp1 = new employee("shreyas");
console.log(emp1.name);

/////////
/*
    Mixin : 
    it means we can add object behaviour with class 
*/

//obj
let someMethods = {
    hello()
    {
        console.log("hello");
    },
    hi()
    {
        console.log("hi");
    }
}

//class
class abc{
    constructor()
    {
        this.age = 23;
    }
};

//actual mixin happens
Object.assign(abc.prototype, someMethods);  // adding method obj in abc prototype

let one = new abc();

one.hi();

