import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import HeroHeaderContent from "../../pages/Home/components/HeroHeaderContent/HeroHeaderContent";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.headerWrap}>
          <Link to="/" className={scss.logoWrap}>
            <img src={logo} alt="logo" width="47" height="54" />
            <span className={scss.logo}>Coin</span>
            <span className={`${scss.logo} ${scss.logoAccent}`}>Lift</span>
          </Link>
          <nav>
            <ul className={scss.navList}>
              <NavLink to="/news" className={scss.navItem}>
                News
              </NavLink>
              <NavLink to="/reading" className={scss.navItem}>
                Reading
              </NavLink>
              <NavLink to="/learn" className={scss.navItem}>
                Learn
              </NavLink>
              <NavLink to="/community" className={scss.navItem}>
                Community
              </NavLink>
              <NavLink to="/about" className={scss.navItem}>
                About us
              </NavLink>
            </ul>
          </nav>
          <div>
            <img src="" alt="" />
            <button className={scss.startedBtn} type="button">
              Get started
            </button>
          </div>
        </div>
        <HeroHeaderContent />
      </div>
    </header>
  );
};

export default Header;
