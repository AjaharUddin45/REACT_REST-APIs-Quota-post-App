import { Routes, Route, Navigate } from "react-router-dom";
import PostList from "./components/PostList.jsx";
import NewPost from "./components/NewPost.jsx";
import ShowPost from "./components/ShowPost.jsx";
import EditPost from "./components/EditPost.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/new" element={<NewPost />} />
      <Route path="/posts/:id" element={<ShowPost />} />
      <Route path="/posts/:id/edit" element={<EditPost />} />
    </Routes>
  );
}

export default App;
// dev