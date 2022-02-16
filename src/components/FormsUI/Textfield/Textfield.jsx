import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

const TextfieldWrapper = ({name, ...otherProps}) => {
  // form state
  const [field, meta] = useField(name);
  
  // set style defaults
  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined'
  }

  // user error
  if (meta && meta.touched && meta.error){
    configTextfield.helperText = meta.error;
    configTextfield.error = true;
  }

  return (
    <TextField {...configTextfield} />
  )
};

export default TextfieldWrapper;