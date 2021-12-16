import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { uuid } from 'uuidv4';
import HomeIcon from 'assets/icons/home.svg';
import CalendarIcon from 'assets/icons/calendar.svg';
import ProfileIcon from 'assets/icons/profile.svg';
import MessageIcon from 'assets/icons/message.svg';
import SettingsIcon from 'assets/icons/settings.svg';
import UserAvaterImg from 'assets/images/user-avater.png';
import { SidebarWrapper } from './sidebar.style';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    {
      id: uuid(),
      icon: HomeIcon,
      link: '/'
    },
    {
      id: uuid(),
      icon: CalendarIcon,
      link: '/'
    },
    {
      id: uuid(),
      icon: ProfileIcon,
      link: '/'
    },
    {
      id: uuid(),
      icon: MessageIcon,
      link: '/'
    },
    {
      id: uuid(),
      icon: SettingsIcon,
      link: '/'
    }
  ];
  return (
    <SidebarWrapper isOpen={isOpen}>
      <div className="logo_container">
        <h1>
          Sport <br /> Time
        </h1>
      </div>
      <ul className="menu-container">
        {menus.map(({ icon, link, id }) => (
          <NavLink to={link} key={id}>
            <li className="menu_link">
              <img src={icon} alt="menu_icon" />
            </li>
          </NavLink>
        ))}
      </ul>
    </SidebarWrapper>
  );
}
