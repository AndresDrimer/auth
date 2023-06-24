"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

function SignInButton() {
  return (
    <button  className='button' onClick={()=> signIn("google")}>SignIn</button>
  )
}

export default SignInButton