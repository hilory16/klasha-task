import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 60px 0 188px;
  min-height: 100vh;
  width: 100%;
  margin: 50px auto;
  .section-heading {
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    margin-bottom: 31px;
  }
  .widget_row {
    display: flex;
    justify-content: space-between;
    .widgets_1 {
      width: 100%;
      margin-right: 16px;
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
      .event_banner_container {
        width: 67%;
        margin-bottom: 20px;
      }
      .reminder_container {
        width: 31%;
        margin-bottom: 20px;
      }
      .contact_container {
        width: 35%;
      }
      .graph_container {
        width: 63%;
        height: 318px;
      }
    }
    .widgets_2 {
      width: 30%;
      padding: 24px;
      border: 1.5px solid ${({ theme }) => theme?.colors?.secondary};
      border-radius: 15px;
    }
  }
`;
