import { yupToFormErrors } from "formik";
import * as yup from "yup";

const entityValidation = yup.object().shape({
    name: yup.string().required('Company Name is required')
                      .matches(/^[A-Za-z0-9]*$/, 'No special characters allowed')
                      .min(3, 'Must be greater than 3 characters')
                      .max(40, 'Must be less than 40 characters'),
    address: yupToFormErrors.string().required('Wallet address required')
                      .length(64)
                      .matches(/^[A-Za-z0-9]*$/, 'No special characters allowed'),
  });

export { entityValidation } 