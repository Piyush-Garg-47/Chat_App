import React from 'react'

const Chat = () => {
  return (
    <div className='chat-app'>
        <form className='new-massage-form'> 
            <input className='new-massage-input' placeholder='type your massage here...'/>
            <button type='submit' className='send-button'>Send</button>
        </form> 
    </div>
  )
}

export default Chat