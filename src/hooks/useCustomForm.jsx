import { useState } from "react";
import { useForm } from "@formspree/react";

export const useCustomForm = (initialState, validate) => {
  const [formValues, setFormValues] = useState(initialState);
  const [errorsState, setErrorState] = useState({});

  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_FORM_ID, {
    data: formValues,
  });

  const handleSubmitAction = (e) => {
    if (e) {
      e.preventDefault();
    }

    let newErrors = { ...errorsState };
    for (const fieldName in formValues) {
      newErrors = validate(formValues[fieldName], fieldName, newErrors);
    }

    if (Object.keys(newErrors).length === 0) {
      handleSubmit(formValues);
      setFormValues(initialState);
    } else {
      setErrorState(newErrors);
    }
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
