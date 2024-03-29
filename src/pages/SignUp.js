// SignUp.js
import React, { useState }  from 'react'
import firebase from '../config/firebase'



const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
            })
            .catch(err => {
                console.log(err)
            }) 
    }

    //... (名前を入力するフォームを追加し、state'name'と紐付けましょう。)

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email' 
                        type='email' 
                        id='email' 
                        placeholder='Email' 
                        onChange={e =>{
                            setEmail(e.target.value)
                        }} 
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        name='password' 
                        type='password' 
                        id='password' 
                        placeholder='Password' 
                        onChange={e =>{
                            setPassword(e.target.value)
                        }} 
                    />
                </div>

                
                {/* ↓名前の入力するフォーム */}
                <div>
                    <label htmlFor='name'>Name</label>
                    <input 
                        name='name' 
                        type='name' 
                        id='name' 
                        placeholder='Name' 
                        onChange={e =>{
                            setName(e.target.value)
                        }} 
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp