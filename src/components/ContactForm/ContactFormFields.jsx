import React from 'react';
import { ContactFormWrapper, ErrorMessageWrapper } from './ContactForm.styles';
import { ButtonStyled } from '../Button/ButtonStyled';
import { EmptyFieldMsg, ValidEmailMsg } from './ContactFormValidationMessages';
import { useCustomForm } from '../../hooks/useCustomForm';
import { ContactFormSuccessComponent } from './ContactFormSuccesComponent';

export const initialState = {
  name: '',
  email: '',
  message: '',
};

const validate = (value, name, errors) => {
  let newErrors = { ...errors };
  switch (name) {
    case 'name':
      if (value.length === 0) {
        newErrors = {
          ...errors,
          name: EmptyFieldMsg,
        };
      } else {
        const { name: nameError, ...withoutName } = newErrors;
        newErrors = withoutName;
      }
      break;
    case 'email':
      if (value.length === 0) {
        newErrors = {
          ...newErrors,
          email: EmptyFieldMsg,
        };
      } else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        newErrors = {
          ...newErrors,
          email: ValidEmailMsg,
        };
      } else {
        const { email, ...withoutEmail } = newErrors;
        newErrors = withoutEmail;
      }
      break;
    case 'message':
      if (value.length === 0) {
        newErrors = {
          ...errors,
          message: EmptyFieldMsg,
        };
      } else {
        const { message, ...withoutMessage } = newErrors;
        newErrors = withoutMessage;
      }
      break;
    default:
      break;
  }
  return newErrors;
};

export const ContactFormFields = ({ getRecaptchaToken }) => {
  const {
    state,
    formValues,
    errorsState,
    handleSubmitAction,
    handleInputOnChange,
    handleInputBlur,
  } = useCustomForm(initialState, validate, getRecaptchaToken);

  return (
    <>
      {state.succeeded ? (
        <ContactFormSuccessComponent />
      ) : (
        <ContactFormWrapper onSubmit={handleSubmitAction}>
          <h2>Wyślij do nas widomość</h2>
          <p>Zapraszamy do wysałania wiadomości poprzez formularz kontaktowy</p>
          <label htmlFor="name">Imię i nazwisko</label>
          <input
            className={errorsState.name && 'error-input'}
            type="text"
            name="name"
            id="name"
            placeholder="Imię i nazwisko"
            value={formValues.name}
            onChange={handleInputOnChange}
            onBlur={handleInputBlur}
          />
          <ErrorMessageWrapper>{errorsState.name}</ErrorMessageWrapper>

          <label htmlFor="email">Adres e-mail</label>
          <input
            className={errorsState.email && 'error-input'}
            type="email"
            name="email"
            id="email"
            placeholder="Adres e-mail"
            value={formValues.email}
            onChange={handleInputOnChange}
            onBlur={handleInputBlur}
          />
          <ErrorMessageWrapper>{errorsState.email}</ErrorMessageWrapper>

          <label htmlFor="message">Treść</label>
          <textarea
            className={errorsState.message && 'error-input'}
            name="message"
            id="message"
            placeholder="Wiadomość"
            value={formValues.message}
            onChange={handleInputOnChange}
            onBlur={handleInputBlur}
          />
          <ErrorMessageWrapper>{errorsState.message}</ErrorMessageWrapper>
          <ButtonStyled type="submit" disabled={state.submitting}>
            {state.submitting ? 'Wysyłanie...' : 'Wyślij'}
          </ButtonStyled>
          {getRecaptchaToken && (
            <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
              Ta strona jest chroniona przez reCAPTCHA. Obowiązują
              {' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Polityka prywatności
              </a>
              {' '}
              i
              {' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
                Warunki korzystania
              </a>
              {' '}
              Google.
            </p>
          )}
        </ContactFormWrapper>
      )}

      {state.errors?.length > 0 && (
        <ErrorMessageWrapper>
          Coś poszło nie tak, spróbuj ponownie
        </ErrorMessageWrapper>
      )}
    </>
  );
};
