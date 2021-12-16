import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  // align-items: center;
  justify-content: space-between;
  padding-left: 30%;
  margin-bottom: 36px;
  .status_bar {
    display: flex;
    align-items: center;
    .date {
      font-weight: 400;
      font-size: 22px;
      line-height: 26px;
      margin-right: 26px;
    }
    .search_bar {
      display: flex;
      align-items: center;
      padding: 20px;
      width: 300px;
      border-bottom: 3px solid ${({ theme }) => theme?.colors?.secondary};
      .search_icon {
        margin-right: 16px;
        width: 24px;
        height: 24px;
      }
      input {
        outline: none;
        background: ${({ theme }) => theme?.colors?.transparent};
        color: ${({ theme }) => theme?.colors?.white};
        height: 30px;
        width: 100%;
        font-size: 18px;
        line-height: 120%;
        ::plcaeholder {
          color: ${({ theme }) => theme?.colors?.grey};
          font-weight: normal;
          font-size: 18px;
          line-height: 120%;
        }
      }
    }
  }
  .user_profile {
    display: flex;
    align-items: center;
    .name {
      text-align: right;
      margin-right: 25px;
      .username {
        font-weight: 500;
        font-size: 24px;
        line-height: 120%;
        margin-bottom: 8px;
      }
      .user_role {
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        color: ${({ theme }) => theme?.colors?.grey};
      }
    }
    .avater {
      width: 72px;
      height: 72px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
