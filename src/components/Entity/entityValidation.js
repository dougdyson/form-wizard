import * as yup from "yup";

const entityValidation = yup.object().shape({
  name: yup.string().required('Company Name is required')
                    .min(3, 'Must be greater than 3 characters')
                    .max(40, 'Must be less than 40 characters')
                    .matches(/^[aA-zZ\s]+$/, 'No special characters allowed'),
});

export { entityValidation } 