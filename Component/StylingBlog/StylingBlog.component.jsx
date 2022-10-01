import Image from "next/image";
import styles from "./StylingBlog.module.css";
import Image1 from "/Component/Blogs/reduce.jpg"
export function Heading1({ children, id }) {
  return (
    <h2 className={`${styles.heading} ${styles.heading1}`} id={id}>
      <a href={`#${id}`}>{ id.replaceAll("-", " ")}</a>
    </h2>
  )
}
export function Heading2({ children, id }) {
  return (
    <h2 className={`${styles.heading} ${styles.heading2}`} id={id}>
      <a href={`#${id}`}>{ id.replaceAll("-", " ")}</a>
    </h2>
  )
}
export function Heading3({ children, id }) {
  return (
    <h2 className={`${styles.heading} ${styles.heading3}`} id={id}>
      <a href={`#${id}`}>{ id.replaceAll("-", " ")}</a>
    </h2>
  )
}
export function Heading4({ children, id }) {
  return (
    <h2 className={`${styles.heading} ${styles.heading4}`} id={id}>
      <a href={`#${id}`}>{ id.replaceAll("-", " ")}</a>
    </h2>
  )
}
export function Heading5({ children, id }) {
  return (
    <h2 className={`${styles.heading} ${styles.heading5}`} id={id}>
      <a href={`#${id}`}>{ id.replaceAll("-", " ")}</a>
    </h2>
  )
}
export function Heading6({ children, id }) {
  return (
    <h2 className={`${styles.heading} ${styles.heading6}`} id={id}>
      <a href={`#${id}`}>{ id.replaceAll("-", " ")}</a>
    </h2>
  )
}


export function Paragraph({children}) {
  return (
    <div className={styles.para}>{ children }</div>
  )
}

export function Anchor({ children, href }) {
  return (
    <a className={styles.link} href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  )
}

export function Photo({ src , width, height}) {
  return (
    <picture>
    <Image src={Image1} alt="the main image for the blog" width={width} height={height} />
    </picture>
    
  )
}

export function List({ children }) {
  return <ul className={styles.list}>{children }</ul>
}
export function OrderList({ children }) {
  return <ol className={styles.OrderList}>{children }</ol>
}
export function Body({ children }) {
  return <body className={styles.body}>
    {children}
  </body>
}
export function Code({ children }) {
  return <pre className={styles.code}>{ children }</pre>
}