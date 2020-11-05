import React, { useState } from "react";
import "./style.css";
import {useAxios} from './useAxios';
import {useAxiosPost} from './useAxiosPost'

// Click project og du ser git knappen
//<div>{!state.loading && JSON.stringify(state.data)}</div>

export default function App() { 

  const {state: poststate, postData} = useAxiosPost();
  const {state, getData} = useAxios();
  const {state: sate2, getData: getData2} = useAxios();

  const createRecord = () => {
    let id = '3';
    const record = {
      firstname: 'Ola',
      lastname: 'Dunk'
    }  
    postData(id, record);
  }

  if (state.loading) return (
    <span>Laster data</span>
  )  

  return (
    <div>
      <h1>Hello Ulriken consulting!</h1>

      <button onClick={() => createRecord()}>
        post Replit!
      </button>     

      <button onClick={getData}>
        Go Replit!
      </button>     



      <div>{!state.loading && (<ul>
          {state.data.result.map((item, i) => 
            <li  key={i}>{item.lastname}, {item.firstname}</li>)            
          }
        </ul>
      )}</div>
                    
       <div>
          {JSON.stringify(state)}         
      </div>

    </div>
  );
}
