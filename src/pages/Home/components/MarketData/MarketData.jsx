import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { getCryptocurrencyData } from "api/getCryptocurrencyData";

import { Icon } from "components/Icon/Icon";

import { addCommasToNumber, isPositive, roundAndAddComma, roundToTreeNumbers } from "helpers/numbersOperations";

import s from "./MarketData.module.scss";

const MarketData = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getCryptocurrencyData("all-data").then((res) => setData(res.data));
	}, []);

	return (
		<section>
			<div className="container">
				<div className={`${s.dataContainer} box`}>
					<Link to="/reading">
						<h2 className={s.title}>
							Market data <Icon id="title-arrow" alt="title-arrow" width="52" height="12" />
						</h2>
					</Link>

					<table className={s.table}>
						<thead>
							<tr>
								<th className={s.line}>{""}</th>
								<th className={s.line}>Cost</th>
								<th className={s.line}>1H %</th>
								<th className={s.line}>1D %</th>
								<th className={s.line}>1W %</th>
								<th className={s.line}>Market capitalization</th>
								<th className={s.line}>Volume (1D)</th>
								<th>Circulating supply</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item, i) => (
								<tr key={i} className={s.border}>
									<td className={s.tableColCoin}>
										<img src={item.imageUrl} alt={item.name} width={32} />
										<span>{item.symbol}</span>
									</td>
									<td className={s.tableCol}>{`$${roundAndAddComma(item.price)}`}</td>

									<td className={s.tableCol}>
										<div className={s.dataWrap}>
											{isPositive(item.percentChange1H) ? (
												<Icon id="positive" alt="positive" width="13" height="9" />
											) : (
												<Icon id="negative" alt="negative" width="13" height="9" />
											)}
											{`${roundToTreeNumbers(item.percentChange1H)}%`}
										</div>
									</td>

									<td className={s.tableCol}>
										<div className={s.dataWrap}>
											{isPositive(item.percentChange1W) ? (
												<Icon id="positive" alt="positive" width="13" height="9" />
											) : (
												<Icon id="negative" alt="negative" width="13" height="9" />
											)}
											{`${roundToTreeNumbers(item.percentChange1D)}%`}
										</div>
									</td>

									<td className={s.tableCol}>
										<div className={s.dataWrap}>
											{isPositive(item.percentChange1W) ? (
												<Icon id="positive" alt="positive" width="13" height="9" />
											) : (
												<Icon id="negative" alt="negative" width="13" height="9" />
											)}
											{`${roundToTreeNumbers(item.percentChange1W)}%`}
										</div>
									</td>

									<td className={s.tableCol}>{`$${roundAndAddComma(item.marketCap)}`}</td>
									<td className={s.tableCol}>{`$${addCommasToNumber(item.volumeUSD)}`}</td>
									<td className={s.tableCol}>{`${addCommasToNumber(item.circulatingSupply)} ${item.symbol}`}</td>
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
