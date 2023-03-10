import React, { useEffect, useState } from "react";

export const useFormValid = (callback, ...agrs) => {
  const newobject = {};
  const defalutkeyValue = agrs.map((value) => {
    newobject[value] = "";
  });
  const [initialValue, setinitialValue] = useState(newobject);
  const [formError, setFormError] = useState({});
  const [serverError, setServerError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const onChange = (e) => {
    const { name, value } = e.target;
    setinitialValue({ ...initialValue, [name]: value });
    // setFormError({})
    setServerError({});
};
const onSubmit = (e) => {
    e.preventDefault();
    setFormError(validator(initialValue));
    console.log(initialValue)
    setServerError(null)
    setIsSubmit(true);
  };
  const validator = (value) => {
    const error = {};
    const keys = Object.keys(value);
    const arrOfKeys = keys.map((n) => {
      if (value[n] === "") error[n] = `${n} is required`;
    });
    return error;
  };
  const onSucess = (fun) => {
    fun();
  };

      //   onSucess();
    }
  }, [formError]);

  return [onSubmit, onChange, formError, serverError, initialValue];
};
