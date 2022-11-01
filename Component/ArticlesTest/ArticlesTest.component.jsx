import styles from "./ArticlesTest.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Article from "Article/Article.component";


export default function ArticlesTest({ posts }) {
  const [articleId, setArticleId] = useState([]);
  const [show, setShow] = useState(false);
  const [remove, setRemove] = useState(false);
  const { status } = useSession();

  return (
    <div className={styles.articles}>
      {posts.map((article) => {
        return (
          <Article
            writer={article.writer}
            date={article.date}
            description={article.description}
            image={article.image}
            link={article.link}
            title={article.title}
            id={article.id}
            key={article.id}
          />
        );
      })}
      {/* {show && (
        <div className={styles.remove}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>Are You Sure Do You Want To Remove The Item</h2>
            <div className={styles.buttons}>
              <button>Yes</button>
              <button onClick={setShow(false)}>No</button>
            </div>
          </motion.div>
        </div>
      )} */}
    </div>
  );
}
