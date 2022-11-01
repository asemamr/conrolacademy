import '../styles/globals.css'
import "../fontawesome/webfonts/all.css";
import Navigator from '../Component/Navigator/Navigator.component';
import "../styles/transition.css";
import Transition from '../Component/Transition/Transition.component';
import { Fragment } from 'react';
import { SessionProvider } from "next-auth/react"
import Footer from 'Footer/Footer.component';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  
  return <SessionProvider session={session}>
    <Navigator />
        <Component {...pageProps} />
    <Footer/>
  </SessionProvider>
  
  
}

export default MyApp
