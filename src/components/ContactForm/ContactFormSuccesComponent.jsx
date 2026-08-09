import React, { useEffect, useRef } from 'react';
import { SuccessMessageWrapper } from './ContactForm.styles';

export const ContactFormSuccessComponent = () => {
  const successRef = useRef(null);

  useEffect(() => {
    successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  return (
    <SuccessMessageWrapper ref={successRef}>
      <h2>Dziękujemy!</h2>
      <p>Twoja wiadomość została wysłana. Odpowiemy tak szybko, jak to możliwe.</p>
    </SuccessMessageWrapper>
  );
};
