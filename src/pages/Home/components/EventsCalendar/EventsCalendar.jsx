import { useEffect, useState } from "react";

import { getCryptocurrencyData } from "api/getCryptocurrencyData";


import { Icon } from "components/Icon/Icon";
import s from "./EventsCalendar.module.scss";

const EventsCalendar = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		getCryptocurrencyData("events").then((res) => setEvents(res.data));
	}, []);

	return (
		<div className={`${s.calendarContainer} box`}>
			<h2 className={s.title}>Calendar</h2>
			{events.length === 0 ? (
				<p className={s.defaultText}>There are no events in the near future </p>
			) : (
				<table className={s.table}>
					<thead>
						<tr>
							<th className={s.line}></th>
							<th className={s.line}>Date</th>
							<th className={s.head}>Conference</th>
						</tr>
					</thead>
					<tbody>
						{events.map((item, i) => (
							<tr key={i}>
								<td className={s.tableCoin}>
									<div className={s.tableCoinWrap}>
										<img src={item.imageLink} alt={item.cryptoName} />
										{item.cryptoName}
									</div>
								</td>
								<td className={s.tableDate}>{item.date}</td>
								<td className={s.tableIcon}>
									{item.is_conference ? (
										<Icon id="done"  alt="yes" height="25" width="25" />
									) : (
										<Icon id="close"  alt="yes" height="25" width="25" />
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default EventsCalendar;
