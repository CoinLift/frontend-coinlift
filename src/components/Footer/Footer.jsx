import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook-footer.png";
import instagram from "../../assets/instagram-footer.png";
import twitter from "../../assets/twitter-footer.png";
import telegram from "../../assets/telegram-footer.png";
import { Link } from "react-router-dom";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className={`container ${scss.footerWrap}`}>
        <div className={scss.logoPrivacyWrap}>
          <Link to="/" className={scss.logoWrap}>
            <img src={logo} alt="logo" width="47" height="54" />
            <span className={scss.logo}>Coin</span>
            <span className={`${scss.logo} ${scss.logoAccent}`}>Lift</span>
          </Link>
          <p>© 2023 CoinLift. All rights reserved</p>
        </div>
        <div className={scss.linksWrap}>
          <ul>
            <li className={scss.socialLink}>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className={scss.socialLink}>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className={scss.socialLink}>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className={scss.socialLink}>
              <a href="#">
                <img src={telegram} alt="telegram" />
              </a>
            </li>
          </ul>
          <div className={scss.navWrap}>
            <ul className={scss.navList}>
              <li className={scss.titleLink}>Products</li>
              <li className={scss.link}>News</li>
              <li className={scss.link}>Community</li>
              <li className={scss.link}>Community</li>
              <li className={scss.link}>Courses</li>
            </ul>
            <ul className={scss.navList}>
              <li className={scss.titleLink}>Company</li>
              <li className={scss.link}>About Us</li>
              <li className={scss.link}>Terms of Use</li>
              <li className={scss.link}>Community Rules</li>
              <li className={scss.link}>Privacy Policy</li>
            </ul>
            <ul className={scss.navList}>
              <li className={scss.titleLink}>Support</li>
              <li className={scss.link}>Feedback</li>
              <li className={scss.link}>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
