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
    .required("Username is required"),
    password : yup.string().required('password is required.'),
}) 


