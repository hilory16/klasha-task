import { useState, useEffect } from 'react';
import SwitchUnstyled from '@mui/base/SwitchUnstyled';
import Switch from 'react-switch';
import { uuid } from 'uuidv4';
import { Block } from 'styles/block';
import { ReminderWrapper } from './reminder.style';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Reminder() {
  const [checked, setChecked] = useState([]);
  const reminders = [
    {
      id: uuid(),
      title: 'Training session',
      time: '10:00 am',
      active: false
    },
    {
      id: uuid(),
      title: 'Team meetings',
      time: '1:00 pm',
      active: true
    }
  ];
  useEffect(() => {
    const arr = [];
    reminders.forEach(({ title, active }) => {
      arr.push({
        title,
        status: active
      });
    });
    setChecked(arr);
  }, []);

  const handleChange = (value, title) => {
    const newCheck = checked.filter((item) => item.title !== title);
    setChecked([
      ...newCheck,
      {
        title,
        status: value
      }
    ]);
  };
  return (
    <ReminderWrapper>
      <Block>
        <h3 className="widget_introduction">Reminder</h3>
        <div className="reminders">
          {reminders.map(({ id, title, time }, i) => {
            const x = checked.filter((check) => check.title === title)[0];
            return (
              <div className="reminder_item" key={id}>
                <label>
                  <Switch
                    checked={x && x.status}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={(value) => handleChange(value, title)}
                    height={26}
                    width={52}
                    onColor="#39BD45"
                    offColor="#434A59"
                  />
                  <span className="text">
                    {title} <br />
                    {time}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
        <div className="button_container">
          <div className="add_new_btn">+ Add new</div>
        </div>
      </Block>
    </ReminderWrapper>
  );
}
