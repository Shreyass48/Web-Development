let str = "Shreyas";
console.log(str);

let greet = `Hi, ${str}`;
console.log(greet);

let strr = "India is my country, and i'm proud to be an indian, is"
//
console.log(str.length);
console.log(str[1]);
console.log(str + " " +  greet);  // str.concat(" ",str2);

let subs = strr.substring(6 ,19);
console.log(subs);

//let pos = strr.indexOf("is");
let pos = strr.lastIndexOf("is");
console.log(pos);

// trim() : used to remover front and rear extra spaces
// toUpperCase(),toLowerCase()
// replace("good", "best")

console.log(strr.includes("iss"));   //find