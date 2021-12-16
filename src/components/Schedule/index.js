import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import SeeMoreIcon from 'assets/icons/more.svg';
import { Status } from 'styles/status';
import { ScheduleWrapper } from './schedule.style';

export default function Schedule() {
  const schedules = [
    {
      id: uuid(),
      title: 'BD & Treatment Centre',
      time: '4:15 pm - 6:00 pm',
      status: 'success',
      statusText: 'Team Meetings'
    },
    {
      id: uuid(),
      title: 'BD & Treatment Centre',
      time: '4:15 pm - 6:00 pm',
      status: 'default',
      statusText: 'Medical checks'
    }
  ];
  return (
    <ScheduleWrapper>
      <div className="top">
        <h3 className="widget_introduction">Schedule</h3>
        <Link to="" className="link">
          View all
        </Link>
      </div>

      <div className="schedules">
        {schedules.map(({ id, title, time, status, statusText }) => (
          <div className="schedule_item" key={id}>
            <div className="status-row">
              <Status status={status}>{statusText}</Status>
              <img src={SeeMoreIcon} alt="Dropdown icon" className="dropdown_icon" />
            </div>
            <h4 className="schedule_title">{title}</h4>
            <p className="time">{time}</p>
          </div>
        ))}
      </div>
    </ScheduleWrapper>
  );
}
