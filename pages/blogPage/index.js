import path from "path";
import Blogs from "Blogs/Blogs.component";
import { getPostsFromDB } from "../api/blogApi";
// import { getSlugs } from "../api/blogApi";
// import { getAllPosts } from "../api/blogApi";

export default function BlogPage({ posts }) {
  return (
    <div className="container">
      <Blogs posts={posts}></Blogs>
    </div>
  );
}
export async function getStaticProps() {
  // const slugs = getSlugs();
  // const posts = getAllPosts();
  const posts = await getPostsFromDB();

  // const paths = slugs.map((slug) => ({ params: { id: slug } }))
  return {
    props: {posts},
  };
}
