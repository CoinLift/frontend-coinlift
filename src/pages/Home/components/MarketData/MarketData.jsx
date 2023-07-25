import { useEffect, useState } from "react";
import {
  roundToTreeNumbers,
  roundAndAddComma,
  addCommasToNumber,
  isPositive,
} from "../../../../helpers/numbersOperations";
import { getCryptocurrencyData } from "../../../../api/getCryptocurrencyData";
import { Link } from "react-router-dom";
import positive from "../../../../assets/positive.svg";
import negative from "../../../../assets/negative.svg";
import arrow from "../../../../assets/title-arrow.svg";
import scss from "./MarketData.module.scss";

const MarketData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCryptocurrencyData("all-data").then((res) => setData(res.data));
  }, []);

  return (
    <section>
      <div className="container">
        <div className={`${scss.dataContainer} box`}>
          <Link to="/reading">
            <h2 className={scss.title}>
              Market data <img src={arrow} alt="arrow" width="50" />
            </h2>
          </Link>

          <table className={scss.table}>
            <thead>
              <tr>
                <th className={scss.line}>{""}</th>
                <th className={scss.line}>Cost</th>
                <th className={scss.line}>1H %</th>
                <th className={scss.line}>1D %</th>
                <th className={scss.line}>1W %</th>
                <th className={scss.line}>Market capitalization</th>
                <th className={scss.line}>Volume (1D)</th>
                <th>Circulating supply</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className={scss.border}>
                  <td className={scss.tableColCoin}>
                    <img src={item.imageUrl} alt={item.name} width={32} />
                    <span>{item.symbol}</span>
                  </td>
                  <td className={scss.tableCol}>{`$${roundAndAddComma(
                    item.price
                  )}`}</td>

                  <td className={scss.tableCol}>
                    <div className={scss.dataWrap}>
                      {isPositive(item.percentChange1H) ? (
                        <img src={positive} />
                      ) : (
                        <img src={negative} />
                      )}
                      {`${roundToTreeNumbers(item.percentChange1H)}%`}
                    </div>
                  </td>

                  <td className={scss.tableCol}>
                    <div className={scss.dataWrap}>
                      {isPositive(item.percentChange1W) ? (
                        <img src={positive} />
                      ) : (
                        <img src={negative} />
                      )}
                      {`${roundToTreeNumbers(item.percentChange1D)}%`}
                    </div>
                  </td>

                  <td className={scss.tableCol}>
                    <div className={scss.dataWrap}>
                      {isPositive(item.percentChange1W) ? (
                        <img src={positive} />
                      ) : (
                        <img src={negative} />
                      )}
                      {`${roundToTreeNumbers(item.percentChange1W)}%`}
                    </div>
                  </td>

                  <td className={scss.tableCol}>{`$${roundAndAddComma(
                    item.marketCap
                  )}`}</td>
                  <td className={scss.tableCol}>{`$${addCommasToNumber(
                    item.volumeUSD
                  )}`}</td>
                  <td className={scss.tableCol}>{`${addCommasToNumber(
                    item.circulatingSupply
                  )} ${item.symbol}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketData;
