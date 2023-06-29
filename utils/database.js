import { MongoClient } from "mongodb";



async function connect() {
  const client = new MongoClient(process.env.MONGODB_URL);
  const db = client.db("fadi");
  return { db, client };
}

export default connect;