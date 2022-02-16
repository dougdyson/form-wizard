import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const SelectWrapper = ({
  name,
  options,
  ...otherProps
}) => {
  // form state
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  // user change
  const handleChange = evt => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  // set values
  const configSelect = {
    ...field,
    ...otherProps,
    fullWidth: true,
    select: true,
    variant: 'outlined',
    onChange: handleChange
  };

  // user error
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        )
      })}
    </TextField>
  );
};

export default SelectWrapper;
