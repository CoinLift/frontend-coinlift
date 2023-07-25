import heroContentImg from "../../../../assets/heroContentImg.png";
import scss from "./HeroHeaderContent.module.scss";

const HeroHeaderContent = () => {
  return (
    <div className={scss.infoWrap}>
      <div>
        <h1 className={scss.title}>
          New, improved, mindblowing{" "}
          <span className={scss.titleAccent}>crypto website</span>
        </h1>
        <p className={scss.text}>
          Your gateway to the decentralized future.{" "}
          <span className={scss.textAccent}>And the future is now.</span>
        </p>
      </div>
      <img src={heroContentImg} alt="" width="317" />
    </div>
  );
};

export default HeroHeaderContent;
