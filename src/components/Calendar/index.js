import { useState } from 'react';
import Calendar from 'react-calendar';
import PrevIcon from 'assets/icons/prev.svg';
import NextIcon from 'assets/icons/next.svg';
import 'react-calendar/dist/Calendar.css';
import { CalendarWrapper } from './calendar.style';

const NextIconComponent = () => <img src={NextIcon} alt="" />;
const PrevIconComponent = () => <img src={PrevIcon} alt="" />;
export default function Index() {
  const [value, onChange] = useState(new Date());
  return (
    <CalendarWrapper>
      <Calendar
        onChange={onChange}
        value={value}
        className="sporttime-calendar"
        nextLabel={<NextIconComponent />}
        prevLabel={<PrevIconComponent />}
        next2Label={null}
        prev2Label={null}
      />
    </CalendarWrapper>
  );
}
