import * as yup from "yup";

const entityValidation = yup.object().shape({
  name: yup.string().required('Company Name is required'),
});

export { entityValidation } 