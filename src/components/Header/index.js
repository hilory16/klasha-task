import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { uuid } from '../../../node_modules/uuidv4/build/lib/uuidv4';
import { HeaderWrapper } from './header.style';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return <HeaderWrapper className="wrapper" isOpen={isOpen}></HeaderWrapper>;
}
