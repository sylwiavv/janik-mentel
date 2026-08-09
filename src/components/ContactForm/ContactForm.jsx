import React, { useEffect, useState } from 'react';
import { ContactFormFields } from './ContactFormFields';

export const ContactForm = () => {
  const recaptchaSiteKey = process.env.GATSBY_GOOGLE_RECAPTCHA_SITE_KEY;
  const [RecaptchaForm, setRecaptchaForm] = useState(null);

  useEffect(() => {
    if (!recaptchaSiteKey) {
      return;
    }

    import('./ContactFormRecaptcha').then((module) => {
      setRecaptchaForm(() => module.default);
    });
  }, [recaptchaSiteKey]);

  if (RecaptchaForm && recaptchaSiteKey) {
    return <RecaptchaForm siteKey={recaptchaSiteKey} />;
  }

  return <ContactFormFields />;
};
