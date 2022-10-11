import { useRouter } from "next/router"
import { getSlugs, getPostFromSlug } from "../api/blogApi";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug   from "rehype-slug";
import  rehypeAutolinkHeadings  from "rehype-autolink-headings";
import { Youtube } from "Youtube/Youtube.component";
import Image from "next/image";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css"
import styles from "../../public/slug.module.css"
import { Code, Body, OrderList, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Paragraph, Anchor, Photo, List } from "StylingBlog/StylingBlog.component";
import { useScroll, useSpring, motion} from "framer-motion";

const components = {
  Youtube: Youtube,
  Image: Photo,
  p: Paragraph,
  ul: List,
  ol: OrderList,
  body: Body,
  pre: Code,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  a: Anchor
}



export default function Slug({ post: { source, meta: { title } } }) {
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress,{ stiffness: 300, damping: 30 });
  return <div className={`container ${styles.blog}`}>
    <title>{title}</title>
    <motion.div style={{scaleX}} className={styles.progress}>
    </motion.div>
    <h2 className={styles.blogHeading}>{title}</h2>
    <MDXRemote {...source} components={components} />
  </div>
}
export  function getStaticPaths() {
  const slugs = getSlugs();
  const paths = slugs.map((slug) => ({ params: { slug: slug } }))
  

  return {
    fallback: "blocking",
    paths: paths
  }

}

export async function getStaticProps({params}) {
  const slug = params.slug;
  const post = getPostFromSlug(slug);
  const { content, meta } = post;
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings, {behavior: "wrap"}
        ],
        rehypeHighlight
      ],
    },
  })

  return {
    props: {post: {meta, source: mdxSource}}
  }
}