import styles from "./Article.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import Remove from "Remove/Remove.component";

export default function Article({
  writer,
  date,
  description,
  image,
  link,
  title,
  id,
}) {
  const { status } = useSession();
  const [deleteItem, setDeleteItem] = useState(false);
  const [remove, setRemove] = useState(false);

  const deleteInsure = (status) => {
    if (status) {
      setRemove(false);
      setDeleteItem(true);
    } else {
      setRemove(false);
    }
  };
  const animation = {
    animate: { scale: 1, opacity: 1, y: 0 },
    transition: { type: "spring" },
    initial: { opacity: 0, y: -50 },
    exit: {
      opacity: 0,
      scale: 0.2,
      originY: -0.01,
      transition: { ease: "easeInOut", duration: 0.4, delay: 0.3 },
    },
  };
  return (
    <AnimatePresence>
      <Remove itemId={id} onClickButton={deleteInsure} remove={remove} api="articleApi" title={ title } />
      {deleteItem || (
        <motion.div
          className={styles.article}
          key={id}
          animate="animate"
          transition="transition"
          initial="initial"
          exit="exit"
          variants={animation}
        >
          {status === "authenticated" && (
            <button
              className={styles.deleteBtn}
              onClick={() => setRemove(true)}
            >
              <i className="fa-regular fa-trash-can-plus"></i>
            </button>
          )}

          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={styles.info}>
              <div className={styles.dateAndWriter}>
                <p>{writer}</p>
                <p> {date}</p>
              </div>
              <a href={link} rel="noopener noreferrer" target="_blank">
                <button>Continue Reading</button>
              </a>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src={image}
              alt="the article's image"
              width={320}
              height={200}
            ></Image>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
