import * as yup from "yup";

const entityValidation = yup.object().shape({
  name: yup.string().required('Company name is required'),
});

export { entityValidation } 