import styled from 'styled-components';

export const Status = styled.div`
  background-color: ${({ status, theme }) => {
    switch (status) {
      case 'default':
        return `${theme?.colors?.default}`;
      case 'success':
        return `${theme?.colors?.success}`;
      default:
        return `${theme?.colors?.default}`;
    }
  }};
  font-weight: 600;
  border-radius: 4px;
  width: 122px;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme?.colors?.white};
`;
