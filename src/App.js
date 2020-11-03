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
        console.log(result.data);        
        setUsers(result.data)
      })
      .catch(error => {
        console.error("error: ", error);        
      });
    } 

  return (
    <div>
      <h1>Hello Ulriken consulting!</h1>

      <button onClick={getData}>
        Go Replit!
      </button>

       <div>
        <ul>
          {            
            users.map((item, i) => <li>Test</li>)            
          }
        </ul>
      </div>

    </div>
  );
}
