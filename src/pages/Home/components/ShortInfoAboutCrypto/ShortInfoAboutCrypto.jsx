import { useEffect, useState } from "react";
import {
  isPositive,
  normalizePerForShortInfo,
} from "../../../../helpers/numbersOperations";
import { getCryptocurrencyData } from "../../../../api/getCryptocurrencyData";
import scss from "./ShortInfoAboutCrypto.module.scss";

const ShortInfoAboutCrypto = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getCryptocurrencyData("percent-data").then((res) => setInfo(res.data));
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <h2 className={scss.title}>Short information about cryptocurrency</h2>
          <ul className={scss.list}>
            {info.map((item) => (
              <li key={item.name} className={scss.item}>
                <img
                  src={item.imageUrl}
                  className={scss.coinImg}
                  width="33"
                  alt={item.name}
                />
                <span className={scss.coin}>
                  {item.name}
                  {isPositive(item.percentChange24h) ? (
                    <span className={`${scss.per} ${scss.perPositive}`}>
                      {"+" +
                        normalizePerForShortInfo(item.percentChange24h) +
                        "%"}
                    </span>
                  ) : (
                    <span className={`${scss.per} ${scss.perNegative}`}>
                      {normalizePerForShortInfo(item.percentChange24h) + "%"}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ShortInfoAboutCrypto;
