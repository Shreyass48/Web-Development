let Arr = [1,2,3,4,5];

// insert/Delete at end
Arr.push(6);
Arr.pop()

// insert/Delete at front
Arr.unshift(0);
Arr.shift();
console.log(Arr);

// Erase from particular pos
Arr.splice(2,1)   // from 2nd pos & one ele (3rd will be delete)
// Arr = [] erase all array

// Make sentence in array
let sentence = "My name is shreyas";
let wordArr = sentence.split(" ");   // split into arr

let reSentence = wordArr.join(" ");  // using join we make sentence of arr elements

console.log(wordArr);
console.log(reSentence);

// console.log(Array.isArray(Arr))