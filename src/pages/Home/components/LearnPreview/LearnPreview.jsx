import { Link } from "react-router-dom";

import learn from "assets/png/learn.png";

import { Icon } from "components/Icon/Icon";

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
					<Icon id="long-learn-arrow" width="77"  alt="long-learn-arrow" height="8" />
				</Link>
			</div>
			<img className={s.image} src={learn} alt="Books" />
		</div>
	);
};

export default LearnPreview;
