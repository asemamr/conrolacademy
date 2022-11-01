import styles from "./Footer.module.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import logo from "../../images/logo.png";
import Image from "next/image";

export default function Footer() {
  const { data: session, status } = useSession();
  return (
    <div className={styles.div}>
      <div className={styles.info}>
        <div className={styles.imageContainer}>
          <Image src={logo}></Image>
          <p>
          We’re a nonprofit with the mission to provide a free, world-class
          education for anyone, anywhere.
        </p>
        </div>
        
      </div>
      <div className={styles.developer}>
        <p>
          Made By <span>Asem Amr</span>
        </p>
        <ul>
          {!session && (
            <li>
              <Link href="/api/auth/signin">
                <a
                  onClick={() => {
                    e.preventDefault();
                    signIn("github");
                  }}
                >
                  <i className="fa-regular fa-unlock"></i>
                </a>
              </Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/api/auth/signout">
                <a onClick={() => signIN()}>
                  <i className="fa-regular fa-lock"></i>
                </a>
              </Link>
            </li>
          )}
          <li>
            <Link href="https://www.linkedin.com/in/asem-amr-9334411a6/">
              <a>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/asem_amr_/">
              <a>
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
