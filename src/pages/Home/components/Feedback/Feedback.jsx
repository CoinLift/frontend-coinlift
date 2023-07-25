import facebook from "../../../../assets/icon-facebook.png";
import instagram from "../../../../assets/icon-instagram.png";
import twitter from "../../../../assets/icon-twitter.png";
import telegram from "../../../../assets/icon-telegram.png";

import scss from "./Feedback.module.scss";

const Feedback = () => {
  return (
    <section>
      <div className="container">
        <h2 className={scss.title}>What do others say about us?</h2>
        <div className={scss.wrapper}>
          <div className={`${scss.item} box`}>
            <img className={scss.icon} src={twitter} alt="twitter" />
            <p className={scss.text}>
              “I recently came across this cryptocurrency website which has been
              incredibly helpful in guiding me. The site is convenient and easy
              to navigate.”
            </p>
            <p className={scss.name}>Dante Mentez</p>
          </div>
          <div className={`${scss.item} ${scss.itemBottom} box`}>
            <img className={scss.icon} src={facebook} alt="facebook" />
            <p className={scss.text}>
              “I have been using this cryptocurrency site for several months now
              and I have been consistently impressed with the quality of the
              service!”
            </p>
            <p className={scss.name}>Kimberly Brewer </p>
          </div>
          <div className={`${scss.item} box`}>
            <img className={scss.icon} src={instagram} alt="instagram" />
            <p className={scss.text}>
              “Your courses helped me a lot! The manager was quick to help me
              with some questions and now I finally understand the blockchain
              and can work with data.”
            </p>
            <p className={scss.name}>Husna Michael</p>
          </div>
          <div className={`${scss.item} ${scss.itemBottom} box`}>
            <img className={scss.icon} src={telegram} alt="telegram" />
            <p className={scss.text}>
              “The news section was frequently updated with insightful analysis
              and breaking news, while the provided were incredibly useful for
              traders and investors.”
            </p>
            <p className={scss.name}>Zac Perkins</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
