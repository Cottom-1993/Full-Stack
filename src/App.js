import React from "react";
import Login from "./components/Login"
import Register from "./components/Register"

import {useState} from 'react'


function App() {

  const [user,setUser] = useState()
  return (
    <div className="App">
      <h1>My amazing app!</h1>

      <Register/>
      <br></br>
      <br></br>
      
      <Login newUser = {setUser} />
    

      {
        user
        ?
        <h2>Hello Welcome {user} you have logged in</h2>
        :
        <h2>Please log in</h2>
      }

    </div>
  );
}

export default App;
