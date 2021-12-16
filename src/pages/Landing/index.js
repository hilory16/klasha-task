import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Box from '@mui/material/Box';
import EventBanner from 'components/EventBanner';
import Reminder from 'components/Reminder';
import Contacts from 'components/Contacts';
import Schedule from 'components/Schedule';
import Calendar from 'components/Calendar';
import WorkWidget from 'components/WorkWidget';
import { Wrapper } from './landing.style';

export default function Landing() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <div className="main-content-area">
        <h2 className="section-heading">Dashboard</h2>
        <div className="widget_row">
          <div className="widgets_1">
            <div className="event_banner_container">
              <EventBanner />
            </div>
            <div className="reminder_container">
              <Reminder />
            </div>
            <div className="contact_container">
              <Contacts />
            </div>
            <div className="graph_container">
              <WorkWidget />
            </div>
          </div>
          <div className="widgets_2">
            <div className="">
              <Calendar />
            </div>
            <div className="">
              <Schedule />
            </div>
          </div>
        </div>

        {/* <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>

        </Box> */}
      </div>
    </Wrapper>
  );
}

// function Item(props) {
//   const { sx, ...other } = props;
//   return (
//     <Box
//       sx={{
//         bgcolor: 'primary.main',
//         color: 'white',
//         p: 1,
//         m: 1,
//         borderRadius: 1,
//         textAlign: 'center',
//         fontSize: '1rem',
//         fontWeight: '700',
//         ...sx,
//       }}
//       {...other}
//     />
//   );
// }

// Item.propTypes = {
//   sx: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
//     ),
//     PropTypes.func,
//     PropTypes.object,
//   ]),
// };

// export default function GridTemplateColumns() {
//   return (
//     <div style={{ width: '100%' }}>
//       <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
//         <Item>1</Item>
//         <Item>2</Item>
//         <Item>3</Item>
//       </Box>
//     </div>
//   );
// }
