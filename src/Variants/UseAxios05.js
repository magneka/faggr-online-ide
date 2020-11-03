import React, { useState } from "react";
import axios from "axios";

export const useAxios = () => {
  
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios
      .get(`https://replitExpress.magneka.repl.co/users2`)
      .then(result => {
        console.log(result.data);
        setUsers(result.data);
      })
      .catch(error => {
        console.error("error: ", error);
      });
  };

  return { users, getData };
};
