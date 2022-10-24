import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ContactFormWrapper } from './ContactForm.styles';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('moqrgkon');

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <label htmlFor="name">Imię i nazwisko</label>
      <input type="name" name="name" id="name" placeholder="Imię i nazwisko" />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">Adres e-mail</label>
      <input type="email" name="email" id="email" placeholder="Adres e-mail" />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">Treść</label>
      <textarea name="message" id="message" placeholder="Wiadomość" />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      {state.errors.length ? state.errors.map((e) => (
        <p key={e.message}>{(e.code === 'EMPTY') && 'Uzupełnij pola przed wysłaniem wiadomości'}</p>
      )) : null}
      {state.succeeded
        ? <p>Dziękujemy za wiadomość!</p>
        : null}
      <button type="submit" disabled={state.submitting}>Wyślij</button>
    </ContactFormWrapper>
  );
};
