import styled from 'styled-components';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 56px;

  ${({ theme }) => theme.mq.mobile} {
    padding: 0 24px;
  }

  h2 {
    margin-top: 48px;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 32px;
  }

  ${({ theme }) => theme.mq.tablet} {
    //max-width: 50%;
  }

  button {
    margin: 16px 0;
    min-width: 200px;
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
    min-height: 160px;
  }
`;
