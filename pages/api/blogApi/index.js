import connect from "../../../utils/database";
import matter from "gray-matter";
import { format } from "date-fns";
import { ObjectId } from "mongodb";



export default async function handler(req, res) {
  if (req.method === "POST") {
    const date = format(new Date(), "dd MMM yyyy");
    const { data, content } = matter(req.body.data);
    const sendData = {
      title: data.title,
      layout: data.layout,
      fileName: data.fileName,
      writer: data.writer,
      date: date,
      content
    }
    const { db, client } = await connect();
    let result = await db.collection("blogs").insertOne(sendData);
    client.close();
    res.status(200).json(result);
  }
  else if (req.method === "DELETE") {
    const { db, client } = await connect();
    const result = await db.collection("blogs").deleteOne({_id: ObjectId(req.body)});
    res.status(200).json(result);
    client.close();
  }
}

export async function getPostsFromDB() {
  const { db, client } = await connect();
  let posts = await db.collection("blogs").find().toArray();
  client.close();
  return posts.map(post => ({
    meta: {
      id: post._id.toString(),
      title: post.title,
      layout: post.layout,
      fileName: post.fileName,
      writer: post.writer,
      date: post.date,
    },
    content: post.content
  }))
}