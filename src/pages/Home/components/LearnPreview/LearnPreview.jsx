import { Link } from "react-router-dom";
import learn from "../../../../assets/learn.png";
import arrow from "../../../../assets/learn-arrow.svg";
import scss from "./LearnPreview.module.scss";

const LearnPreview = () => {
  return (
    <div className={`${scss.learnContainer} box ${scss.learn}`}>
      <div>
        <h2 className={scss.title}>Learn</h2>
        <p className={scss.text}>
          We have redesigned the teaching method so that knowledge about
          cryptocurrency becomes clear to everyone.
        </p>
        <Link to="/learn" className={scss.link}>
          Find out more
          <img src={arrow} className={scss.arrow} alt="arrow" width="75" />
        </Link>
      </div>
      <img className={scss.image} src={learn} alt="Books" />
    </div>
  );
};

export default LearnPreview;
