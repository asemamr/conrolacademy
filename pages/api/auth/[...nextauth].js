import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"
import { MotionValue } from "framer-motion";
import { NextURL } from "next/dist/server/web/next-url";


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

        if (username === process.env.USER_NAME && password === process.env.PASSWORD) {
          return { username, id: 2 };
        }
        return null;
      },
      
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token
    },  
    session: ({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    }
  }
  secret: process.env.SECRET,
  jwt: {
    secret: process.env.SECRET,
    encryption: true, 
  }
})