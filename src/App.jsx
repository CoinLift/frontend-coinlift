import { Route, Routes } from "react-router-dom";

import About from "_pages/About/About";
import Article from "_pages/Article/Article";
import CommunityLayout from "_pages/Community/CommunityLayout";
import Feed from "_pages/Community/Feed";
import Liked from "_pages/Community/Liked";
import MyPage from "_pages/Community/MyPage";
import Notifications from "_pages/Community/Notifications";
import Rules from "_pages/Community/Rules";
import Home from "_pages/Home/Home";
import Learn from "_pages/Learn/Learn";
import News from "_pages/News/News";
import Reading from "_pages/Reading/Reading";

import Layout from "_components/Layout/Layout";

import "./App.css";

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
			</Routes>
		</>
	);
}

export default App;
