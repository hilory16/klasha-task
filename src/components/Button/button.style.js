import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  background: ${({ theme, secondary }) =>
    !secondary ? theme?.colors?.primary : theme?.colors?.green2};
  color: ${({ theme, secondary }) => (!secondary ? theme?.colors?.white : theme?.colors?.dark1)};
  border-radius: 5px;
  // height:40px;
  padding: 14px 32px;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    font-family: Tomato Grotesk;
    font-weight: bold;
    font-size: 16px;
  }
  ${({ theme }) => theme.mediaQueries.medium} {
    margin-right: auto;
    margin-left: auto;
  }
`;
