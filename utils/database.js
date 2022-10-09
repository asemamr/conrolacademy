import { MongoClient } from "mongodb";



async function connect() {
  const client = new MongoClient(process.env.DB_URL);
  const db = client.db("fadi");
  return { db, client };
}

export default connect;