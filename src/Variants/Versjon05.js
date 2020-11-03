import React, { useState } from "react";
import "./style.css";
import {useAxios} from './useAxios';

// Click project og du ser git knappen

export default function App() {   
  const {users, getData} = useAxios();

  return (
    <div>
      <h1>Hello Ulriken consulting!</h1>

      <button onClick={getData}>
        Go Replit!
      </button>

      <div>
        <ul>
          {users.map((item, i) => 
            <li>{item.lastname}, {item.firstname}</li>)            
          }
        </ul>
      </div>

    </div>
  );
}
