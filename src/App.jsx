import { useState ,useRef} from 'react'
import './App.css'
import '../src/styles/Style.css'
import Auth from './component/Auth'

import Cookies from 'universal-cookie' ; 
import Chat from './component/Chat';
const cookies = new Cookies() ; 

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room , setRoom] = useState(null) ; 

  const roomInputRef = useRef(null) ; 

  if(!isAuth){
    return (
      <>
       <div>
        <Auth setIsAuth={setIsAuth}/>
       </div>
      </>
    )
  }

  return(
         <div className='main'>
         {room ?(
           <Chat room={room}/>
           ): (
           <div className='ROOM'>
             <label>Enter Room Name :</label>
             <input type="text" ref={roomInputRef} />
             <button onClick={() =>setRoom(roomInputRef.current.value)}>Enter Chat</button>
             </div>
          ) }
        </div>
  )
}

export default App
