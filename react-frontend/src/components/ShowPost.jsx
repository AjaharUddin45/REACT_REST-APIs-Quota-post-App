import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/posts.js";


 export default function ShowPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>Here is your post in detail</h1>
      <p>
        <b>Post id : {post.id}</b>
      </p>
      <div className="post">
        <h3 className="user">@{post.username}</h3>
        <h4 className="content">{post.content}</h4>
      </div>
    </div>
  );
}


