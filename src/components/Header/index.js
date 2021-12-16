import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { uuid } from 'uuidv4';
import SearchIcon from 'assets/icons/search.svg';
import UserAvaterImg from 'assets/images/user-avater.png';
import { HeaderWrapper } from './header.style';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderWrapper isOpen={isOpen}>
      <div className="status_bar">
        <h3 className="date">April 18, 2021</h3>
        <div className="search_bar">
          <img src={SearchIcon} className="search_icon" alt="search_icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="user_profile">
        <div className="name">
          <h3 className="username">Eleanor Pena</h3>
          <p className="user_role">Admin</p>
        </div>
        <div className="avater">
          <img src={UserAvaterImg} alt="user_avater" />
        </div>
      </div>
    </HeaderWrapper>
  );
}
