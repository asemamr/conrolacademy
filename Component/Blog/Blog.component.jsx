import styles from "./Blog.module.css";
import Link from "next/link";

export default function Blog({ title, layout, fileName , writer, date}) {
  return (
    <Link href={`/blogPage/${fileName}`}>
      <a className={styles.blog}>
        <h2>{title}</h2>
        <p>{layout}</p>
        <div className={styles.info}>
          <p>{writer}</p>
          <p>{date}</p>
        </div>
      </a>
    </Link>
  );
}
