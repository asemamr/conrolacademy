import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_URL);


export default async function connect() {
  const db = await client.db("fadi");
  return { db, client };
}