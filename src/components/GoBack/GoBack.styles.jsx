import styled from "styled-components";

export const GoBackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  grid-gap: 8px;
  transition: color, 0.4s;
  font-weight: 500;
  width: max-content;
  margin-bottom: 0px;

  svg {
    position: relative;
    transition: left, 0.4s;
    left: 0;

    path {
      transition: fill, 0.4s;
    }
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.fontColorHover};

    svg {
      left: -8px;

      path {
        fill: ${({ theme }) => theme.colors.fontColorHover};
      }
    }
  }
`;
