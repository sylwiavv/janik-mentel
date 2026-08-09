import React, { useEffect, useState } from 'react';
import { ContactFormFields } from './ContactFormFields';

const formPlaceholder = <div style={{ minHeight: '400px' }} aria-hidden="true" />;

export const ContactForm = () => {
  const recaptchaSiteKey = process.env.GATSBY_GOOGLE_RECAPTCHA_SITE_KEY;
  const [isReady, setIsReady] = useState(!recaptchaSiteKey);
  const [RecaptchaForm, setRecaptchaForm] = useState(null);

  useEffect(() => {
    if (!recaptchaSiteKey) {
      return;
    }

    import('./ContactFormRecaptcha').then((module) => {
      setRecaptchaForm(() => module.default);
      setIsReady(true);
    });
  }, [recaptchaSiteKey]);

  if (!isReady) {
    return formPlaceholder;
  }

  if (RecaptchaForm && recaptchaSiteKey) {
    return <RecaptchaForm siteKey={recaptchaSiteKey} />;
  }

  return <ContactFormFields />;
};
