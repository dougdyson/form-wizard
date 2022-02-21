import * as yup from "yup";

const entityValidation = yup.object().shape({
  name: yup.string().required('Company Name is required')
                    .min(3, 'Must be greater than 3 characters')
                    .max(40, 'Must be less than 40 characters')
                    .matches(/^[aA-zZ0-9\s]+$/, 'No special characters allowed'),
  address: yup.string().required('Company wallet address is required')
                       .length(130, 'Address must be 130 characters')
                       .matches(/^[aA-zZ0-9\s]+$/, 'No special characters allowed'),
});

export { entityValidation } 