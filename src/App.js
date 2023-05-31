import React from "react";
import Login from "./components/Login"
import Register from "./components/Register"
import ReadUsers from "./components/ReadUsers"
import {authCheck} from "./utils"
import {getCookie} from "./common"
import {useState, useEffect} from 'react'



function App() {

  const [user,setUser] = useState()
  // useEffect will run everytime the page reloads
  useEffect(() => {
    // cookie variables stores the jwt token stored in the cookie
    let cookie = getCookie("jwt_token")
    // if a cookie is present with the name jwt_token
    if(cookie !== false) {
      loginWithToken(cookie)

    }
     console.log(cookie)
  }, [])

  const loginWithToken = async (cookie) => {
    let user = await authCheck(cookie)
    console.log(user)
    setUser(user)
  }

  return (
    <div className="App">
      <h1 id="MAA">My amazing app!</h1>

      <Register/>
      <br></br>
      <br></br>
      
      <Login newUser = {setUser} />
       
      {
        user
        ?
        <>
        <h2>Hello Welcome {user} you have logged in</h2>
        <ReadUsers/>
        </>
        :
        <h2 id="PLI">Please log in</h2>
      }

    </div>
  );
}

export default App;
