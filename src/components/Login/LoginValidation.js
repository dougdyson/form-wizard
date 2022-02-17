import * as yup from "yup";

const loginSchema = yup.object().shape({
  name: yup.string().required() ,
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required
})

export default loginSchema;