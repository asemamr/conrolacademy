import Articles from "Articles/Articles.component";
import { getArticlesFromDb } from "../api/articleApi";
import ArticlesTest from "../../Component/ArticlesTest/ArticlesTest.component";


export default function ArticlesPage({ posts }) {
  return (
    <div className="container">
      <ArticlesTest posts={posts} ></ArticlesTest>
    </div>
  )
}


export async function getStaticProps() {
  const posts = await getArticlesFromDb();

  return {
    props: {
      posts
    },
    revalidate: 1,
  }
}
