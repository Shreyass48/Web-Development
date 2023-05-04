/*
    Arrow Fun(vid93)
*/
// Normal fun
function add(a,b)
{
    return a+b;
}

//arrow fun
let addA = (a,b) => {
    return a+b;
}

// if fun contain only 1 line and that line is return line then syntax is
let addB = (a,b) => a+b;

// if fun has no args
let addC = () => {
    //
}

console.log(add(1,2));
console.log(addA(1,2));
console.log(addB(1,2));

/*
    CallBack fun(vid 94):
    - it means we can pass fun as argument then it caled callback fun
    - why we not direct use tp() function instead of temp() n all coz
    - it is generic for first time it is tp() bt second time it take tp2()
    - so not need to edit fun just change fun calls
*/

function tp(){
    console.log("tp");
}
function tp2(){
    console.log("tp2");
}

function work(a,b, temp){  //temp as tp fun
    temp();
    return a+b;
}

console.log(work(10,11,tp));   //passing tp as fun
console.log(work(10,121,tp2));   //passing tp as fun
console.log(work(10,121,function(){
    console.log("Anonomus");
}));   //passing Anonomus fun


/*
    Map function(vid 95)
    -it is fun where we perform operation on one arr and store result into another arr
*/

let arr1 = [1,2,3,4];


// using anyonomous fun
let arr2 = arr1.map(function(val){
    return val*2;
});

//using arrow
let arr3 = arr1.map(val => val*3);

console.log(arr2);
console.log(arr3);

/*
    filter fun(vid 96)
    - we can filter arr and stire into another(like map)
    - suppose you have 10 pepole data & you have to filter male then use it take gender for condition
*/

let brr1 = [1,6,7,4,5];

// using arrow fun
let brr2 = arr1.filter(val => val < 5);