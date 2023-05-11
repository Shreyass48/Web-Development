// Steps to make component 

// 1. Import react & reactDom lib
import React from 'react';                // to work on multiple components
import ReactDOM  from 'react-dom/client'; // show components on browser

import Forprops from './Forprops';
import Displayy from './Display';


// 2. Get reference to div & id root
const ele = document.getElementById('root');   //targeted index.html



// 3. tell to react how take control of element
const root = ReactDOM.createRoot(ele);


// 4. create component
function App(){
  let value = "Jay Ganesh!";
  let no = 0;
  if(no > 1)
    value = "Error to print!";

  return <h1>{value}</h1>     // {} these used to print number & srting on browser
}


// 5. show component on screen
root.render(<App/>)   //passing app as JSX

