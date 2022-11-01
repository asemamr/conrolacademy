import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./Links.module.css";
import { useState } from "react";

export default function Links({ open }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  return (
    <div className={styles.dev}>
      <ul className={open ? styles.open : ""}>
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? styles.active : ""}>
              <i className="fa-light fa-igloo"></i>HOME
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolioPage">
            <a
              className={
                router.pathname == "/portfolioPage" ? styles.active : ""
              }
            >
              <i className="fa-regular fa-memo-pad"></i>PORTFOLIO
            </a>
          </Link>
        </li>
        <li>
          <Link href="/articlesPage">
            <a
              className={
                router.pathname == "/articlesPage" ? styles.active : ""
              }
            >
              <i className="fa-regular fa-newspaper"></i>ARTICLES
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blogPage">
            <a
              className={
                router.pathname === "/blogPage" ||
                router.pathname === "/blogPage/[slug]"
                  ? styles.active
                  : ""
              }
            >
              <i className="fa-regular fa-file-lines"></i>BLOG
            </a>
          </Link>
        </li>
        {session && (
          <li>
            <Link href="/editPage">
              <a
                className={router.pathname == "/editPage" ? styles.active : ""}
              >
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
      </ul>
    </div>
  );
}
