import { lazy } from "react";

const About = lazy(() => import("./pages/About/About"));
const Article = lazy(() => import("./pages/Article/Article"));
const CommunityLayout = lazy(() => import("./pages/Community/CommunityLayout"));
const Feed = lazy(() => import("./pages/Community/Feed"));
const Liked = lazy(() => import("./pages/Community/Liked"));
const MyPage = lazy(() => import("./pages/Community/MyPage"));
const Notifications = lazy(() => import("./pages/Community/Notifications"));
const Rules = lazy(() => import("./pages/Community/Rules"));
const Home = lazy(() => import("./pages/Home/Home"));
const Learn = lazy(() => import("./pages/Learn/Learn"));
const News = lazy(() => import("./pages/News/News"));
const Reading = lazy(() => import("./pages/Reading/Reading"));

export { About, Article, CommunityLayout, Feed, Home, Learn, Liked, MyPage, News, Notifications, Reading, Rules };
