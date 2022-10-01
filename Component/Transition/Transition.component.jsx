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
      <motion.div key={asPath} variants={variants} initial="in" animate="inactive" exit="out">
        {children}
      </motion.div>
    </AnimatePresence>
  </div>
}
const variants = {
  out: {
    y: "-100%",
    transition: {
      duration: 0.75,
      ease: "easeInOut"
    }
  },
  in: {
    y: "100%",
    transition: {
      duration: 0.75,
      ease: "easeInOut"
    }
  },
  inactive: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeInOut"
    }
  }
}
export default Transition;