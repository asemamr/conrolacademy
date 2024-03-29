import Blog from "../Blog/Blog.component";
import styles from "./Blogs.module.css";

export default function Blogs({ posts }) {
  return (
    <div className={styles.page}>
      <div className={styles.div}>
        {posts.map((post) => (
          <Blog
            key={post.meta.id}
            id={post.meta.id}
            title={post.meta.title}
            layout={post.meta.layout}
            fileName={post.meta.fileName}
            writer={post.meta.writer}
            date={post.meta.date}
          />
        ))}
      </div>
    </div>
  );
}
