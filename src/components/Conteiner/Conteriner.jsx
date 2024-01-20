import styled from "styled-components";

export const SectionWrapper = styled.section`
  ${({ theme }) => theme.mq.tablet} {
    min-height: ${({ isFullHeight }) => (isFullHeight ? "100vh" : "auto")};
    align-items: ${({ isFullHeight }) => (isFullHeight ? "center" : "")};
    display: ${({ isFullHeight }) => (isFullHeight ? "flex" : "block")};
  }
`;
