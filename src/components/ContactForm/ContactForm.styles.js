import styled from 'styled-components';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 50%;
  }
  
  h3 {
    margin-bottom: 24px;
  }

  button {
    margin: 16px 0;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .4px;
    margin: 16px 0 0;
  }

  input, textarea {
    border: 1px solid #e9e9e9cf;
    border-radius: 4px;
    margin: 8px 0;
    resize: none;
    padding: 8px;
    transition: border .4s;

    &:hover,
    &:focus-visible {
      border-color: #414ce9;
      outline: none;
    }
  }

  textarea {
    min-height: 200px;
  }

  ${({ theme }) => theme.mq.desktop} {
    //max-width: 400px;
    //margin: 0 auto 100px;

    h2 {
      //max-width: 300px;
      margin: 32px auto;
    }
  }
`;
