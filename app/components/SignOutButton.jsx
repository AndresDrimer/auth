"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

function SignOutButton() {
  return (
    <button className='button' onClick={()=> signOut()}>SignOut</button>
  )
}

export default SignOutButton