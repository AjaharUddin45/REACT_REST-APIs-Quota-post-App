import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, deletePost } from "../api/posts.js";
import axios from "axios";


export default  function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((data)=>{
      setPosts(data);
      }).catch((err)=>{
        console.log(err);
      });
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div>
      <h1>Quora Posts</h1>

      {posts.map((post) => (
        <div className="post" key={post._id}>
          <h3 className="user">@ {post.username}</h3>
          <h4 className="content">{post.content}</h4>

          <Link to={`/posts/${post._id}`}>See in Detail</Link>
          <br /> <br />
          <Link to={`/posts/${post._id}/edit`}>Edit</Link>
          <br /><br />
          <button onClick={() => handleDelete(post._id)}>Delete Post</button>
        </div>
      ))}

      <br />
      <br />
      <Link to="/posts/new">Create new posts</Link>
    </div>
  );
}


