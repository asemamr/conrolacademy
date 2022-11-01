import styles from "./Navigator.module.css";
import Link from "next/link";
import logo from "../../images/logo.png";
import Image from "next/image";
import Links from "Links/Links.component";
import { useState, useEffect } from "react";

export default function Navigator() {
  const [open, setOpen] = useState(false);
  useEffect(()=> {
    document.addEventListener("click", (e) => {
      e.stopPropagation()
      if (!(e.target.id === "icon")) {
        setOpen(false);
      }
      else {
        return;
      }
    })
  } , [])
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
        <Links open={open}></Links>
        <i id="icon" className={`fa-solid fa-square-arrow-down ${styles.icon} ${(open)? styles.open : ""}`} onClick={()=> setOpen(!open)}></i>
      </div>
    </div>

  );
}
