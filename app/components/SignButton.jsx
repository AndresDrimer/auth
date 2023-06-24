import React from 'react'
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

async function SignButton() {
    const session = await getServerSession(authOptions) || {};
  console.log(session);

if (session && session.user){
 return (
    <><p>{session.user.name}</p>
 <SignOutButton />
</>)

}
  
  
return <SignInButton />

}
  

export default SignButton