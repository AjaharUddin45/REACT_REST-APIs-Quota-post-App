const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(cors());
app.use(express.json());
const port = 8080;


let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content:"Loves teaching!!",


    },
    {
        id: uuidv4(),
        username: "Sudhansu",
        content:"Loves eating!!",


    },
    {
        id: uuidv4(),
        username: "Aj style",
        content:"Loves wrestling!!",


    },
];

app.get("/posts",(req,res)=>{
    res.json(posts);
});

app.get("/posts/:id",(req,res)=>{
    const {id} = req.params;
    let post = posts.find((p)=> id === p.id );
    if(!post){
        return res.status(404).json({error : "Post not found"});
    }
    res.json(post);
})

app.post("/posts",(req,res)=>{
    const {username,content} = req.body;
    const newPost = {id:uuidv4(),username,content};
    posts.push(newPost);
    res.status(201).json(newPost);

});

app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => id === p.id);
  if (!post) return res.status(404).json({ error: "Post not found" });
  post.content = req.body.content;
  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const existed = posts.some((p) => id === p.id);
  if (!existed) return res.status(404).json({ error: "Post not found" });
  posts = posts.filter((p) => id !== p.id);
  res.status(204).send();
});









app.listen(port,()=>{
    console.log("App is listening on port 8080");
});