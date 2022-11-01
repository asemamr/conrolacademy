import styles from "./HomeBlock.module.css";
import Image from "next/image";
import image1 from "/images/home-page/1.png";
import image2 from "/images/home-page/2.png";
import image3 from "/images/home-page/3.png";
import { useEffect } from "react";

export default function HomeBlock({ imageSrc, header, paragraph }) {
  function setColor(color) {
    document.documentElement.style.setProperty(
      "--test-color",
      color
    );
  }
  return (
    <div className={styles.dev}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc == 1 ? image1 : imageSrc == 2 ? image2 : image3}
          className={styles.image}
          alt="the home page image"
        />
      </div>
      <div className={styles.text}>
        <h2>{header}</h2>
        <p>{paragraph}</p>
        
      </div>
    </div>
  );
}
