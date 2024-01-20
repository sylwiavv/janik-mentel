import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.84);
  border-radius: 50%;
  position: relative;
  padding: 8px;
  height: 90px;
  width: 90px;

  svg {
    height: 85%;
    width: 85%;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;
