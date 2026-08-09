import React from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { ContactFormFields } from './ContactFormFields';

const ContactFormWithRecaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getRecaptchaToken = async () => {
    if (!executeRecaptcha) {
      return undefined;
    }

    return executeRecaptcha('contact_form');
  };

  return <ContactFormFields getRecaptchaToken={getRecaptchaToken} />;
};

const ContactFormRecaptcha = ({ siteKey }) => (
  <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
    <ContactFormWithRecaptcha />
  </GoogleReCaptchaProvider>
);

export default ContactFormRecaptcha;
