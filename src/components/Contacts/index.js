import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { Block } from 'styles/block';
import SeeMoreIcon from 'assets/icons/more.svg';
import Contact1Image from 'assets/images/contact-1.png';
import Contact2Image from 'assets/images/contact-2.png';
import Contact3Image from 'assets/images/contact-3.png';
import Contact4Image from 'assets/images/contact-4.png';
import { ContactsWrapper } from './contacts.style';

export default function Reminder() {
  const contactList = [
    {
      id: uuid(),
      name: 'Martins Black',
      role: 'Coach',
      img: Contact1Image
    },
    {
      id: uuid(),
      name: 'Jane Cooper',
      role: 'Manager',
      img: Contact2Image
    },
    {
      id: uuid(),
      name: 'Jacob Gate',
      role: 'Player',
      img: Contact3Image
    },
    {
      id: uuid(),
      name: 'Albert Fox',
      role: 'Player',
      img: Contact4Image
    }
  ];
  return (
    <ContactsWrapper>
      <Block bg="darkGrey">
        <div className="top">
          <h3 className="widget_introduction">Contacts</h3>
          <Link to="" className="link">
            View all
          </Link>
        </div>

        <div className="contact_list">
          {contactList.map(({ id, name, role, img }) => (
            <div className="contact_item" key={id}>
              <div className="contact">
                <img src={img} alt="see more icon" className="contact_image" />
                <div className="text">
                  <h4>{name}</h4>
                  <p>{role}</p>
                </div>
              </div>
              <div className="see_more">
                <img src={SeeMoreIcon} alt="see more icon" className="see_more_icon" />
              </div>
            </div>
          ))}
        </div>
      </Block>
    </ContactsWrapper>
  );
}
