import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({
  children,
  ...otherProps
}) => {
  // form state
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  // default config values
  const configButton = {
    color: 'primary',
    fullWidth: true,
    variant: 'contained',
    onClick: handleSubmit
  }

  return (
    <Button
      {...configButton}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
