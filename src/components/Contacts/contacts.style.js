import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  min-height: 285px;
  .top {
    margin-bottom: 23px;
    display: flex;
    align-item: center;
    justify-content: space-between;
    .link {
    }
  }
  .contact_list {
    .contact_item {
      display: flex;
      margin-bottom: 13px;
      justify-content: space-between;
      :last-child {
        margin-bottom: 0px;
      }
      .contact {
        display: flex;
        .contact_image {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .text {
          h4 {
            font-weight: 500;
            font-size: 18px;
            line-height: 120%;
          }
          p {
            font-weight: 500;
            font-size: 14px;
            line-height: 120%;
            color: ${({ theme }) => theme?.colors?.grey};
          }
        }
      }
      .see_more_icon {
        width: 17px;
        cursor: pointer;
      }
    }
  }
`;
