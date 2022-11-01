import { motion, AnimatePresence } from "framer-motion";
import styles from "./Transition.module.css";
import { useRouter } from "next/router";

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return <div className={styles.animate}>
    <AnimatePresence
      initial={false}
      exitBeforeEnter
    >
      <motion.div key={asPath} variants={variants} initial="in" animate="out" exit="out">
        {children}
      </motion.div>
    </AnimatePresence>
  </div>
}
const variants = {
  out: {
    y: "5%",
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "easeInOut"
    }
  },
  in: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeInOut"
    }
  },
}
export default Transition;