import styles from "./Navigator.module.css";
import Link from "next/link";
import logo from "../../images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navigator() {
  const router = useRouter();

  return (
    <div className={styles.nav}>
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
          <li>
            <Link href="/editPage">
              <a className={router.pathname == "/editPage" ? styles.active : ""}>
              <i className="fa-solid fa-pen-to-square"></i>EDIT
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? styles.active : ""}>
                <i className="fa-regular fa-message"></i>CONTACT
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>

  );
}
