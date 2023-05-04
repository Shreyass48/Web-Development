/*
    Rest Prameters (Vid81): 
    -This concept introduce in ES6.
    -Suppose arguments of function is not same every time its depends on user
    then we have to use rest params
    -It makes arr of arguments
*/

function Add(...arg)   // syntax ... and then name of arr
{
    let sum = 0;

    for(let i = 0; i < arg.length; i++)
        sum += arg[i];

    return sum;
}

console.log(Add(1,2));
console.log(Add(1,2,3));
console.log(Add(1,2,3,4));

/*
    Spread Operator (Vid82): 
    -It is used to open an array it means it just copy that array into another
    - Syntax is like rest param bt pace to use if different
    rest = fun args
    spread = arr na ll
*/

let arr1 = [1,2,3];
let arr2 = [4,5,6,...arr1]; // here we are including arr1 at end of arr2

console.log(arr2);

/*
    For of Loop (vid 83)
    - Most used lopp in JS to travers arr or str
*/

let brr = [1,2,3,4,5];
let str = "Shreyas";

for(let i of brr){
    console.log(i);
}

/*
    Array Destructuring (vid 85)
    - These concept introduce in ES6.
    - In these you can store array elements in variable in just one line
*/

let arr = ["shreyas",21,2001];

// Normal way
// let name = arr[0];
// let age = arr[1];
// let DOY = arr[2];

// Array Destructuring
let[name,age,DOY,city = "pune"] = arr;   // city new added variable & assign it as pune

/*
    Obj Destructring (vid86)
    - Same as arr Destructring
*/

let student = {
    name : "shreyas",
    age : 32
};

// Destructuring
let{name:fname, age : agee} = student;   // name(og) : fname(new var to access)

console.log(fname);