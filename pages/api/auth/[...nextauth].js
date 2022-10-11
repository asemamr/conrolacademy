import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"
import { MotionValue } from "framer-motion";


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

        if (username === "Fadi Alyousef" && password === "0127245956") {
          return { username, id: 2 };
        }
        return null;
      },
      
    }),
  ],
  secret: "4edb8bd7b55af7edf7109c3b0da3f125",
  url: "https://conrolacademy.vercel.app"
})