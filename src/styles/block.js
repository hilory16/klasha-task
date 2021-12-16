import styled from 'styled-components';

export const Block = styled.div`
  background-color: ${({ bg, theme }) => {
    switch (bg) {
      case 'darkGrey':
        return `${theme?.colors?.darkGrey}`;
      default:
        return `${theme?.colors?.darkGrey}`;
    }
  }};
  height: 100%;
  padding: 25px 20px;
  width: 100%;
  border: 1.5px solid #1f1f25;
  border-radius: 15px;
`;
