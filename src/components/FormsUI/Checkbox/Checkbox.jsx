import React from 'react';
import { useField, useFormikContext } from 'formik';
import { Checkbox, FormControl, FormControlLabel,FormGroup,FormLabel } from '@mui/material';

const CheckboxWrapper = ({
  name,
  label,
  legend,
  ...otherProps
}) => {
  // form state
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  // user change
  const handleChange = evt => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  // checkbox changed
  const configCheckbox = {
    ...field,
    onChange: handleChange
  };

  // user error
  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
