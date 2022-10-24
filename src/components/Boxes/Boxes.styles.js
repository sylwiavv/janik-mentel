import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    // width: ${({ isSmall }) => (isSmall ? '60px' : '200px')};
  justify-content: space-between;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  margin-bottom: 48px;

  p {
    margin: 0;
  }
`;
