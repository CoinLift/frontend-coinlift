import { NavLink } from "react-router-dom";
import HeroHeaderContent from "../../pages/Home/components/HeroHeaderContent/HeroHeaderContent";
import Logo from "../Logo/Logo";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerWrap}>
          <Logo />
          <nav>
            <ul className={s.navList}>
              <NavLink to="/news" className={s.navItem}>
                News
              </NavLink>
              <NavLink to="/reading" className={s.navItem}>
                Reading
              </NavLink>
              <NavLink to="/learn" className={s.navItem}>
                Learn
              </NavLink>
              <NavLink to="/community" className={s.navItem}>
                Community
              </NavLink>
              <NavLink to="/about" className={s.navItem}>
                About us
              </NavLink>
            </ul>
          </nav>
          <div>
            <img src="" alt="" />
            <button className={s.startedBtn} type="button">
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
