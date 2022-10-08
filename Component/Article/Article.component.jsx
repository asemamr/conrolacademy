import styles from "./Article.module.css";

export default function Article({
  writer,
  date,
  description,
  image,
  link,
  title
}) {
  return (
    <div className={styles.article}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
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
          <img src={image} alt="the article's image" width={290} height={ 158} />
        </picture>
      </div>
    </div>
  );
}
