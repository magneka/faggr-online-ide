import React, { useState } from "react";
import axios from "axios"
import "./style.css";

// Click project og du ser git knappen

export default function App() {

  const [users, setUsers] = useState([])

  const getData = () => {      
      axios.get(
        `https://replitExpress.magneka.repl.co/users`
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
      Go Replit!
    </button>

    </div>
  );
}
