import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  //no le aclaro pagina propia de sigin, uso la que viene default
 
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }