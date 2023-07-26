import { useEffect, useState } from "react";
import {
  isPositive,
  normalizePerForShortInfo,
} from "../../../../helpers/numbersOperations";
import { getCryptocurrencyData } from "../../../../api/getCryptocurrencyData";
import s from "./ShortInfoAboutCrypto.module.scss";

import Text from "../../../../components/Text/Text";

const ShortInfoAboutCrypto = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getCryptocurrencyData("percent-data").then((res) => setInfo(res.data));
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <Text variant="h3">Short information about cryptocurrency</Text>
          <ul className={s.list}>
            {info.map((item) => (
              <li key={item.name} className={s.item}>
                <img
                  src={item.imageUrl}
                  className={s.coinImg}
                  width="33"
                  alt={item.name}
                />
                <span className={s.coin}>
                  {item.name}
                  {isPositive(item.percentChange24h) ? (
                    <span className={`${s.per} ${s.perPositive}`}>
                      {"+" +
                        normalizePerForShortInfo(item.percentChange24h) +
                        "%"}
                    </span>
                  ) : (
                    <span className={`${s.per} ${s.perNegative}`}>
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
