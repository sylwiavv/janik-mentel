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
    letter-spacing: 0.4px;
    margin: 16px 0 0;
  }

  input,
  textarea {
    border: 1px solid #e9e9e9cf;
    border-radius: 4px;
    margin: 8px 0;
    resize: none;
    padding: 8px;
    transition: border 0.4s;

    &:hover,
    &:focus-visible {
      border-color: #414ce9;
      outline: none;
    }

    &.error-input {
      border: 1px solid red;
    }
  }

  textarea {
    min-height: 160px;
  }
`;

export const ErrorMessageWrapper = styled.span`
  color: red;
`;

export const SuccessMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 280px;
  padding: 48px 56px 48px 0;
  border-radius: 4px;
  background-color: #f0faf4;
  border: 1px solid #b7e4c7;

  ${({ theme }) => theme.mq.mobile} {
    padding: 32px 24px;
    min-height: 200px;
  }

  h2 {
    margin: 0 0 16px;
    color: #1b4332;
    font-size: 28px;
  }

  p {
    margin: 0;
    color: #2d6a4f;
    font-size: 16px;
    line-height: 1.5;
  }
`;
