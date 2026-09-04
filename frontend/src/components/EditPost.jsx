import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../api/posts.js";
import axios from "axios";


 export default function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getPost(id).then((data) => {
      setPost(data);
      setContent(data.content);
    });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const res = await axios.patch(`/posts/${id}`,{
        content:content,
      });
     // console.log(res.data);
       navigate("/posts");
    }catch(err){
        console.log(err);
    }
   
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2 style={{ color: "brown" }}>Edit your post:</h2>
      <p>
        <b>Post id : {post._id} </b>
      </p>
      <p>
        <b>Post username : @{post.username} </b>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 form">
          <textarea
            className="form-control"
            rows="4"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          /> <br /><br />
        </div>
        <button className="btn btn-primary formBtn">Submit</button>
      </form>
    </div>
  );
}
