/*
    cookie :
    - it is a data which is store into you brower as well as server
    - data into key value pair only
    - to see cookie go to browser inspect -> application -> cookie
*/

//create cookie
document.cookie = "item = milk"

//read cookie
let x = document.cookie;
console.log(x);

// delete
document.cookie = "item = milk; expires = Mon,1 May 2023 12:00:00 UTC";


/*
    web storage(after HTML5) : used to store data
    1. local storage : 
        - space : 10mb
        - browser : html5
        - accessiable from : any window
        - expiry : never
        - storage loc : brower only
        - sent with req : no
    2. session storage : 
        - space : 5mb
        - browser : html5
        - accessiable from : same tab
        - expiry : on tab close
        - storage loc : brower only
        - sent with req : no
*/

//setting local
localStorage.setItem('name','sk');
localStorage.setItem('age',32);


//getting local
console.log(localStorage.getItem('name'));

//remove local
localStorage.removeItem('name');

////////

//setting session
sessionStorage.setItem('name','sk');
sessionStorage.setItem('age',32);


//getting session
console.log(localStorage.getItem('name'));

//remove locsessional
localStorage.removeItem('name');