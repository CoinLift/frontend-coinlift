import { Link } from "react-router-dom";

import learn from "assets/learn.png";
import longArrow from "assets/long-learn-arrow.svg";

import s from "./LearnPreview.module.scss";

const LearnPreview = () => {
	return (
		<div className={`${s.learnContainer} box ${s.learn}`}>
			<div>
				<h2 className={s.title}>Learn</h2>
				<p className={s.text}>
					We have redesigned the teaching method so that knowledge about cryptocurrency becomes clear to everyone.
				</p>
				<Link to="/learn" className={s.link}>
					Find out more
					<img src={longArrow} className={s.arrow} alt="arrow" width="75" />
				</Link>
			</div>
			<img className={s.image} src={learn} alt="Books" />
		</div>
	);
};

export default LearnPreview;
