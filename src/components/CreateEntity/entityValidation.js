import * as yup from "yup";

const entityValidation = yup.object().shape({
  name: yup.string().required('Company Name is required')
                    .matches(/^[aA-zZ0-9\s]+$/, 'No special characters allowed')
                    .min(3, 'Must be at least  3 characters')
                    .max(40, 'Must be less than 40 characters'),
  address: yup.string().required('Company wallet address is required')
                       .length(5, 'Address must be 5 characters')
                       .matches(/^[aA-zZ0-9\s]+$/, 'No special characters allowed'),
});

export { entityValidation } 