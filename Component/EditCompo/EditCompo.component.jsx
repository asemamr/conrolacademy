import styles from "./EditCompo.module.css";
import { useRef, useEffect, useState } from "react";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";


export function EditCompo() {
  const element = useRef([]);
  const { status } = useSession();

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
    const formData = {};
    e.preventDefault();
    const date = format(new Date(), "dd MMM yyyy");
    formData.date = date;
    const data = Array.from(e.currentTarget.elements);



    data.forEach(async field => {
      if (field.name == "") return
      formData[field.name] = field.value
      if (field.name == "image") {
        const data = await submitHandler(e);
        formData.image = data
        sendData(formData)
      }
    })
    

  }
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  async function changeEvent(e) {
    const reader = new FileReader();
    reader.onload = function (loadEvent) {
      setImageSrc(reader.result);
      setUploadData(undefined);
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  async function sendData(data) {
    const response = await fetch("/api/database", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const res = await response.json()
  }

  async function submitHandler(e) {
    e.preventDefault();
    const file = e.target.elements;
    const theImage = Array.from(file).find((el) => el.name === "image");
    const formData = new FormData();
    formData.append("file", theImage.files[0]);
    formData.append("upload_preset", "my-images");
    const data = await fetch("https://api.cloudinary.com/v1_1/dzoqvjo5t/image/upload", { method: "POST", body: formData }).then(res => res.json());
    return data.url;
  }
  if (status === "authenticated") {
    return (
      <div className={styles.div}>
        <h2 className="header">Add An Article</h2>
        <form method="post" className={styles.form} onSubmit={submitForm}>
          <div className={styles.name}>
            <input type="text" name="title" required ref={(el) => (element.current[0] = el)} />
            <div placeholder="Title *" className={styles.sudoEl}></div>
          </div>
          <div className={styles.writer}>
            <input type="text" name="writer" required ref={(el) => (element.current[1] = el)} />
            <div placeholder="Writer  *" className={styles.sudoEl}></div>
          </div>
          <div className={styles.link}>
            <input type="text" name="link" ref={(el) => (element.current[2] = el)} required />
            <div placeholder="Link *"  className={styles.sudoEl} ></div>
          </div>
          <div className={styles.description}>
            <textarea
              cols="30"
              rows="8"
              required
              ref={(el) => (element.current[3] = el)}
              name="description"
            ></textarea>
            <div placeholder="Description *" className={styles.sudoEl}></div>
          </div>
          <div className={styles.image}>
            <input type="file" name="image" onChange={changeEvent} required/>
            <div placeholder="Image *" className={styles.sudoEl} ></div>
            <img src={imageSrc} alt="" />
          </div>
          <input type="submit" value="ADD AN ARTICLE" className={styles.button} />
        </form>
      </div>
    )
  }
  else {
    return (
      <h2 className={styles.heading}>this page is allowed only for Admins</h2>
    )
  }
}