// Room.js
import React, { useState, useEffect, useContext } from 'react'
import firebase from './config/firebase'
import { AuthContext } from './AuthService'

const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')
    // console.log("point1")
    useEffect(() => {
        // console.log("point2")
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                // console.log("point3")
                setMessages(messages)
                // console.log("point4")
                // const comments =  messages.map(message => (
                //     console.log(message.user)
                // )) 
            })
    }, [])
    // console.log("point5")
    const user = useContext(AuthContext)

    const handleSubmit = () => {
        firebase.firestore().collection('messages').add({
            content: value,
            user: user.displayName
        })
    }
    // console.log(messages)
    // console.log("point6")
    // const comments =  messages.map(message => (
    //     console.log(message.user)
    // )) 

    // console.log(
    //     messages.map(message => (
    //         message.user
    //     )) 
    // )
    return (
        <>
            <h1>Room</h1>
            <ul>
                {
                    messages ?
                    messages.map((message, index) => (
                        <li key ={index}>{message.user}: {message.content}</li>

                    )) :
                    <p>...loading</p>
                }
            </ul>
            {/* 下記必要 */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room