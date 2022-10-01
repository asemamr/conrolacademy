import styles from "./Article.module.css";

export default function Article({
  writer,
  date,
  abstract,
  image,
  link,
  key,
  header
}) {
  return (
    <div className={styles.article}>
      <div className={styles.text}>
        <h2>{header}</h2>
        <p>{abstract}</p>
        <div className={styles.info}>
          <p>{writer}</p>
          <p> {date}</p>
          <a href={link} rel="noopener noreferrer" target="_blank" >
            <button>Continue Reading</button>
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <picture>
          <img src={image} alt="the article's image" />
        </picture>
      </div>
    </div>
  );
}
