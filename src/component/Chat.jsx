import React from 'react'
import { useState } from 'react'
import { addDoc , collection } from 'firebase/firestore'
import { db } from '../firebase-config'
const Chat = () => {
    const [newMassage, setNewMassage] = useState("")
    const messageRef = collection(db , 'massages') 
    const handleSubmit = async (e) =>{ 
        e.preventDefault() ; 
      
        if(newMassage === "") return  ; 
         
        await addDoc()
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