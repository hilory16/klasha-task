import styled from 'styled-components';

export const ScheduleWrapper = styled.div`
  .top {
    margin-bottom: 23px;
    display: flex;
    align-item: center;
    justify-content: space-between;
    .link {
    }
  }
  .schedules {
    .schedule_item {
      margin-bottom: 16px;
      background: ${({ theme }) => theme?.colors?.darkGrey};
      border: 1.5px solid #1f1f25;
      border-radius: 15px;
      padding: 20px 15px;
      .status-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        img {
          margin-top: 4px;
          width: 17px;
          cursor: pointer;
        }
      }
      .schedule_title {
        font-weight: 500;
        font-size: 16px;
        margin: 12px 0;
      }
      .time {
        font-weight: 500;
        font-size: 14px;
        color: ${({ theme }) => theme?.colors?.grey};
      }
    }
    .schedule_item:last-child {
      margin-bottom: 0;
    }
  }
`;
