import EventsCalendar from "../EventsCalendar/EventsCalendar";
import LearnPreview from "../LearnPreview/LearnPreview";

import s from "./LearnAndCalendarSection.module.scss";

const LearnAndCalendarSection = () => {
	return (
		<section>
			<div className={`${s.wrapper} container`}>
				<LearnPreview />
				<EventsCalendar />
			</div>
		</section>
	);
};

export default LearnAndCalendarSection;
