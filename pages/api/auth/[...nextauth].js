import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"
import { MotionValue } from "framer-motion";
import { NextURL } from "next/dist/server/web/next-url";


export default NextAuth({
  providers: [
    // CredentialsProvider({
    //   name: "Email",
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: ""},
    //     password: { label: "Password", type: "password"}
    //   },
    //   authorize(credentials, req) {
    //     const { username, password } = credentials;

    //     if (username === process.env.USER_NAME && password === process.env.PASSWORD) {
    //       return { username, id: 2 };
    //     }
    //     return null;
    //   },
      
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true, 
  }
})