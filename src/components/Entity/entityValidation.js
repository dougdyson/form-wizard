import * as yup from "yup";

const entityValidation = yup.object().shape({
  name: yup.string().required('Company Name is required')
                    .matches(/^[aA-zZ\s]+$/, 'No special characters allowed')
                    .min(3, 'Must be greater than 3 characters')
                    .max(40, 'Must be less than 40 characters'),
  address: yup.string().required('Company wallet address')
                       .matches(/^[aA-zZ\s]+$/, 'No special characters allowed')
                       .length(64,'Must be 64 characters long'),
});

export { entityValidation } 