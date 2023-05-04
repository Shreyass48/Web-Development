/*
1. alert() : shows alert Message 
2. prompt() : shows msg for input, if ip not given then it considered as NULL
3. confirm() : shows confirms msg, e.g. : are you sure to delete "YES","NO"
*/

// alert("Jay Ganesh...");

// let age  = prompt("Enter your age : ");
// if(age != null)
// {
//     document.write(`your age is ${age}`);
// }
// else
// {
//     document.write("age field is blank");
// }

let responce = confirm("Are you sure, you want to delete it?");
if(responce)
{
    document.write("Deleted!");
}
else
{
    document.write("Not  Deleted!");

}

/* Type Conversion
    // Number to str & vice versa
    let a = 3;
    console.log(typeof a);

    let type = String(a);
    console.log(typeof type);
*/