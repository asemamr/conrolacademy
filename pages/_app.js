import '../styles/globals.css'
import "../fontawesome/webfonts/all.css";
import Navigator from '../Component/Navigator/Navigator.component';
import "../styles/transition.css";
import Transition from '../Component/Transition/Transition.component';
import { Fragment } from 'react';
import {SessionProvider} from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return <SessionProvider session={session}>
    <Navigator/>
    <Component {...pageProps} />
  </SessionProvider>
  
  
}

export default MyApp
