const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Post = require("./models/post.js");

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
}));
app.use(express.json());

main().then(()=>{
    console.log("connection successful!!!");
}).catch((err)=>{
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/quoraApp');

}


app.get("/",(req,res)=>{
res.send("root is working");
});

app.get("/posts",async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch (err) {
    res.status(500).json({
      error: err.message
    });
}
    
});

app.get("/posts/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post("/posts",async (req,res)=>{
    try{
    const {username,content} = req.body;
    //saving new post to database
    const newPost = await Post.create({
        username,
        content,
    });
    res.json(newPost);
    }catch (err) {
    res.status(500).json({
      error: err.message
    });
}
    
});

app.patch("/posts/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const {content} = req.body;
        const post = await Post.findByIdAndUpdate(
            id,
            {content},
            {
                runValidators:true,
                new:true
            },
         );

        if (!post) return res.status(404).json({ error: "Post not found" });
       
        res.json(post);
    }catch (err) {
    res.status(500).json({
      error: err.message
    });
}
 
});

app.delete("/posts/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const deletedPost = await  Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(204).send();
  }catch (err) {
    res.status(500).json({
      error: err.message
    });
}
});


app.listen(8080,()=>{
    console.log("App is listening on port 8080");
});