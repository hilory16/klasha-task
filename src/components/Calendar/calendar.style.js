import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  margin-bottom: 48px;
  .sporttime-calendar {
    font-family: Poppins;
    border: none;
    background: ${({ theme }) => theme?.colors?.transparent};
    .react-calendar__tile.react-calendar__month-view__days__day {
      color: ${({ theme }) => theme?.colors?.white};
      font-weight: 500;
      font-size: 12px;
      line-height: 120%;
    }
    .react-calendar__tile.react-calendar__tile--active {
      border-radius: 50%;
      color: ${({ theme }) => theme?.colors?.white};
      background: ${({ theme }) => theme?.colors?.secondary};
    }
    .react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from {
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
      color: ${({ theme }) => theme?.colors?.white};
    }
    .react-calendar__month-view__days__day--neighboringMonth {
      color: ${({ theme }) => theme?.colors?.grey} !important;
    }
    .react-calendar__month-view__weekdays {
      abbr {
        font-weight: 500;
        font-size: 14px;
        border: none;
        text-decoration: none;
        text-transform: capitalize;
      }
    }
    .react-calendar__tile--now {
      background: ${({ theme }) => theme?.colors?.transparent};
      border: 1px solid ${({ theme }) => theme?.colors?.secondary};
      border-radius: 50%;
    }
    .react-calendar__navigation__arrow:focus {
      outline: none;
      background: ${({ theme }) => theme?.colors?.transparent} !important;
    }
  }
`;
