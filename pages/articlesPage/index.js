import Articles from "Articles/Articles.component";


export default function ArticlesPage({ posts }) {
  const router = useRouter();
  console.log(router.pathname)
  return (
    <div className="container">
      <Articles posts={posts} ></Articles>
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://conrolacademy.vercel.app/api/database");
  const posts = await response.json();

  // let posts = await db.collection("articles").find().toArray();
  // client.close();
  // posts = posts.map(post => ({
  //   date: post.date,
  //   title: post.title,
  //   writer: post.writer,
  //   link: post.link,
  //   description: post.description,
  //   image: post.image,
  //   id: post._id.toString()
  // }))

  return {
    props: {
      posts
    },
    revalidate: 1,

  }
}
