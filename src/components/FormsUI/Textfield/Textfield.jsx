import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";


const TextfieldWrapper = ({name, ...otherProps}) => {
  // manafor form state
  const [field, info] = useField(name);
  
  // set style defaults
  const configTextfield = {
    ...field,
    ...otherProps,
    variant: 'outlined',
    fullWidth: true
  }

  if (meta && meta.touched && meta.error){
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <TextField {...configTextfield} />
  )
};

export default TextfieldWrapper;