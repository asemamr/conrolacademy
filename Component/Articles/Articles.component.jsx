import styles from "./Articles.module.css";
import Article from "../Article/Article.component";
import { AnimatePresence } from "framer-motion";

export default function Articles({ posts }) {
  return (
    <div className={styles.articles}>
      <AnimatePresence>
        {posts.map((post) => {
          return (
            <Article
              writer={post.writer}
              date={post.date}
              description={post.description}
              image={post.image}
              link={post.link}
              title={post.title}
              id={post.id}
              key={post.id}
            ></Article>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
