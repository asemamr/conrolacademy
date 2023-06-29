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
          <Link className={router.pathname == "/" ? styles.active : ""} href="/">
          <i className="fa-light fa-igloo"></i>HOME
          </Link>
        </li>
        <li>
          <Link href="/portfolioPage" className={
                router.pathname == "/portfolioPage" ? styles.active : ""
              }>
              <i className="fa-regular fa-memo-pad"></i>PORTFOLIO
          </Link>
        </li>
        <li>
          <Link href="/articlesPage" className={
                router.pathname == "/articlesPage" ? styles.active : ""
              }>
              <i className="fa-regular fa-newspaper"></i>ARTICLES
          </Link>
        </li>
        <li>
          <Link href="/blogPage" className={
                router.pathname === "/blogPage" ||
                router.pathname === "/blogPage/[slug]"
                  ? styles.active
                  : ""
              }>
              <i className="fa-regular fa-file-lines"></i>BLOG
          </Link>
        </li>
        {session && (
          <li>
            <Link href="/editPage" className={router.pathname == "/editPage" ? styles.active : ""}>
                <i className="fa-solid fa-pen-to-square"></i>EDIT
            </Link>
          </li>
        )}
        <li>
          <Link href="/contact" className={router.pathname == "/contact" ? styles.active : ""}>
              <i className="fa-regular fa-message"></i>CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}
