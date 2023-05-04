// console.log("shreyas"); // on console
// document.write("shreyas"); // on page
// alert("Shreyas") // alart pop up

document.getElementById("h").innerHTML = "Kulkarni";    // change current html element


/*
    Hoisting : 
    it is term where JS compiler read all JS file and paste all declarations 
    at top of file so you can do following thing

    hello();  // call before declaration it allowd

    function hello(){
        console.log("Jay Gnesh");
    }

    "use strict" :
    if wo direct initilize variable without declaring it then it is allowed in JS
    like x = 4;
    but if we on strict mode using "use strict" then it will not allowed 
    we have to declare first

*/