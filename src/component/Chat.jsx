import React from 'react'
import { useState } from 'react'
import { addDoc , collection ,serverTimestamp } from 'firebase/firestore'
import { db ,auth } from '../firebase-config'
import '../styles/Style.css'; 

const Chat = (props) => {
    const {room} = props ; 
    const [newMassage, setNewMassage] = useState("")
    const messageRef = collection(db , 'massages') 
    const handleSubmit = async (e) =>{ 
        e.preventDefault() ; 
      
        if(newMassage === "") return  ; 
         
        await addDoc(messageRef ,{
            text : newMassage , 
            createdAt : serverTimestamp(),
            user : auth.currentUser.displayName ,
             room , 
        })
    }
  return (
    <div className='chat-app'>
        <form onSubmit={handleSubmit} className='new-massage-form'> 
            <input onChange={(e) =>setNewMassage(e.target.value)} className='new-massage-input' placeholder='type your massage here...'/>
            <button type='submit' className='send-button'>Send</button>
        </form> 
    </div>
  )
}

export default Chat