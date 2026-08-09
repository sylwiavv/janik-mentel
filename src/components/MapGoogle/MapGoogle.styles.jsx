import styled from 'styled-components';

export const StyledMapIframe = styled.iframe`
  width: 100%;
  height: 50vh;
  border: 0;

  ${({ theme }) => theme.mq.desktop} {
    height: 720px;
  }
`;
