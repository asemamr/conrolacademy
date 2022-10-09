import Articles from "Articles/Articles.component";
import connect from "../../utils/database";



export default function ArticlesPage({posts}) {

  // const data = [
  //   {
  //     writer: "Fadi Alyousef",
  //     header: "A solution-processed n-type conducting polymer with ultrahigh conductivity",
  //     date: "07 Sep 2022",
  //     abstract: "Simulations of historical and future periods of climate change showed that delayed mitigation to limit global warming might reduce the capacity of bioenergy with carbon capture and storage and threaten climate stability and food security.",
  //     image: "https://media.springernature.com/w290h158/springer-static/image/art%3A10.1038%2Fs41586-022-05088-z/MediaObjects/41586_2022_5088_Fig1_HTML.png?as=webp",
  //     link: "https://drive.google.com/file/d/1UmKcwNQl_CeA6sq-WzPuCdxXh92D9Xcb/view?usp=sharing",
  //     key: "1"
  //   },
  //   {
  //     writer: "Fadi Alyousef",
  //     header: "Delayed use of bioenergy crops might threaten climate and food security",
  //     date: "07 Sep 2022",
  //     abstract: "Simulations of historical and future periods of climate change showed that delayed mitigation to limit global warming might reduce the capacity of bioenergy with carbon capture and storage and threaten climate stability and food security.",
  //     image: "https://media.springernature.com/w290h158/springer-static/image/art%3A10.1038%2Fs41586-022-05055-8/MediaObjects/41586_2022_5055_Fig1_HTML.png?as=webp",
  //     link: "https://drive.google.com/file/d/1UmKcwNQl_CeA6sq-WzPuCdxXh92D9Xcb/view?usp=sharing",
  //     key: "2"
  //   },
  //   {
  //     writer: "Fadi Alyousef",
  //     header: "Chiral monoterpenes reveal forest emission mechanisms and drought responses",
  //     date: "07 Sep 2022",
  //     abstract: "Simulations of historical and future periods of climate change showed that delayed mitigation to limit global warming might reduce the capacity of bioenergy with carbon capture and storage and threaten climate stability and food security.",
  //     image: "https://media.springernature.com/w290h158/springer-static/image/art%3A10.1038%2Fs41586-022-05020-5/MediaObjects/41586_2022_5020_Fig1_HTML.png?as=webp",
  //     link: "https://drive.google.com/file/d/1Gdzpd7fvlk9-psFsps5wFDSU2dWl72xe/view?usp=sharing",
  //     key: "3"
  //   },
  //   {
  //     writer: "Fadi Alyousef",
  //     header: "A RORγt+ cell instructs gut microbiota-specific Treg cell differentiation",
  //     date: "07 Sep 2022",
  //     abstract: "Simulations of historical and future periods of climate change showed that delayed mitigation to limit global warming might reduce the capacity of bioenergy with carbon capture and storage and threaten climate stability and food security.",
  //     image: "https://media.springernature.com/w290h158/springer-static/image/art%3A10.1038%2Fs41586-022-05089-y/MediaObjects/41586_2022_5089_Fig1_HTML.png?as=webp",
  //     link: "https://drive.google.com/file/d/1yV2Bx5AV-zF2pTL4Cud1yRA9MCzLMxuP/view?usp=sharing",
  //     key: "4"
  //   },
  //   {
  //     writer: "Fadi Alyousef",
  //     header: "Biosynthesis of selenium-containing small molecules in diverse microorganisms",
  //     date: "07 Sep 2022",
  //     abstract: "Simulations of historical and future periods of climate change showed that delayed mitigation to limit global warming might reduce the capacity of bioenergy with carbon capture and storage and threaten climate stability and food security.",
  //     image: "https://media.springernature.com/w290h158/springer-static/image/art%3A10.1038%2Fs41586-022-05174-2/MediaObjects/41586_2022_5174_Fig1_HTML.png?as=webp",
  //     link: "https://drive.google.com/file/d/1yV2Bx5AV-zF2pTL4Cud1yRA9MCzLMxuP/view?usp=sharing",
  //     key: "5"
  //   }
  // ]

  return (
    <div className="container">
      <Articles posts={posts} ></Articles>
    </div>
  )
}
export async function getStaticProps() {
  
  const { db, client } = await connect();

  let posts = await db.collection("articles").find().toArray();
  client.close();
  posts = posts.map(post => ({
    date: post.date,
    title: post.title,
    writer: post.writer,
    link: post.link,
    description: post.description,
    image: post.image,
    id: post._id.toString()
  }))

  return {
    props: {
      posts
    },
    revalidate: 1
  }
}