import { Link } from "react-router-dom";

import facebook from "assets/facebook-footer.png";
import instagram from "assets/instagram-footer.png";
import logo from "assets/logo.png";
import telegram from "assets/telegram-footer.png";
import twitter from "assets/twitter-footer.png";

import s from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={`container ${s.footerWrap}`}>
				<div className={s.logoPrivacyWrap}>
					<Link to="/" className={s.logoWrap}>
						<img src={logo} alt="logo" width="47" height="54" />
						<span className={s.logo}>Coin</span>
						<span className={`${s.logo} ${s.logoAccent}`}>Lift</span>
					</Link>
					<p>© 2023 CoinLift. All rights reserved</p>
				</div>
				<div className={s.linksWrap}>
					<ul>
						<li className={s.socialLink}>
							<a href="#">
								<img src={twitter} alt="twitter" />
							</a>
						</li>
						<li className={s.socialLink}>
							<a href="#">
								<img src={facebook} alt="facebook" />
							</a>
						</li>
						<li className={s.socialLink}>
							<a href="#">
								<img src={instagram} alt="instagram" />
							</a>
						</li>
						<li className={s.socialLink}>
							<a href="#">
								<img src={telegram} alt="telegram" />
							</a>
						</li>
					</ul>
					<div className={s.navWrap}>
						<ul className={s.navList}>
							<li className={s.titleLink}>Products</li>
							<li className={s.link}>News</li>
							<li className={s.link}>Community</li>
							<li className={s.link}>Community</li>
							<li className={s.link}>Courses</li>
						</ul>
						<ul className={s.navList}>
							<li className={s.titleLink}>Company</li>
							<li className={s.link}>About Us</li>
							<li className={s.link}>Terms of Use</li>
							<li className={s.link}>Community Rules</li>
							<li className={s.link}>Privacy Policy</li>
						</ul>
						<ul className={s.navList}>
							<li className={s.titleLink}>Support</li>
							<li className={s.link}>Feedback</li>
							<li className={s.link}>FAQ</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
