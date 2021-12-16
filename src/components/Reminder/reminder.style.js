import styled from 'styled-components';

export const ReminderWrapper = styled.div`
  height: 285px;
  position: relative;
  .widget_introduction {
    margin-bottom: 15px;
  }
  .react-switch-bg {
    padding: 0 1px;
  }
  .react-switch-handle {
    width: 22px !important;
    height: 22px !important;
    top: 2px !important;
  }
  .reminders {
    .reminder_item {
      margin-bottom: 20px;
      label {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .text {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: ${({ theme }) => theme?.colors?.white};
      }
    }
  }
  .button_container {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 15px;
    width: 100%;
    left: 0;
    .add_new_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 18px;
      line-height: 140%;
      color: ${({ theme }) => theme?.colors?.secondary};
      border: 1px solid ${({ theme }) => theme?.colors?.secondary};
      width: 137px;
      height: 45px;
      border-radius: 8px;
      cursor: pointer;
      transition: all ease 0.3s;
      :hover {
        color: ${({ theme }) => theme?.colors?.white};
        background: ${({ theme }) => theme?.colors?.secondary};
      }
    }
  }
`;
