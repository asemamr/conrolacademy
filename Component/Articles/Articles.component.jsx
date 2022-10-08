import styles from "./Articles.module.css";
import Article from "../Article/Article.component";









export default function Articles({ posts }) {
  return (
    <div className={styles.articles}>
      {posts.map((post) => {
        return (
          <Article
            writer={post.writer} 
            key={post.id}
            title={post.title}
            date={post.date}
            description={post.description}
            image={post.image}
            link={post.link}
          ></Article>
        );
      })}
    </div>
  );
}
