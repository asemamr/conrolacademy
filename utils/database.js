import { MongoClient } from "mongodb";



async function connect() {
  const client = new MongoClient("mongodb+srv://asem:0127245956@cluster0.28r7lfl.mongodb.net/?retryWrites=true&w=majority");
  const db = client.db("fadi");
  return { db, client };
}

export default connect;