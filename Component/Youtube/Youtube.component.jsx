import styles from "./Youtube.module.css"
export  function Youtube({ id }) {
  return <div>
    <iframe className={styles.youtube} title="Embedded Youtube video" src={`https://www.youtube.com/embed/${id}`} allow="autoplay; encrypted-media"></iframe>
  </div>
}