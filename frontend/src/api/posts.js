import axios from "axios";



// export const getAllPosts = () => axios.get("/posts").then((res) => res.data);

// export const getPost = (id) =>
//   axios.get(`/posts/${id}`).then((res) => res.data);

// export const createPost = (post) =>
//   axios.post("/posts", post).then((res) => res.data);

// export const updatePost = (id, content) =>
//   axios.patch(`/posts/${id}`, { content }).then((res) => res.data);

export const deletePost = (id) => axios.delete(`/posts/${id}`);

//with async
export const getAllPosts =  async () => {
      try{
         const response = await axios.get("/posts");
         return response.data;
      }catch(err){
        console.log(err);
      }
}

export const getPost = async (id) => {
  try{

   const response =  await axios.get(`/posts/${id}`);
   return response.data;

  }catch(err){
    console.log(err);
  }
}

// export const createPost = async (post) => {
//   try{
//      const res = await axios.post("/post",post);
//      return  res.data;
//   }catch(err){
//     console.log(err);
//   }
// }
