import '../styles/globals.css'
import "../fontawesome/webfonts/all.css";
import Navigator from '../Component/Navigator/Navigator.component';
import "../styles/transition.css";
import Transition from '../Component/Transition/Transition.component';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return <Fragment>
    <Navigator/>
    <Component {...pageProps} />
  </Fragment>
  
  
}

export default MyApp
