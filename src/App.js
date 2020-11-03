import React from "react";
import axios from "axios"
import "./style.css";

// Click project og du ser git knappen

export default function App() {

  const getData = () => {      
      axios.get(
        `https://ReplitExpress.magneka.repl.co`
      )
      .then(result => {
        console.log(result);        
      })
      .catch(error => {
        console.error("error: ", error);        
      });
    } 

  return (
    <div>
      <h1>Hello Ulriken consulting!</h1>
      <p>Start editing to see some magic happen :)</p>

    <button onClick={getData}>
      Click me!
    </button>

    </div>
  );
}
