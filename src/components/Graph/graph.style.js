import styled from 'styled-components';

export const GraphWrapper = styled.div`
  height: 100%;
  .recharts-text.recharts-cartesian-axis-tick-value {
    font-weight: normal;
    font-size: 14px;
    fill: ${({ theme }) => theme?.colors?.white};
    line-height: 120%;
  }
  .legend {
    display: flex;
    padding: 0 10px;
    margin-top: 28px;
    justify-content: space-between;
    li {
      display: flex;
      align-items: center;
    }
    &_icon {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      margin-right: 12px;
    }
    &_icon.yellow {
      background: ${({ theme }) => theme?.colors?.yellow};
    }
    &_icon.pink {
      background: ${({ theme }) => theme?.colors?.red};
    }
    &_icon.blue {
      background: ${({ theme }) => theme?.colors?.blue};
    }
    &_text {
      font-weight: normal;
      font-size: 14px;
      line-height: 120%;
      :first-letter {
        text-transform: capitalize;
      }
    }
  }
`;
