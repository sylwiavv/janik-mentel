import { useState } from 'react';
import { useForm } from '@formspree/react';

export const useCustomForm = (initialState, validate, getRecaptchaToken) => {
  const [formValues, setFormValues] = useState(initialState);
  const [errorsState, setErrorState] = useState({});

  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_FORM_ID);

  const handleSubmitAction = async (e) => {
    if (e) {
      e.preventDefault();
    }

    let newErrors = { ...errorsState };
    for (const fieldName in formValues) {
      newErrors = validate(formValues[fieldName], fieldName, newErrors);
    }

    if (Object.keys(newErrors).length > 0) {
      setErrorState(newErrors);
      return;
    }

    let payload = { ...formValues };

    if (getRecaptchaToken) {
      try {
        const token = await getRecaptchaToken();

        if (!token) {
          setErrorState({
            form: 'Nie udało się zweryfikować reCAPTCHA. Odśwież stronę i spróbuj ponownie.',
          });
          return;
        }

        payload = {
          ...payload,
          'g-recaptcha-response': token,
        };
      } catch {
        setErrorState({
          form: 'Nie udało się zweryfikować reCAPTCHA. Odśwież stronę i spróbuj ponownie.',
        });
        return;
      }
    }

    setErrorState({});
    await handleSubmit(payload);
  };

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setErrorState(validate(value, name, errorsState));
  };

  return {
    state,
    formValues,
    errorsState,
    handleSubmitAction,
    handleInputOnChange,
    handleInputBlur,
  };
};
