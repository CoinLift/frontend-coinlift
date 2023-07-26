import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import arrow from "../../../../assets/title-arrow.svg";
import comments from "../../../../assets/comments.png";
import s from "./CommunityTradeIdeas.module.scss";

const CommunityTradeIdeas = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend-coin-lift-production.up.railway.app/api/v1/posts/latest"
      )
      .then((res) => setPosts(res.data));
  }, []);
  
  return (
    <section>
      <div className="container">
        <div className={`${s.ideas} box `}>
          <Link to="/community">
            <h2 className={s.title}>
              Community trade ideas <img src={arrow} alt="arrow" width="50" />
            </h2>
          </Link>
          <div className={s.wrapper}>
            {posts.map((item) => (
              <div key={item.uuid} className={s.item}>
                <img
                  className={`${s.borderRadius} ${s.image}`}
                  src={`data:image/gpeg;base64, ${item.image}`}
                  alt="Post photo"
                />
                <div className={s.textCommentWrap}>
                  <p className={s.desc}>{item.title}</p>
                  <div className={s.commentWrap}>
                    <img
                      src={comments}
                      className={s.comments}
                      alt="Comments icon"
                    />
                    <span>{item.commentCount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CommunityTradeIdeas;
