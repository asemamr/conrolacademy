import connect from "../../../utils/database";


export default async function handler(req, res) {

  if (req.method === "POST") {
    const { db, client } = await connect();

    const result = await db.collection("articles").insertOne(req.body);
    res.status(200).json(result)
    client.close();
  }
  else if (req.method === "GET") {
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
    res.status(200).json(posts)
  }
}