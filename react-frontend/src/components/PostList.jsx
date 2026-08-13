import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, deletePost } from "../api/posts.js";


export default  function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Quora Posts</h1>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3 className="user">@ {post.username}</h3>
          <h4 className="content">{post.content}</h4>

          <Link to={`/posts/${post.id}`}>See in Detail</Link>
          <br /> <br />
          <Link to={`/posts/${post.id}/edit`}>Edit</Link>
          <br /><br />
          <button onClick={() => handleDelete(post.id)}>Delete Post</button>
        </div>
      ))}

      <br />
      <br />
      <Link to="/posts/new">Create new posts</Link>
    </div>
  );
}


