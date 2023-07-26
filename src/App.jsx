import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Learn from "./pages/Learn/Learn";
import Reading from "./pages/Reading/Reading";
import CommunityLayout from "./pages/Community/CommunityLayout";
import About from "./pages/About/About";
import Feed from "./pages/Community/Feed";
import MyPage from "./pages/Community/MyPage";
import Notifications from "./pages/Community/Notifications";
import Liked from "./pages/Community/Liked";
import Rules from "./pages/Community/Rules";
import Article from "./pages/Article/Article";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/community" element={<CommunityLayout />}>
            <Route index element={<Feed />} />
            <Route path="/community/:postId" element={<Article />} />
            <Route path="profile" element={<MyPage />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="liked" element={<Liked />} />
            <Route path="rules" element={<Rules />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
