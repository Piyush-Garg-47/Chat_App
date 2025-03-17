import React from 'react'
import { useState } from 'react'
import { addDoc , collection ,serverTimestamp , onSnapshot, query, where } from 'firebase/firestore'
import { db ,auth } from '../firebase-config'
import '../styles/Style.css'; 

const Chat = (props) => {
    const {room} = props ; 
    const [newMassage, setNewMassage] = useState("")
    const [message, setmessage] = useState([]) 
    const messageRef = collection(db , 'massages') 
     
    useState(() =>{
        const queryMasseges = query(messageRef , where("room", "==" ,room)) ; 
          const unsuscribe = onSnapshot(queryMasseges , (snapShot)=>{
           let messages = [] ; 
               snapShot.forEach((doc) =>{
                    messages.push({...doc.data() , id: doc.id})
               })
          setmessage(messages) ; 
         }) 
         return ()=> unsuscribe() ; 
    },[])

    const handleSubmit = async (e) =>{ 
        e.preventDefault() ; 
      
        if(newMassage === "") return  ; 
         
        await addDoc(messageRef ,{
            text : newMassage , 
            createdAt : serverTimestamp(),
            user : auth.currentUser.displayName ,
             room , 
        })
        setNewMassage("") ; 
    }
  return (
    <div className='chat-app'>
        <div>{message.map((message) => <h1>{message.text} </h1> )}</div>
        <form onSubmit={handleSubmit} className='new-massage-form'> 
            <input onChange={(e) =>setNewMassage(e.target.value)} className='new-massage-input' placeholder='type your massage here...'/>
            <button type='submit' className='send-button'>Send</button>
        </form> 
    </div>
  )
}

export default Chat