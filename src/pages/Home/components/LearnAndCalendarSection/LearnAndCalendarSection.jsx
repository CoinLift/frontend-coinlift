import EventsCalendar from "../EventsCalendar/EventsCalendar";
import LearnPreview from "../LearnPreview/LearnPreview";
import scss from "./LearnAndCalendarSection.module.scss";

const LearnAndCalendarSection = () => {
  return (
    <section>
      <div className={`${scss.wrapper} container`}>
        <LearnPreview />
        <EventsCalendar />
      </div>
    </section>
  );
};

export default LearnAndCalendarSection;
