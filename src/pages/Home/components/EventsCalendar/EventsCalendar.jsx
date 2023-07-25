import { useEffect, useState } from "react";
import { getCryptocurrencyData } from "../../../../api/getCryptocurrencyData";
import yes from "../../../../assets/done.svg";
import no from "../../../../assets/close.svg";
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
        <p className={s.defaultText}>
          There are no events in the near future{" "}
        </p>
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
                    <img src={yes} alt="yes" width="25" height="25" />
                  ) : (
                    <img src={no} alt="no" width="25" height="25" />
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
