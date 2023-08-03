import { useEffect, useState } from "react";

import { getCryptocurrencyData } from "api/getCryptocurrencyData";

import { isPositive, normalizePerForShortInfo } from "helpers/numbersOperations";

import s from "./ShortInfoAboutCrypto.module.scss";

const ShortInfoAboutCrypto = () => {
	const [info, setInfo] = useState([]);

	useEffect(() => {
		getCryptocurrencyData("percent-data").then((res) => setInfo(res.data));
	}, []);

	return (
		<>
			<section>
				<div className="container">
					<h2 className={s.title}>Short information about cryptocurrency</h2>
					<ul className={s.list}>
						{info.map((item) => (
							<li key={item.name} className={s.item}>
								<img src={item.imageUrl} className={s.coinImg} width="33" alt={item.name} />
								<span className={s.coin}>
									{item.name}
									{isPositive(item.percentChange24h) ? (
										<span className={`${s.per} ${s.perPositive}`}>
											{"+" + normalizePerForShortInfo(item.percentChange24h) + "%"}
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
