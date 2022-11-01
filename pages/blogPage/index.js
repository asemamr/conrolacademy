import Blogs from "Blogs/Blogs.component";
import { getPostsFromDB } from "../api/blogApi";

export default function BlogPage({ posts }) {
  return (
    <div className="container">
      <Blogs posts={posts}></Blogs>
    </div>
  );
}
export async function getStaticProps() {
  const posts = await getPostsFromDB();

  return {
    props: { posts },
    revalidate: 1
  };
}
