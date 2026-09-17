import React, { useDebugValue, useState } from "react";
const useFormFields = (initialState = {}) => {
  const [fields, setFields] = useState(initialState);
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  useDebugValue("custom hook for handle inputs");
  return [fields, handleChange, setFields];
};
export default useFormFields;
