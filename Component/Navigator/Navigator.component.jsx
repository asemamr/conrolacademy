import styles from "./Navigator.module.css";
import Link from "next/link";
import logo from "../../images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";

export default function Navigator() {
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <div className={`${styles.nav} ${status === "loading"? styles.loading: styles.loaded}`}>
      <div className={`${styles.dev} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <picture>
                <Image src={logo} alt="logo"></Image>
              </picture>
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname == "/" ? styles.active : ""}>
                <i className="fa-light fa-igloo"></i>HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolioPage">
              <a className={router.pathname == "/portfolioPage" ? styles.active : ""}>
                <i className="fa-regular fa-memo-pad"></i>PORTFOLIO
              </a>
            </Link>
          </li>
          <li>
            <Link href="/articlesPage">
              <a className={router.pathname == "/articlesPage" ? styles.active : ""}>
                <i className="fa-regular fa-newspaper"></i>ARTICLES
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blogPage">
              <a className={router.pathname == "/blogPage" ? styles.active : ""}>
              <i className="fa-regular fa-file-lines"></i>BLOG
              </a>
            </Link>
          </li>
          {(session) && (
            <li>
            <Link href="/editPage">
              <a className={router.pathname == "/editPage" ? styles.active : ""}>
              <i className="fa-solid fa-pen-to-square"></i>EDIT
              </a>
            </Link>
          </li>
          )}
          <li>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? styles.active : ""}>
                <i className="fa-regular fa-message"></i>CONTACT
              </a>
            </Link>
          </li>
          {(!session) && (
            <li>
            <Link href="/api/auth/signin">
                <a onClick={() => {
                  e.preventDefault()
                  signIn("github")
                }} className={router.pathname == "/api/auth/signin" ? styles.active : ""}>
              <i className="fa-regular fa-unlock"></i>
              </a>
            </Link>
            </li>
          )
          }
          {(session) && (
            <li>
            <Link href="/api/auth/signout">
              <a onClick={()=> signIN()} className={router.pathname == "/api/auth/signout" ? styles.active : ""}>
              <i className="fa-regular fa-lock"></i>
              </a>
            </Link>
            </li>
          )
          }
          
        </ul>
      </div>
    </div>

  );
}
