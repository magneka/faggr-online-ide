import React, { useState } from "react";
import "./style.css";
import {useAxios} from './useAxios';

// Click project og du ser git knappen
//<div>{!state.loading && JSON.stringify(state.data)}</div>

export default function App() {   
  const {state, getData} = useAxios();

  if (state.loading) return (
    <span>Laster data</span>
  )

  return (
    <div>
      <h1>Hello Ulriken consulting!</h1>

      <button onClick={getData}>
        Go Replit!
      </button>     

      <div>{!state.loading && (<ul>
          {state.data.map((item, i) => 
            <li>{item.lastname}, {item.firstname}</li>)            
          }
        </ul>
      )}</div>
                    
       <div>
          {JSON.stringify(state)}         
      </div>

    </div>
  );
}
