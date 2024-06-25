import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostListing from "./pages/PostListing.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/posts" element={<PostListing />} />
        <Route exact path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;