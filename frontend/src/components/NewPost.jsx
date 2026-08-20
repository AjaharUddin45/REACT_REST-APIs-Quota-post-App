import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts.js";

export default function NewPost() {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createPost({username, content});
    navigate("/posts");
  };

  return (
    <div className="container">
      <h1 style={{ color: "burlywood" }}>Add your new post :</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 form">
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          /> <br /><br />
        </div>

        <div className="mb-3 form">
          <textarea
            className="form-control"
            placeholder="write content"
            rows="4"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <br /><br />
        </div>

        <button className="btn btn-primary formBtn">Submit</button>
      </form>
    </div>
  );
}

