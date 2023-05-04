// Module : 
// - if you want to allow anything from these file to another file you have to EXPORT it

let acc_no = 12345;
let acc_type = "saving";

function withdraw(){
    console.log("Amount deduted");
 }

function deposit(){
    console.log("Amount Added");
 }

 // one line export
export { withdraw, deposit}