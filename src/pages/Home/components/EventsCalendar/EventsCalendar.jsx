import { useEffect, useState } from "react";
import { getCryptocurrencyData } from "../../../../api/getCryptocurrencyData";
import yes from "../../../../assets/done.svg";
import no from "../../../../assets/close.svg";
import scss from "./EventsCalendar.module.scss";

const EventsCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getCryptocurrencyData("events").then((res) => setEvents(res.data));
  }, []);

  return (
    <div className={`${scss.calendarContainer} box`}>
      <h2 className={scss.title}>Calendar</h2>
      {events.length === 0 ? (
        <p className={scss.defaultText}>
          There are no events in the near future{" "}
        </p>
      ) : (
        <table className={scss.table}>
          <thead>
            <tr>
              <th className={scss.line}></th>
              <th className={scss.line}>Date</th>
              <th className={scss.head}>Conference</th>
            </tr>
          </thead>
          <tbody>
            {events.map((item, i) => (
              <tr key={i}>
                <td className={scss.tableCoin}>
                  <div className={scss.tableCoinWrap}>
                    <img src={item.imageLink} alt={item.cryptoName} />
                    {item.cryptoName}
                  </div>
                </td>
                <td className={scss.tableDate}>{item.date}</td>
                <td className={scss.tableIcon}>
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
