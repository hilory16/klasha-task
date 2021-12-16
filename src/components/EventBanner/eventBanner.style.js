import styled from 'styled-components';
export const EventBannerWrapper = styled.div`
  background: ${({ theme }) => theme?.colors?.secondary};
  padding: 24px 20px;
  border-radius: 15px;
  width: 100%;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .text_area {
    max-width: 70%;
    .widget_introduction {
      margin-bottom: 18px;
    }
    .description {
      font-weight: 500;
      font-size: 17px;
      line-height: 140%;
    }
  }
  .button_container {
    button {
      background: ${({ theme }) => theme?.colors?.white};
      width: 166px;
      height: 45px;
      border-radius: 8px;
      border: none;
      outline: none;
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme?.colors?.white};
      transition: all ease 0.3s;
      .btn_text {
        font-weight: 600;
        font-size: 18px;
        line-height: 140%;
        color: ${({ theme }) => theme?.colors?.secondary};
        transition: all ease 0.3s;
      }
      :hover {
        background: ${({ theme }) => theme?.colors?.secondary};
        border: 1px solid ${({ theme }) => theme?.colors?.white};
        .btn_text {
          color: ${({ theme }) => theme?.colors?.white};
        }
      }
    }
  }
`;
