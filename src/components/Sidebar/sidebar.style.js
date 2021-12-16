import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  position: absolute;
  padding-left: 60px;
  top: 0;
  left: 0;
  .logo_container {
    margin-bottom: 87px;
    h1 {
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
    }
  }
  .menu-container {
    margin-left: 29px;
    .menu_link {
      background: ${({ theme }) => theme?.colors?.grey2};
      margin-bottom: 44px;
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      .menu_icon {
        height: 28px;
      }
    }
  }
`;
