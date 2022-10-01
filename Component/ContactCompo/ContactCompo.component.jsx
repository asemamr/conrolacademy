import styles from "./ContactCompo.module.css";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function ContactCompo() {
  const [imageSrc, setImageSrc] = useState();
  const element = useRef([]);
  useEffect(() => {
    element.current.forEach((el) => {
      el.addEventListener("blur", (e) => {
        el.parentElement.classList.toggle(
          styles.active,
          e.currentTarget.value !== ""
        );
      });
    });
  }, []);

  async function submitForm(e) {
    e.preventDefault();
    let formData = {};
    const data = Array.from(e.currentTarget.elements);
    data.forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    })  
    

  }
  return (
    <div className={styles.div}>  
      <h2 className="header">CONTACT FORM</h2>
      <form method="post" className={styles.form} onSubmit={submitForm}>
        <div className={styles.name}>
          <input type="text" name="name" required ref={(el) => (element.current[0] = el)} />
          <div placeholder="Name *" className={styles.sudoEl}></div>
        </div>
        <div className={styles.email}>
          <input type="email" name="email" required ref={(el) => (element.current[1] = el)} />
          <div placeholder="Email  *" className={styles.sudoEl}></div>
        </div>
        <div className={styles.phone}>
          <input type="tel" name="phone" ref={(el) => (element.current[2] = el)} required />
          <div placeholder="Phone"  className={styles.sudoEl} ></div>
        </div>
        <div className={styles.message}>
          <textarea
            cols="30"
            rows="8"
            required
            ref={(el) => (element.current[3] = el)}
            name="message"
          ></textarea>
          <div placeholder="Message *" className={styles.sudoEl}></div>
          </div>
        <input type="submit" value="SEND MESSAGE" className={ styles.button } />
      </form>
      <div className={styles.info}>
        <p>ADDRESS</p>
        <h4>69 Queen St, London, United Kingdom</h4>
        <p>PHONE</p>
        <h4>(+706) 898-0751</h4>
        <p>EMAIL</p>
        <a href="mailto:frenifyteam@gmail.com" className={styles.email}>frenifyteam@gmail.com</a>
      </div>
    </div>
  );
}
