import heroContentImg from "assets/png/heroContentImg.png";

import s from "./HeroHeaderContent.module.scss";

const HeroHeaderContent = () => {
	return (
		<div className={s.infoWrap}>
			<div>
				<h1 className={s.title}>
					New, improved, mind-blowing <span className={s.titleAccent}>crypto website</span>
				</h1>
				<p className={s.text}>
					Your gateway to the decentralized future. <span className={s.textAccent}>And the future is now.</span>
				</p>
			</div>
			<img src={heroContentImg} alt="" width="317" />
		</div>
	);
};

export default HeroHeaderContent;
