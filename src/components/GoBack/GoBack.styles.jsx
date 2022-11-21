import styled from 'styled-components';

export const GoBackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  grid-gap: 8px;
  transition: color, .4s;
  font-weight: 500;
  width: max-content;
  margin-bottom: 0px;

  svg {
    position: relative;
    transition: left, .4s;
    left: 0;
    
    path {
      transition: fill, .4s;
    }
  }
  
  &:hover {
    cursor: pointer;
    color: green;
    
    svg {
      left: -8px;
      
      path {
        fill: green;
      }
    }
  }
`;
