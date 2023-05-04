// Creating obj
let student = {
    fname : "Shreyas",
    lname : "kulkarni"
};

// let student2 = new Object();
// student2.name = "sgk";

// access key
console.log(student.fname);
console.log(student['fname']);

for(let key in student)
{
    console.log(key + " : " + student[key]);
}


// add property, method in obj
student.age = 21;
delete student.age;

student.sayHello = function()
{
    console.log("Hello!");
}
student.sayHello();

/*
    Getter, Setter 
    let student = {
    fname : "Shreyas",
    lname : "kulkarni",
    get getname(){                      // getter method
      return this.fname.toUpperCase();
    },
    set setname(n){                     //setter method
      this.fname = n.toUpperCase();
    }
    };
    console.log(student.getname);  // calling getname fun without() coz get method & it return value in CAPS

    student.setname ="Shreyasss";    // setting value in obj with CAPS
    console.log(student.fname);     
*/

/*
    Object Constructor (Class in Cpp)
    function Student(fname, lname, no)
    {
        this.FirstNmae = fname;
        this.LastName = lname;
        this.age = no;
    }

    var stu1 = new Student("Shreyas","Kulkarni", 21);
    console.log(stu1['age']);

    // if you want to add property, behaviour in obj cons
    Student.prototype.nationality = "indian";
    Student.prototype.name = function(){
        return this.FirstName + " " + LastName;
    }

*/