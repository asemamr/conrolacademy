import path from "path";
import Blogs from "../../Component/Blogs/Blogs.component";
import { getSlugs } from "../api/api";
import { getAllPosts } from "../api/api";
export default function BlogPage({ posts }) {
  return (
    <div className="container">
      <Blogs posts={posts}></Blogs>
    </div>
  );
}

export async function getStaticProps() {
  const slugs = getSlugs();
  const posts = getAllPosts();
  const paths = slugs.map((slug) => ({ params: { id: slug } }))
  return {
    props: {posts},
  };
}
