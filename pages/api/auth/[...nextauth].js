import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: ""},
        password: { label: "Password", type: "password"}
      },
      authorize(credentials, req) {
        const { username, password } = credentials;

        if (username === process.env.USERNAME && password === process.env.PASSWORD) {
          return { username, id: 2 };
        }
        return null;
      },
      
    }),
  ],
  secret: process.env.AUTH_SECRET,
  url: "http://localhost:3000"
})