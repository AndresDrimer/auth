import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'


export default async function Home() {

  const { session, user: { name, email, image } = {} } = await getServerSession(authOptions) || {};
  console.log(name);
  return (
    <main>
    página principal
    </main>
  );

}
