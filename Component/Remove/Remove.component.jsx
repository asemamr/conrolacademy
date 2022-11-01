import { motion, AnimatePresence } from "framer-motion";
import styles from "./Remove.module.css";

export default function Remove({ onClickButton, itemId, remove, title, api }) {
  const clickHandler = async (e) => {
    if (e.target.innerHTML === "Yes") {
      onClickButton(true);
      const res = await fetch(`/api/${api}`, {
        method: "DELETE",
        body: itemId,
      });
    } else {
      onClickButton(false);
    }
  };

  return (
    <AnimatePresence>
      {remove && <motion.div className={styles.remove} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
          <motion.div
            initial={{ opacity: 0, scale: 0.2, translate: "-50% -50%" }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 , transition: {duration: .2}}}
          >
          <h2>Are You Sure Do You Want to Delete &quot; { title } &quot;</h2>
            <div className={styles.buttons}>
              <button
                content="Yes"
                onClick={clickHandler}
                className={styles.yesBtn}
              >
                Yes
              </button>
              <button
                content="No"
                onClick={clickHandler}
                className={styles.noBtn}
              >
                No
              </button>
            </div>
          </motion.div>
      </motion.div>}
    </AnimatePresence>
  );
}
