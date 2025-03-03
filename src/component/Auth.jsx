import React from 'react'
import { auth , provider } from '../firebase-config' ; 
import { signInWithPopup } from 'firebase/auth';

import Cookies from 'universal-cookie' ; 
const cookies = new Cookies() ; 
const Auth = (props) => {
    const {setIsAuth} = props ; 
    const signInWithGogle = async () =>{
          try{
            const result =  await signInWithPopup(auth , provider) ; 
          console.log(result);
          cookies.set("auth-token" , result.user.refreshToken )
          setIsAuth(true) ;  
          }catch(err){
                console.error(err) ; 
          }
    }
  return (
    <div className='auth'>
        <p>Sign in with gogle to continue </p>
        <button onClick={signInWithGogle}>Sign in with gogle</button>
    </div>
  )
}

export default Auth