import * as yup from 'yup';

const Validation = yup.object().shape({
  fname: yup
    .string()
    .required("Name is a required field")
    .min(3, "Too Short!")
    .max(20, "Too Long!"),
  email: yup.string().email("invalid email").required("Email is a required field"),
  password: yup
    .string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Please enter your password"),
   confirmpassword: yup
    .string()
    .oneOf([yup.ref('password')],"passwords must match")
    .required("Please confirm your password"),
});

export default Validation;
