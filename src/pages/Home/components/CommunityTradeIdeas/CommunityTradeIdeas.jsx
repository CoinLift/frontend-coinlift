import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import arrow from "../../../../assets/title-arrow.svg";
import comments from "../../../../assets/comments.png";
import scss from "./CommunityTradeIdeas.module.scss";

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
        <div className={`${scss.ideas} box `}>
          <Link to="/community">
            <h2 className={scss.title}>
              Community trade ideas <img src={arrow} alt="arrow" width="50" />
            </h2>
          </Link>
          <div className={scss.wrapper}>
            {posts.map((item) => (
              <div key={item.uuid} className={scss.item}>
                <img
                  className={`${scss.borderRadius} ${scss.image}`}
                  src={`data:image/gpeg;base64, ${item.image}`}
                  alt="Post photo"
                />
                <div className={scss.textCommentWrap}>
                  <p className={scss.desc}>{item.title}</p>
                  <div className={scss.commentWrap}>
                    <img
                      src={comments}
                      className={scss.comments}
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
