import styles from "./Blog.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Remove from "Remove/Remove.component";
import { AnimatePresence, motion } from "framer-motion";

export default function Blog({ title, layout, fileName, writer, date, id }) {
  const { status } = useSession();
  const [remove, setRemove] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

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
      <Remove
          itemId={id}
          onClickButton={deleteInsure}
          remove={remove}
          api="blogApi"
          title={title}
        />
      {deleteItem || <motion.div className={styles.blog}
          key={id}
          animate="animate"
          transition="transition"
          initial="initial"
          exit="exit"
          variants={animation}>
        
        {status === "authenticated" && (
          <button
            className={styles.deleteBtn}
            onClick={() => {
              setRemove(true);
            }}
          >
            <i className="fa-regular fa-trash-can-plus"></i>
          </button>
        )}
        <Link href={`/blogPage/${id}`}>
          <a>
            <h2>{title}</h2>
            <p>{layout}</p>
            <div className={styles.info}>
              <p>{writer}</p>
              <p>{date}</p>
            </div>
          </a>
        </Link>
      </motion.div>}
    </AnimatePresence>
  );
}
