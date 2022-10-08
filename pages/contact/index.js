import ContactCompo from "ContactCompo/ContactCompo.component";
import { useState } from "react";
import { lightFormat } from "date-fns";


export default function Contact() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  async function getComments() {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }
  async function submitHandler() {
    const response = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({ id: Date.now(), text: input }),
      headers: {"Content-Type": "application/json"}
    })
  }

  async function deletedComment(commentId) {
    const response = await fetch(`/api/test/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    getComments();
    console.log(data);
  }
  
  async function editComment(commentId) {
    const response = await fetch(`/api/test/${commentId}`, {
      method: "PUT",
      body: JSON.stringify({ text: input }),
      headers: {"Content-Type": "application/json"}
    })
    const data = await response.json();
    console.log(data);
    getComments();
  }
  return (
    <div className="container">
      <ContactCompo></ContactCompo>
      <ul>{comments.map((comment) => (<li key={comment.id}>{comment.text}<button onClick={() => deletedComment(comment.id)}>delete</button><button onClick={()=> editComment(comment.id)}>edit</button></li>))}</ul>
      <input type="text" onChange={(e)=> {setInput(e.target.value)}}/>
      <button onClick={submitHandler}>submit</button>
      <button onClick={getComments}>load Comments</button>
    </div>
  );
}
