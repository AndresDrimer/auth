import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import SignButton from './SignButton';


async function Header() {
  const session = await getServerSession(authOptions) || {};
  console.log(session);

if (session && session.user){
  
  
  
  
  console.log("hola papi")}
  return (
    <div className='flex w-full  bg-gray-500/50 justify-between items-center px-[2rem] py-2'><p>Header</p>
    <div className='flex space-x-4 '>
  
    
    <img src={session?.user?.image} className='h-8 w-8 rounded-full'></img>
 
 
<SignButton />
    

  </div></div>
  )
}


export default Header