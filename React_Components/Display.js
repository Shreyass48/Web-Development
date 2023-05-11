function DisplayDate(){
    return <h1>{new Date().toLocaleTimeString()}</h1>  //you can display date directly
  }

function Displayy(){
    let name = "Shreyas";
    let age = 22;
  
    return <h1>My name is {name}, age is {age}.</h1>
}

export default Displayy;
