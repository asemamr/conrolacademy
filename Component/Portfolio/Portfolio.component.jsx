import styles from "./Portfolio.module.css";
import image from "../../images/download.jpg";
import Image from "next/image";
import signature from "../../images/signature.png";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const imageMove = useRef();
  const borderMove = useRef();
  const tabTransition = useRef(null);
  const [toggle, setToggle] = useState("experience");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = scrollYProgress;

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (
        imageMove == null ||
        imageMove.current == null ||
        borderMove == null ||
        borderMove.current == null
      ) {
        return;
      }
      imageMove.current.setAttribute(
        "style",
        `transform: translate3d(${-e.pageX / 100}px, ${
          -e.pageY / 100
        }px, 0px); transform-style: preserve-3d; backface-visibility; hidden`
      );
      borderMove.current.setAttribute(
        "style",
        `transform: translate3d(${-e.pageX / 200}px, ${
          -e.pageY / 200
        }px, 0px); transform-style: preserve-3d; backface-visibility; hidden`
      );
    });
  }, []);

  return (
    <div>
      <motion.div
        className={styles.scrollProgress}
        style={{ scaleX }}
      ></motion.div>
      <div className={styles.dev}>
        <div className={styles.compo} ref={imageMove}>
          <div className={styles.imageCompo}>
            <picture>
              <Image
                src={image}
                alt="portfolio"
                className={styles.image}
              ></Image>
            </picture>
          </div>
          <div className={styles.border} ref={borderMove}></div>
        </div>
        <div className={styles.text}>
          <h2>
            WEBSITE DEVELOPER
          </h2>
          <p>
            Founder of Frenify. Professional UI/UX designer and web developer
            based on London. Sometimes works as a freelancer.
          </p>
          <picture>
            <Image alt="signature" src={signature}></Image>
          </picture>
        </div>
      </div>

      <div className={styles.biography}>
        <h3 className="header">BIOGRAPHY</h3>
        <p className={styles.mainText}>
          I am an enthusiastic, curious, and technology-focused researcher
          pursuing his Ph.D. in Control Systems from the esteemed University of
          Dicle, Turkey. I have authored and published several papers and
          participated in several international conferences. I perceive myself
          as a problem-solver and keep myself engaged in technology and solving
          pressing problems in the industry. Over the last few years, I have
          worked on various sensor-based technologies and dealt with Big Data. I
          am quite proficient in MATLAB and have some experience in Python.{" "}
          <br />
          <br />I am originally from Syria, where I got an opportunity to work
          hands-on in maintaining control system equipment in the petroleum and
          gas fields. I recently enrolled in a distance-learning MBA program to
          hone my skills in marketing, innovation, and entrepreneurship.
        </p>
        <div className={styles.download}>
          <span className={styles.before}></span>
          <a href="https://drive.google.com/uc?export=download&id=1B6EsEpIApAEFo4AqYRN5NynZQ98VN9_H">
            <svg
              width="1000"
              height="1000"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="download-solid (2) 1" clipPath="url(#clip0_1_2)">
                <path
                  id="arrow"
                  className={styles.arrow}
                  d="M233.417 374.6C239.617 380.9 247.817 384 256.017 384C264.217 384 272.397 380.875 278.637 374.625L406.637 246.625C419.127 234.125 419.127 213.875 406.637 201.375C394.137 188.875 373.877 188.875 361.387 201.375L288.017 274.8V32C288.017 14.33 273.687 0 256.017 0C238.317 0 224.017 14.33 224.017 32V274.8L150.618 201.4C138.128 188.9 117.868 188.9 105.368 201.4C92.8775 213.9 92.8775 234.15 105.368 246.65L233.417 374.6Z"
                  fill="black"
                />
                <path
                  id="server"
                  className={styles.server}
                  d="M478 352H344.5L299.25 397.25C287.2 409.3 271.1 416 254 416C236.9 416 220.84 409.344 208.75 397.25L163.5 352H30C12.33 352 -2 366.33 -2 384V480C-2 497.67 12.33 512 30 512H478C495.67 512 510 497.67 510 480V384C510 366.3 495.7 352 478 352ZM430 456C416.8 456 406 445.2 406 432C406 418.8 416.8 408 430 408C443.2 408 454 418.8 454 432C454 445.2 443.2 456 430 456Z"
                  fill="black"
                />
              </g>
              <defs></defs>
            </svg>
            DOWNLOAD CV
          </a>
          <span className={styles.after}></span>
        </div>
        <div className={styles.cv}>
          <div className={styles.headers}>
            <span
              onClick={() => setToggle("experience")}
              className={toggle === "experience" ? styles.active : ""}
            >
              EXPERIENCE
            </span>
            <span
              onClick={() => setToggle("education")}
              className={toggle === "education" ? styles.active : ""}
            >
              EDUCATION
            </span>
            <span
              onClick={() => setToggle("skills")}
              className={toggle === "skills" ? styles.active : ""}
            >
              SKILLS
            </span>
          </div>
          <div>
              <motion.div
                className={`${styles.experiences} ${
                  toggle === "experience" ? styles.active : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }}
              >
                <div className={styles.card}>
                  <h5>
                    FRENIFY LLC <span>( 2018 — Today )</span>
                  </h5>
                  <h3>Sr. Front-end Engineer</h3>
                  <p>
                    Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className={styles.card}>
                  <h5>
                    GOOGLE LLC <span>( 2016 — 2018 )</span>
                  </h5>
                  <h3>Front-end Developer</h3>
                  <p>
                    Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className={styles.card}>
                  <h5>
                    TWITTER LLC <span>( 2016 — 2011 )</span>
                  </h5>
                  <h3>Graphic Designer</h3>
                  <p>
                    Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.education} ${
                  toggle === "education" ? styles.active : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }}
              >
                <div className={styles.card}>
                  <h5>
                    FRENIFY UNIVERSITY<span>( 2014 — 2017 )</span>
                  </h5>
                  <h3>Computer Science</h3>
                  <p>
                    Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className={styles.card}>
                  <h5>
                    EDU UNIVERSITY <span>( 2011 — 2014 )</span>
                  </h5>
                  <h3>Master Degree</h3>
                  <p>
                    Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className={styles.card}>
                  <h5>
                    CLOLUMBIA COLLEGE <span>( 2007 — 2011 )</span>
                  </h5>
                  <h3>Bachelor Degree</h3>
                  <p>
                    Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className={`${styles.skills} ${
                  toggle === "skills" ? styles.active : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }}
              >
                <div className={styles.progressCompo}>
                  <div className={styles.progress} style={{ width: "92%" }}>
                    <span width="92%">Adobe Photoshop</span>
                  </div>
                </div>
                <div className={styles.progressCompo}>
                  <div className={styles.progress} style={{ width: "95%" }}>
                    <span width="95%">HTML5 & CSS3</span>
                  </div>
                </div>
                <div className={styles.progressCompo}>
                  <div className={styles.progress} style={{ width: "80%" }}>
                    <span width="80%">Matlab</span>
                  </div>
                </div>
                <div className={styles.progressCompo}>
                  <div className={styles.progress} style={{ width: "85%" }}>
                    <span width="85%">Adobe Illustrator</span>
                  </div>
                </div>
                <div className={styles.text}>
                  A freelance creative designer with a love for minimal design,
                  clean typography and well-written code, located in San
                  Francisco. Provide high quality and cost effective offshore
                  web and software development services. Wide range of web and
                  software development services across the world.
                </div>
              </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
