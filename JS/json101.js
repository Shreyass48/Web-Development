// parsing JSON (get data from server & display on screen)

let data = ` {
    "cmt" : "this is how we created JSON",
    "name" : "shreyas",
    "age" : 32
}`;

let dataobj = JSON.parse(data);
console.log(dataobj['name']);

// Stringyfy JSON (send data to server from client)

let student = {
    namee : "shreyas",
    agee : 32 
}

let jdata = JSON.stringify(student);

// you can send these data to sever usimg AJAX n all
console.log(jdata);