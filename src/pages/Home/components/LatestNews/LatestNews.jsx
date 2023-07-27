import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getCryptocurrencyData } from "_api/getCryptocurrencyData";

import arrow from "_assets/title-arrow.svg";

import { cropText } from "_helpers/textOperations";

import s from "./LatestNews.module.scss";

const LatestNews = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		getCryptocurrencyData("news").then((res) => {
			if (res.data.length > 10) {
				const slicedNews = res.data.slice(0, 10);
				setNews(slicedNews);
			}
			setNews(res.data);
		});
	}, []);

	return (
		<section>
			<div className="container">
				<div className={`${s.news} box`}>
					<Link to="/news">
						<h2 className={s.title}>
							Latest news <img src={arrow} alt="arrow" width="50" />
						</h2>
					</Link>

					<div className={s.newsWrap}>
						{news.map((item, i) => (
							<a href={item.url} target="blank" key={i} className={s.item}>
								<img src={item.thumbnail} alt="News photo" />
								<h3 className={s.itemTitle}>{item.title}</h3>
								<p className={s.itemText}>{cropText(item.description, 70)}</p>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default LatestNews;
