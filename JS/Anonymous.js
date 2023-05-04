// Anonymous fun : it means function has no name.
// it used when we call function only ones.

// Function expression : we assign fun to var
let abc = function(){
    console.log("Jay Ganesh...");
}

abc();  // fun call

/////

//Acutal use

function show()
{
    console.log("Hey!");
}

setTimeout(show,3000);  // 1para : fun, 2nd : milisec
// but these above show fun we use only once in code so go for anonymous
// eg:

setTimeout(function (){
    console.log("Hey!");
},3000);

///////////////////////////////////////////////////////////////////

// Immediatly invoked fun : we direct execute fun without its call(use less memory)

(function(){
    console.log("Jay ganesh!");
})(); 