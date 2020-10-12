// Login.js
import React, { useState, useContext }  from 'react'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import { Redirect } from 'react-router-dom'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/")
            })
            .catch(err => {
                console.log(err)
            }) 
    }

    const user = useContext(AuthContext)
    if(user) {
        return <Redirect to="/" />
    }
    
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='Email'
                        // 下記必要
                        onChange={e =>{
                            setEmail(e.target.value)
                        }} 
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password'
                        placeholder='password' 

                        // 下記必要
                        onChange={e =>{
                            setPassword(e.target.value)
                        }}

                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login