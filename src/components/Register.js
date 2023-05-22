import React from 'react'
import {useState} from "react"

import {registerUser} from "../utils"

const Register = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await registerUser(username,email,password)
    }


    return (
        <div className="register">
            <h2>Please register below</h2>
            <form onSubmit={submitHandler}>
           
            <label>Username: 
                <input onChange={(event) => setUsername(event.target.value)} required></input>
            </label>
            
            <br></br>

            <label>Email: 
                <input onChange={(event) => setEmail(event.target.value)} required></input>
            </label>

            <br></br>
            
            <label>Password: 
                <input type="password" onChange={(event) => setPassword(event.target.value)} required></input>
            </label>
            
            
            <br></br>

            <button type="submit">Click here to register</button>
        </form>

    </div>
    )

}

export default Register