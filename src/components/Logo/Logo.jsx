import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import s from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={s.logoWrap}>
      <img src={logo} alt="logo" width="47" height="54" />
      <span className={s.logo}>Coin</span>
      <span className={`${s.logo} ${s.logoAccent}`}>Lift</span>
    </Link>
  );
};

export default Logo;
