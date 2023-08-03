import { useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import ArticleDetails from "./ArticleDetails/ArticleDetails";

const Article = () => {
	const { postId } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:8080/api/v1/posts/${postId}`);
	}, [postId]);

	return (
		<>
			<ArticleDetails />
		</>
	);
};

export default Article;
