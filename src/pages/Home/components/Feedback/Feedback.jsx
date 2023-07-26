import facebook from "../../../../assets/icon-facebook.png";
import instagram from "../../../../assets/icon-instagram.png";
import twitter from "../../../../assets/icon-twitter.png";
import telegram from "../../../../assets/icon-telegram.png";

import s from "./Feedback.module.scss";

const Feedback = () => {
  return (
    <section>
      <div className="container">
        <h2 className={s.title}>What do others say about us?</h2>
        <div className={s.wrapper}>
          <div className={`${s.item} box`}>
            <img className={s.icon} src={twitter} alt="twitter" />
            <p className={s.text}>
              “I recently came across this cryptocurrency website which has been
              incredibly helpful in guiding me. The site is convenient and easy
              to navigate.”
            </p>
            <p className={s.name}>Dante Mentez</p>
          </div>
          <div className={`${s.item} ${s.itemBottom} box`}>
            <img className={s.icon} src={facebook} alt="facebook" />
            <p className={s.text}>
              “I have been using this cryptocurrency site for several months now
              and I have been consistently impressed with the quality of the
              service!”
            </p>
            <p className={s.name}>Kimberly Brewer </p>
          </div>
          <div className={`${s.item} box`}>
            <img className={s.icon} src={instagram} alt="instagram" />
            <p className={s.text}>
              “Your courses helped me a lot! The manager was quick to help me
              with some questions and now I finally understand the blockchain
              and can work with data.”
            </p>
            <p className={s.name}>Husna Michael</p>
          </div>
          <div className={`${s.item} ${s.itemBottom} box`}>
            <img className={s.icon} src={telegram} alt="telegram" />
            <p className={s.text}>
              “The news section was frequently updated with insightful analysis
              and breaking news, while the provided were incredibly useful for
              traders and investors.”
            </p>
            <p className={s.name}>Zac Perkins</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
