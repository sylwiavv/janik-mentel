import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  color: #fff;
  background-color: #20365e;
  padding: 40px;
  position: relative;
  overflow: hidden;
  
  h3 {
    margin-top: 0;
    margin-bottom: 24px;
  }
  
  p, a {
    filter: brightness(0.85);
  }

  a {
    &:hover {
      color: #fff;
      filter: brightness(100);
    }
  }
  
  .container {
    display: grid;
    grid-gap: 48px;
    margin: 0 auto;
    max-width: 1240px;
    width: 100%;
    grid-template-columns: 1fr;

    ${({ theme }) => theme.mq.tablet} {
      grid-template-columns: repeat(2, auto);
    }
  }
  
  .footer-logo {
    position: absolute;
    opacity: .09;
    width: 300px;
    right: 40px;
    bottom: 24px;

    ${({ theme }) => theme.mq.mobile} {
      opacity: .05;
      right: -8px;
      bottom: 8px;
      width: 280px;
    }
  }
  
  .links-wrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-gap: 0 32px;
    margin-bottom: auto;
    
    h3 {
      grid-row: 1;
    }
    
    a {
      grid-column: 1;
      
      margin-bottom: 16px;
      
      &:last-child {
        grid-column: 2;
        grid-row: 2;
      }
    }

    ${({ theme }) => theme.mq.mobile} {
      grid-gap: 0;
    }
  }
`;
