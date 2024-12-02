import { yupToFormErrors } from "formik";
import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
    userName : yup.string().test(
        "is-valid-username-or-email",
        "Username must be alphanumeric or a valid email address",
        (value : any) =>
          /^[a-zA-Z0-9]+$/.test(value) || // Alphanumeric check
          yup.string().email().isValidSync(value) // Email validation check
    )
      .min(1, 'Username must be at least 1 character')
      .max(50, 'Username must be at most 50 characters')
      .required("Username is required"),
    password : yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!#%])/,'Pasword contains at least one lowercase,one uppercase and one special character.').min(8,'password should contain at least 8 characters').required('password is required.'),
}) 


